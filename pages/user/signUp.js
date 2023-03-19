import Link from "next/link";
import React from "react";
import { useState } from 'react'
import { useRouter } from 'react'


export default function userSignUp() {

    const router=useRouter()

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
        const response = await fetch('/api/userSignup', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json()
        router.push({
            pathname:'/',
            query:data.insertedId
        })
        
    }

    


    return (
        <div className="container mx-auto ">
            <div className="mx-auto max-w-sm bg-[rgb(37,87,167)] bg-opacity-10 px-8 py-14 pb-24 my-16 rounded-lg shadow-xl hover:shadow-2xl">
                <div className="text-center mb-8">
                    <h1 className="font-extrabold text-3xl">signUp</h1>
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
                    <div className="flex justify-end">
                        <a href="#" className="font-normal text-xs ">Forgot password &#x3F;</a>
                    </div>


                </form>
                <div className="flex items-center mb-4">
                    <input type="checkbox" name="" id="default-checkbox" className="w-4 h-4 rounded-full shadow-md hover:shadow-lg  focus:ring-[rgb(37,87,167)] dark:focus:ring-[rgb(37,87,167)]   " />
                    <label htmlFor="default-checkbox" className="ml-2 text-xs font-medium  ">Accept all terms and conditions </label>

                </div>
                <div className="mt-10">
                    <Link href='/'><button className="cursor-pointer font-semibold p-1 rounded-full  bg-[rgb(37,87,167)] text-white w-full hover:bg-[rgb(37,87,167,0.9)] hover:text-white shadow-md hover:shadow-inner" >Login</button></Link>
                </div>
                <div className="flex justify-center m-4">
                    <a href="#" className="uppercase font-semibold text-xs">or signIn</a>
                </div>

                <div className="px-6 text-xs ml-16 w-fit">

                    

                </div>
            </div>

        </div>
    )
}