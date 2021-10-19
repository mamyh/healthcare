import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className="h-screen md:flex items-center justify-center">
            <div className=" bg-yellow-100 p-20 border hover:shadow-md border-gray-300">
                <h1 className="pb-8"> Please Register Yourself </h1 >
                <form className=" border-b-2 border-gray-500" >
                    <label htmlFor="name" className="block pb-4">
                        Your Name :</label>
                    <input className="bg-white border p-2 border-gray-300" type="text" id="name" placeholder="your email" />
                    <label htmlFor="email" className="block pb-4">
                        Email :</label>
                    <input className="bg-white border p-2 border-gray-300" type="email" id="email" placeholder="your email" />

                    <label htmlFor="password" className="block pb-4">
                        Password :</label>
                    <input className="bg-white border p-2 border-gray-300" type="password" id="password" placeholder="your password" />
                    <label htmlFor="cpassword" className="block pb-4">
                        Confirm  Password :</label>
                    <input className="bg-white border p-2 border-gray-300" type="password" id="cpassword" placeholder="your password" />
                    <div className="text-right py-4 ">

                        <input type="submit" className="px-4 text-white bg-yellow-500 rounded-md " value="Login" />
                    </div>
                </form>
                <div>Have an account ? <Link to="/login">Login</Link></div>
            </div >
        </div>
    )
}

export default Register
