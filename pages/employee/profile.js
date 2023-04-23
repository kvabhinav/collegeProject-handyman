//@ts-nocheck

import React from 'react'
import clientPromise from '@/lib/mongodb'
import { ObjectId } from 'mongodb'
import { useState, useEffect } from 'react'

import ContentLayout from '../../components/layout/ContentLayout'
import MainLayout from '../../components/layout/MainLayout'
import Navbar from '../../components/home/Navbar'


// apexchart imports 
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function Profile(props) {

    const emp_id = props._id
    const [status, setStatus] = useState(() => {
        return props.status
    })





    function updateStatus(e) {
        setStatus(e.target.name)
    }


    useEffect(() => {
        async function submitForm() {
            const response = await fetch('/api/updateStatus', {
                method: 'POST',
                body: JSON.stringify({
                    emp_id: emp_id,
                    status: status
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const data = await response.json()
        }
        submitForm()
    }, [status])




    // piechart functions 
    let jobName = props.jobs.map((item, index) => {
        return item.job
    },)

    let totalJobs = 0
    let jobCount = props.jobs.map((item, index) => {
        if (item.count != undefined) {
            totalJobs = totalJobs + item.count
            return item.count
        }
    })

    let jobColor = props.jobs.map((item) => {
        if (item.job === 'Repairing') {
            return "#17B890"
        } else if (item.job === 'Plumber') {
            return "#7A82AB"
        } else if (item.job === "Electrician") {
            return "#9DB4AB"
        } else if (item.job === "Carpenter") {
            return "#2A324B"
        } else if (item.job === "Tiling") {
            return "#485696"
        } else if (item.job === "Plastering") {
            return "#A88FAC"
        } else if (item.job === "Painter") {
            return "#A53F2B"
        }
    })


    // toggle button function 
    function toggle(e) {
        let button1 = document.getElementById('toggle-button1')
        let button2 = document.getElementById('toggle-button2')
        let button3 = document.getElementById('toggle-button3')
        if (e.target.name === "online") {
            updateStatus(e)
            console.log(status)
            e.target.classList.add('active')
            e.target.style.backgroundColor = 'green'
            button2.classList.remove('active')
            button2.style.backgroundColor = ''
            button3.classList.remove('active')
            button3.style.backgroundColor = ''

        } else if (e.target.name === "working") {
            updateStatus(e)
            console.log(status)
            e.target.classList.add('active')
            e.target.style.backgroundColor = 'blue'
            button1.classList.remove('active')
            button1.style.backgroundColor = ''
            button3.classList.remove('active')
            button3.style.backgroundColor = ''
        } else if (e.target.name === "offline") {
            e.target.classList.add('active')
            updateStatus(e)
            console.log(status)
            e.target.style.backgroundColor = 'red'
            button1.classList.remove('active')
            button1.style.backgroundColor = ''
            button2.classList.remove('active')
            button2.style.backgroundColor = ''
        }
    }


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
                                <h2>{props.email}</h2>
                                <h2>{props.phone}</h2>
                            </div>
                            <div className='flex justify-center items-center'>
                                <button className='font-semibold text-xl  bg-[rgb(37,87,167)] opacity-90 px-2 text-white my-2 rounded-lg '>PLUMBER</button>
                            </div>

                            {/* toggle button  */}
                            <div className="tri-state-toggle flex-row mx-14 mb-1">

                                <button className="tri-state-toggle-button" id="toggle-button1" name="online" onClick={toggle}>
                                    online
                                </button>

                                <button className="tri-state-toggle-button" id="toggle-button2" name="working" onClick={toggle}>
                                    working
                                </button>

                                <button className="tri-state-toggle-button" id="toggle-button3" name="offline" onClick={toggle}>
                                    offline
                                </button>

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
                            <div className="w-6/12 ">
                                {totalJobs !== 0 ? <Chart
                                    className="my-auto ml-16"
                                    type="donut"
                                    width={300}
                                    height={400}
                                    series={jobCount}
                                    options={{
                                        title: {
                                        },
                                        noData: { text: "Empty Data" },
                                        labels: jobName,
                                        plotOptions: {
                                            pie: {
                                                donut: {
                                                    labels: {
                                                        show: true,
                                                        total: {
                                                            show: true,
                                                            showAlways: true,
                                                            fontSize: 16,
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        colors: jobColor
                                    }}
                                >
                                </Chart> : <h1 className="font-bold text-black text-center text-3xl my-14">0 work taken</h1>}
                            </div>
                            <div className="w-6/12 flex-col justify-center items-center p-6">
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

                <div className='border-black border-2 rounded-md mt-4 w-full'>
                    {/* booking lists  */}
                    <ul >
                        {Object.keys(props.bookings).length !== 0 ? <h1 className="flex justify-center items-end my-10">No works yet...</h1> : props.bookings.map(booking => (
                            <li key={booking._id}>
                                <div className="bg-[#EDF4FA] h-40 mx-2 flex rounded-xl my-4">
                                    <div className="section2">
                                        <h1 className="heading">DATE</h1>
                                        <h2 className="subheading">{booking.date}</h2>
                                    </div>
                                    <div className="section2">
                                        <h1 className="heading">SERVICE TYPE</h1>
                                        <h2 className="subheading">{booking.serviceType}</h2>
                                    </div>
                                    <div className="section2">
                                        <h1 className="heading">SERVICING TIME</h1>
                                        <h2 className="subheading">{booking.time}</h2>
                                    </div>
                                    <div className="section2">
                                        <h1 className="heading">ADDRESS</h1>

                                        {/* <img src={booking.emp_image} alt="" className="w-24 h-24 contain mx-auto mt-2 rounded-full object-cover" /> */}

                                        <h2 className="subheading pb-[1px] pt-2" >{booking.buildingName}({booking.building})</h2>
                                        <h2 className="subheading py-[1px]" >{booking.area},{booking.city}</h2>
                                        <h2 className="subheading py-[1px]" >{booking.pincode}</h2>
                                    </div>
                                    <div className="section2">
                                        <h1 className="heading">PHONE NO</h1>
                                        <h2 className="subheading">{booking.phoneNo}</h2>
                                    </div>
                                    <div className="section2">
                                        <h1 className="heading">STATUS</h1>
                                        <h2 className="px-1 py-[0.5] bg-blue-700 rounded-xl text-sm font-semibold text-center w-20 mx-auto my-8 text-white">finish</h2>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

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
    const bookings = await db.collection('bookings').find({ empl_id: new ObjectId(userId) }).toArray()
    return {
        props: {
            name: result.firstName + result.lastName,
            email: result.email,
            phone: result.phone,
            image: result.image,
            experience: result.experience,
            jobs: result.jobs,
            status: result.status,
            _id: result._id.toString(),
            bookings: bookings.map(item => (
                {
                    date: item.date,
                    time: item.time,
                    serviceType: item.serviceType,
                    phoneNo: item.phoneNo,
                    pincode: item.pincode,
                    city: item.city,
                    buildingName: item.buildingName,
                    building: item.building,
                    area: item.area,
                    _id: item._id.toString()
                }
            )),

        }
    }
}