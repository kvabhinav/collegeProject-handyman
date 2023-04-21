//@ts-nocheck

import Link from 'next/link'

// apexchart imports 
import dynamic from 'next/dynamic'
import React from "react";
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });


export default function Card(props) {

    // card toggle function 
    function toggleclass(ind) {
        const elements = document.querySelectorAll('.card');
        elements.forEach((x, index) => {
            if (index === ind) {
                x.classList.toggle('is-flipped')
            }
        })
    }





    //  card color setting 
    let color1 = ''
    let color2 = ''
    let color3 = ''
    if (props.jobs[0].job === "Repairing") {
        color1 = "#17B890"
        color2 = "#88CCF1"
        color3 = "#DEE5E5"
    } else if (props.jobs[0].job === "Plumber") {
        color1 = "#7A82AB"
        color2 = "#9DC5BB"
        color3 = "#C1DFF0"
    } else if (props.jobs[0].job === "Electrician") {
        color1 = '#9DB4AB'
        color2 = "#BBDB9B"
        color3 = "#ABC4A1"
    } else if (props.jobs[0].job === "Carpenter") {
        color1 = '#2A324B'
        color2 = "#F7C59F"
        color3 = "#767B91"
    } else if (props.jobs[0].job === "Tiling") {
        color1 = '#485696'
        color2 = "#E7E7E7"
        color3 = "#F9C784"
    } else if (props.jobs[0].job === "Plastering") {
        color1 = '#A88FAC'
        color2 = "#5D4E60"
        color3 = "#E6F8B2"
    } else if (props.jobs[0].job === "Painter") {
        color1 = '#A53F2B'
        color2 = "#CCC9A1"
        color3 = "#F0FFCE"
    }



    // piechart functions 
    let jobName = props.jobs.map((item, index) => {
        return item.job
    },)

    let jobCount = props.jobs.map((item, index) => {
        if (item.count != undefined) {
            return item.count
        }
    })

    let jobColor= props.jobs.map((item)=>{
        if(item.job==='Repairing'){
            return "#17B890"
        }else if(item.job==='Plumber'){
            return "#7A82AB"
        }else if(item.job==="Electrician"){
            return "#9DB4AB"
        }else if (item.job==="Carpenter"){
            return "#2A324B"
        }else if(item.job==="Tiling"){
            return "#485696"
        }else if(item.job==="Plastering"){
            return "#A88FAC"
        }else if(item.job==="Painter"){
            return "#A53F2B"
        }
    })



    return (
        <div className="scene " onClick={() => toggleclass(props.ind)}>
            <div className="card" id="card">



                {/* card front side  */}
                <div className=" border-black border-[1px] rounded-3xl flex my-2 card__face">
                    <div className="w-7/12 h-72 p-6 pb-4">
                        <div className="flex-row items-center h-1/6">
                            <h1 className="text-2xl font-bold ">{props.firstName} {props.lastName}</h1>
                            <h1 className="online">online</h1>
                        </div>
                        <h1 className="h-1/6 font-medium pt-4">Payment: {props.jobs[0].min}Rs to {props.jobs[0].max}Rs</h1>
                        <div className="h-3/6">
                            <h1 className="font-bold underline decoration-solid decoration-1">Description</h1>
                            <h1 className="font-medium">Available locations: <br />
                                {
                                    props.locations.map((location, index) => {
                                        return (
                                            <div key={index} className="inline">
                                                <span className="element" >{location.place}</span>
                                            </div>
                                        )
                                    })
                                }
                            </h1>

                            <h1 className="font-medium">Other services: <br />
                                {
                                    props.jobs.map((job, index) => {
                                        return (
                                            <div key={index} className="inline">
                                                <span className="element">{job.job}</span>
                                            </div>
                                        )
                                    })
                                }
                            </h1>
                        </div>
                        <div className="h-1/6 flex items-end justify-center">

                            {/* booking button  */}
                            {props.userId !== "" ? <Link href={{
                                pathname: '/user/bookingForm',
                                query: {
                                    emp_id: props.emp_id,
                                    name: props.firstName + props.lastName,
                                    image: props.image,
                                    service: props.jobs[0].job,
                                    userId: props.userId
                                }
                            }} onClick={(event)=>event.stopPropagation()}><button className="px-4 py-[2px] hover:bg-[rgb(22,64,129)] bg-[rgb(37,87,167)] rounded-md font-bold text-white" type="submit">BOOK</button></Link> : <button
                                className="px-4 py-[2px] hover:bg-[rgb(22,64,129)] bg-[rgb(37,87,167)] rounded-md font-bold text-white" type="submit" onClick={(event) => {
                                    event.stopPropagation()
                                    props.toggle()
                                }}>BOOK</button>}
                        </div>
                    </div>

                    {/* card right side  */}
                    <div className="w-5/12 h-[287px]  rounded-3xl "
                        style={{ backgroundColor: `${color1}` }} >
                        <img src={props.image} alt=""
                            className="rounded-[32px] w-32 h-32 mx-auto mt-2 object-cover" />
                        <div className="rounded-full w-20 h-20 flex justify-center items-center mx-auto my-4" style={{ backgroundColor: `${color2}` }}>
                            <div
                                className="rounded-full w-16 h-16 flex justify-center items-center font-bold text-xl" style={{ backgroundColor: `${color3}` }} >
                                <h1>{props.rating}</h1>
                            </div>
                        </div>
                        <h1 className="text-white text-2xl font-bold text-center tracking-mamoth my-2 fieldFont">{props.jobs[0].job.toUpperCase()}</h1>
                    </div>
                </div>


                {/* card back side  */}
                <div className="card__face card__face--back bg-[#3587A4] text-white rounded-3xl">
                <div className='h-full w-full flex'>
                            <div className="w-3/6 h-full flex">
                                <Chart
                                    className="my-auto mx-0"
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
                                                            color: '#fff',
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        colors: jobColor
                                    }}
                                >
                                </Chart>

                            </div>
                            <div className="h-full w-3/6 flex justify-around itmes-end py-2 ">
                                <div className="py-16">
                                    <h1 className="text-6xl font-bold text-center">{props.experience}</h1>
                                    <br />
                                    <h2>days experience</h2>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}