//@ts-nocheck

import Link from 'next/link'

export default function Card(props) {

    // card toggle function 
    function toggleclass(ind) {
        const elements = document.querySelectorAll('.card');
        elements.forEach((x,index) => {
            if(index===ind){
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
    } else if (props.jobs[0].job === "Plumbing") {
        color1 = "#3587A4"
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
                            <Link href={{
                                pathname: '/user/bookingForm',
                                query: {
                                    emp_id: props.emp_id,
                                    name: props.firstName + props.lastName,
                                    image: props.image,
                                    service:props.jobs[0].job,
                                    userId: props.userId
                                }
                            }}><button className="px-4 py-[2px] hover:bg-[rgb(22,64,129)] bg-[rgb(37,87,167)] rounded-md font-bold text-white" type="submit">BOOK</button></Link>
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
                    <div className="h-1/6 flex items-end font-bold text-lg px-4 pb-2 underline">
                        <h1>{props.name}</h1>
                    </div>
                    <div className="w-full h-4/6 flex">
                        <div className="w-4/6 flex px-6 items-center">
                            <div className="piechart flex justify-center items-center" id="pie">
                                <div className="w-20 h-20 rounded-full bg-[#3587A4]  flex justify-center items-center">
                                    <h1 className="text-2xl font-bold">36</h1>
                                </div>
                            </div>
                        </div>
                        <div className="2/6 py-10">
                            <h1 className="text-6xl font-bold text-center">{props.experience}</h1>
                            <br />
                            <h2>days experience</h2>
                        </div>
                    </div>
                    <div className="h-1/6 flex justify-around itmes-end py-2 ">
                        {props.jobs.map((item, index) => {
                            return (
                                <div className="flex items-center " key={index}>
                                    <div className="w-5 h-5 rounded-full  bg-[#FF6B35] mx-2">
                                    </div>
                                    <h2 >{item.job}</h2>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}