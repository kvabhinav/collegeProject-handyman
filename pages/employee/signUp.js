
import Link from "next/link";
import React from "react";
import { useState } from 'react'
import { withRouter } from 'next/router'
import { useRouter } from 'next/router'


function empSignUp({ router }) {

    const router1=useRouter()

    // state for form 
    const [user,setUser]=useState({
        email:"",
        phone:"",
        password:""
    })


    // onchange handling function 
    function handleChange(event) {
        
        setUser((prevData => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        }))
    }


    // data submission handling function 
    async function submitForm() {
        const response = await fetch('/api/employeeSignup', {
            method: 'POST',
            body: JSON.stringify({
                user:user,
                emp_id:router.query
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json()

        if (data.modifiedCount === 0) {
            const error = document.getElementById("error")
            error.style.display = "flex";

        } else {
            router1.push({
                pathname: "/employee/profile",
                query: router.query
            })
        }
        
    }
    


    return (
        <div className="container mx-auto ">
            <div className="mx-auto max-w-sm bg-[rgb(37,87,167)] bg-opacity-10 px-8 py-14 pb-24 my-16 rounded-lg shadow-xl hover:shadow-2xl">
                <div className="text-center mb-8">
                    <h1 className="font-extrabold text-3xl"> Employee SignUp</h1>
                </div>

                <form action="#">
                    <div className="mt-5 font-semibold text-sm">
                        <label>User name or Email</label>
                        <input type="text" className="block w-full px-4 py-2 border rounded-xl border-gray-500 shadow-md" name="email" value={user.email} onChange={handleChange} />
                    </div>

                    <div className="mt-5 font-semibold text-sm">
                        <label>Phone Number</label>
                        <input type="tel" className="block w-full px-4 py-2 border rounded-xl border-gray-500 shadow-md" name="phone" value={user.phone} onChange={handleChange} />
                    </div>

                    <div className="mt-5 font-semibold text-sm">
                        <label>Password</label>
                        <input type="password" className="block w-full px-4 py-2 border rounded-xl border-gray-500 shadow-md" name="password" value={user.password} onChange={handleChange} />
                    </div>


                </form>
                <div className="flex items-center my-4">
                    <input type="checkbox" name="" id="default-checkbox" className="w-4 h-4 rounded-full shadow-md hover:shadow-lg  focus:ring-[rgb(37,87,167)] dark:focus:ring-[rgb(37,87,167)]   " />
                    <label htmlFor="default-checkbox" className="ml-2 text-xs font-medium  ">Accept all terms and conditions </label>

                </div>
                <div className="my-10">
                    <button className="cursor-pointer font-semibold p-1 rounded-full  bg-[rgb(37,87,167)] text-white w-full hover:bg-[rgb(37,87,167,0.9)] hover:text-white shadow-md hover:shadow-inner" onClick={submitForm}>Login</button>
                </div>
                <div className="hidden px-4 py-2  justify-center items-center font-bold bg-red-400 rounded-md border-2 border-red-700 my-2 mx-auto" id="error">
                    <h1 className="text-center">INCORRECT EMAIL PHONE OR PASSWORD</h1>
                </div>

                <div className="px-6 text-xs ml-16 w-fit">

                    <a href="#" className="flex justify-center ">
                        <button className="   items-center flex justify-start pr-2 w-full rounded-full border border-gray-400 text-gray-700">

                            <svg className="w-5 ml-2 mr-1" xmlns="http://www.w3.org/2000/svg" width="2443" height="25" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" /><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" /><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" /><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" /></svg>
                            Log in with Google



                        </button>


                    </a>

                </div>
            </div>

        </div>
    )
}

export default withRouter(empSignUp)