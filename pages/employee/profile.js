//@ts-nocheck

import React from 'react'
import clientPromise from '@/lib/mongodb'
import { ObjectId } from 'mongodb'

import ContentLayout from '../../components/layout/ContentLayout'
import MainLayout from '../../components/layout/MainLayout'
import Navbar from '../../components/home/Navbar'

export default function Profile(props) {
    return (

        <MainLayout>
            <Navbar />
            <ContentLayout>

                <div className='flex mt-10'>
                    <div className='w-2/6 h-96 border-black border-2 rounded-md relative hover:shadow-2xl'>

                        <div className='bg-[#99DAFF] h-2/6'>
                            <img src={props.image} alt="" className='w-36 h-36 rounded-full absolute left-32 top-12' />
                        </div>

                        <div className='h-4/6 pt-20'>

                            <div className='text-center font-semibold'>
                                <h1 className='font-bold text-xl'>{props.name}</h1>
                                <h2>Kannur,kerala,india</h2>
                                <h2>{props.email}</h2>
                                <h2>{props.phone}</h2>
                            </div>
                            <div className='flex justify-center items-center'>
                                <button className='font-semibold text-xl  bg-[rgb(37,87,167)] opacity-90 px-2 text-white my-2 rounded-lg '>PLUMBER</button>
                            </div>

                        </div>

                    </div>

                    {/* second box  */}
                    <div className="w-4/6 h-96 border-2 border-black rounded-xl ml-10">
                        <div className="w-full h-10 rounded-bl-3xl rounded-br-3xl rounded-t-xl bg-[#99DAFF] py-1">
                            <h1 className="font-bold text-xl text-center ">TODAYS PROGRESS</h1>
                        </div>
                        <div className="grid grid-cols-3 p-4 place-items-center">
                            <div className="bg-[#99DAFF] w-32 h-32 rounded-lg p-6 border-2 border-gray-200 shadow-lg hover:shadow-inner">
                                <h1 className="text-xs text-center font-bold">TODAYS <br /> EARNINGS</h1>
                                <h2 className="font-bold text-2xl text-center">0 <span className="text-sm">Rs</span></h2>

                            </div>
                            <div className="bg-[#99DAFF] w-32 h-32 rounded-lg p-6 border-2 border-gray-200 shadow-lg hover:shadow-inner">
                                <h1 className="text-xs text-center font-bold">TODAYS <br /> EARNINGS</h1>
                                <h2 className="font-bold text-2xl text-center">0 <span className="text-sm">Rs</span></h2>

                            </div>
                            <div className="bg-[#99DAFF] w-32 h-32 rounded-lg p-6 border-2 border-gray-200 shadow-lg hover:shadow-inner">
                                <h1 className="text-xs text-center font-bold">TODAYS <br /> EARNINGS</h1>
                                <h2 className="font-bold text-2xl text-center">0 <span className="text-sm">Rs</span></h2>

                            </div>

                        </div>
                        <div className="flex w-full ">
                            <div className="w-5/12 ">

                            </div>
                            <div className="w-7/12 flex-col justify-center items-center p-6">
                                <div className="bg-[#99DAFF] h-14 w-56 rounded-lg border-2 border-gray-200 shadow-lg hover:shadow-inner p-1 ml-auto mr-10">
                                    <h1 className="text-xs text-center font-bold">TOTAL EARNINGS</h1>
                                    <h2 className="font-bold text-2xl text-center">0</h2>
                                </div>
                                <div className="bg-[#99DAFF] h-14 w-56 rounded-lg border-2 border-gray-200 shadow-lg hover:shadow-inner p-1 ml-auto my-6 mr-10">
                                    <h1 className="text-xs text-center font-bold">WORK EXPERIENCE</h1>
                                    <h2 className="font-bold text-2xl text-center">0</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </ContentLayout>
        </MainLayout>

    )
}

export async function getServerSideProps(context) {
    const req = context.req
    const res = context.res
    const user = context.query
    let userId = `${Object.getOwnPropertyNames(user)[0]}`

    const client = await clientPromise;
    const db = await client.db('collegeProject')
    const result = await db.collection('employees').findOne({ _id: new ObjectId(userId) })
    return {
        props: {
            name: result.firstName + result.lastName,
            email: result.email,
            phone: result.phone,
            image: result.image,
            experience: result.experience
        }
    }
}