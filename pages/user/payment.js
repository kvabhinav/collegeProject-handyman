//@ts-nocheck

import { FaGooglePay } from 'react-icons/fa';
import { SiPhonepe } from 'react-icons/Si';
import { BsStar } from 'react-icons/Bs';
import { BsStarFill } from 'react-icons/Bs';
import { TfiWallet } from 'react-icons/Tfi';

import Link from 'next/link'

export default function (props) {

    let rating = 0

    function clickHandler(event) {
        const ratingbox = document.getElementById('ratingbox')
        ratingbox.classList.remove('hidden')
        ratingbox.classList.add('block')


        const star1 = document.getElementById('star1')
        const stars1 = document.getElementById('stars1')

        const star2 = document.getElementById('star2')
        const stars2 = document.getElementById('stars2')

        const star3 = document.getElementById('star3')
        const stars3 = document.getElementById('stars3')

        const star4 = document.getElementById('star4')
        const stars4 = document.getElementById('stars4')

        const star5 = document.getElementById('star5')
        const stars5 = document.getElementById('stars5')
        // alert(event.target.id)
        if (event.target.id === "star1") {
            rating = 1
            stars1.classList.remove('hidden')
            star1.classList.add("hidden")
        } else if (event.target.id === "star2") {
            rating = 2
            stars2.classList.remove('hidden')
            star2.classList.add("hidden")
            stars1.classList.remove('hidden')
            star1.classList.add("hidden")
        } else if (event.target.id === "star3") {
            rating = 3
            stars3.classList.remove('hidden')
            star3.classList.add("hidden")
            stars2.classList.remove('hidden')
            star2.classList.add("hidden")
            stars1.classList.remove('hidden')
            star1.classList.add("hidden")
        } else if (event.target.id === "star4") {
            rating = 4
            stars4.classList.remove('hidden')
            star4.classList.add("hidden")
            stars3.classList.remove('hidden')
            star3.classList.add("hidden")
            stars2.classList.remove('hidden')
            star2.classList.add("hidden")
            stars1.classList.remove('hidden')
            star1.classList.add("hidden")
        } else if (event.target.id === "star5") {
            rating = 5
            stars5.classList.remove('hidden')
            star5.classList.add("hidden")
            stars4.classList.remove('hidden')
            star4.classList.add("hidden")
            stars3.classList.remove('hidden')
            star3.classList.add("hidden")
            stars2.classList.remove('hidden')
            star2.classList.add("hidden")
            stars1.classList.remove('hidden')
            star1.classList.add("hidden")
        }

    }


    // update status function 
    // function updateStatus(){
    //     async function submitForm() {
    //         const response = await fetch('/api/updateStatus2', {
    //             method: 'POST',
    //             body: JSON.stringify({
    //             }),
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         })

    //         const data = await response.json()
    //     }
    // }




    return (
        <div className="container mx-auto p-8">
            <div className='w-80 h-48 bg-gray-600  hidden fixed top-96 left-[600px] pt-10 rounded-md' id='ratingbox'>
                <div className='flex'>

                    <BsStar color="white" size="50px" className='mx-2' onClick={clickHandler} id='star1'></BsStar>
                    <BsStarFill color="white" size="50px" className='mx-2 hidden' onClick={clickHandler} id='stars1'></BsStarFill>
                    <BsStar color="white" size="50px" className='mx-2' onClick={clickHandler} id="star2"></BsStar>
                    <BsStarFill color="white" size="50px" className='mx-2 hidden' onClick={clickHandler} id='stars2'></BsStarFill>
                    <BsStar color="white" size="50px" className='mx-2' onClick={clickHandler} id='star3'></BsStar>
                    <BsStarFill color="white" size="50px" className='mx-2 hidden' onClick={clickHandler} id='stars3'></BsStarFill>
                    <BsStar color="white" size="50px" className='mx-2' onClick={clickHandler} id='star4'></BsStar>
                    <BsStarFill color="white" size="50px" className='mx-2 hidden' onClick={clickHandler} id='stars4'></BsStarFill>
                    <BsStar color="white" size="50px" className='mx-2' onClick={clickHandler} id='star5'></BsStar>
                    <BsStarFill color="white" size="50px" className='mx-2 hidden' onClick={clickHandler} id='stars5'></BsStarFill>
                </div>
                <div className='px-32 pt-8'>
                    <Link href={{
                        pathname: '/user/bookings',
                        query: {
                            // bookingId: props.bookingId,
                            // status: props.status,
                            user:props.userId
                        }
                    }}><button className='py-2 px-4 rounded-md border-white border-2 text-white '>OK</button></Link>
                </div>
            </div>

            <div className=" mx-auto max-w-2xl  bg-[rgb(37,87,167)] bg-opacity-10   pb-[20px]  rounded-lg shadow-md hover:shadow-xl">
                <div className="flex justify-center mb-3 pt-3  underline">
                    <h1 className="font-extrabold text-3xl">Payment</h1>
                </div>
                {/* 
                <div className="text-lg font-medium pl-7 underline">
                    <i><span>UPI</span></i>
                </div> */}

                <div className=" grid grid-cols-4 pl-5 pt-2">
                    <a href="#" >
                        <button className="   items-center flex text-sm">
                            <FaGooglePay size="65px"></FaGooglePay>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" xmlns:v="https://vecta.io/nano"><path fill="#cfd8dc" d="M42 37a5 5 0 0 1-5 5H11a5 5 0 0 1-5-5V11a5 5 0 0 1 5-5h26a5 5 0 0 1 5 5v26z" /><path fill="#536dfe" d="M37 6H26.463L13.154 42H37a5 5 0 0 0 5-5V11a5 5 0 0 0-5-5z" /><g fill="#fafafa"><path d="M24.34 23.869v3.365h-1.067v-8.31h2.831a2.56 2.56 0 0 1 1.833.719c.496.447.776 1.086.766 1.754a2.3 2.3 0 0 1-.766 1.764c-.495.472-1.106.708-1.833.707l-1.764.001h0zm0-3.922v2.901h1.79a1.41 1.41 0 0 0 1.056-.43c.561-.545.573-1.442.028-2.003-.009-.01-.019-.019-.028-.028a1.39 1.39 0 0 0-1.056-.441l-1.79.001h0z" /><path d="M31.163 21.362c.789 0 1.412.211 1.868.633s.685 1 .684 1.734v3.504h-1.021v-.789h-.046c-.442.65-1.03.975-1.764.975-.626 0-1.15-.186-1.572-.557a1.78 1.78 0 0 1-.633-1.392c0-.588.222-1.056.667-1.404s1.038-.522 1.781-.522c.634 0 1.156.116 1.566.348v-.244c.002-.365-.159-.712-.441-.945-.282-.255-.65-.394-1.03-.389-.596 0-1.068.252-1.416.755l-.94-.592c.518-.743 1.283-1.115 2.297-1.115zm-1.381 4.131a.85.85 0 0 0 .354.696c.236.186.529.284.829.278.45-.001.882-.18 1.201-.499.354-.333.53-.723.53-1.172-.333-.265-.797-.398-1.392-.398-.434 0-.795.105-1.085.314s-.437.471-.437.781h0zm9.794-3.945l-3.564 8.192H34.91l1.323-2.866-2.344-5.325h1.16l1.694 4.084h.023l1.648-4.084h1.162z" /></g><path fill="#4285f4" d="M17.263 23.143a5.75 5.75 0 0 0-.082-.971h-4.502v1.839h2.578c-.107.593-.451 1.117-.953 1.451v1.193h1.539c.901-.831 1.42-2.059 1.42-3.512z" /><path fill="#34a853" d="M12.679 27.808c1.288 0 2.373-.423 3.164-1.152l-1.539-1.193c-.428.29-.98.456-1.625.456-1.245 0-2.302-.839-2.68-1.97H8.414v1.23c.81 1.611 2.461 2.629 4.265 2.629z" /><path fill="#fbbc04" d="M9.999 23.948c-.2-.593-.2-1.235 0-1.827v-1.23H8.414a4.77 4.77 0 0 0 0 4.287l1.585-1.23z" /><path fill="#ea4335" d="M12.679 20.15a2.59 2.59 0 0 1 1.831.716h0l1.362-1.362a4.59 4.59 0 0 0-3.194-1.243c-1.805 0-3.455 1.018-4.265 2.63l1.585 1.23c.379-1.131 1.436-1.971 2.681-1.971z" /></svg> */}
                            {/* Google Pay */}

                        </button>
                    </a>

                    <div>
                        <a href="#" >
                            <button className="   items-center flex text-sm">
                                <SiPhonepe size="48px"></SiPhonepe>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#4527a0" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z" /><path fill="#fff" d="M32.267,20.171c0-0.681-0.584-1.264-1.264-1.264h-2.334l-5.35-6.25	c-0.486-0.584-1.264-0.778-2.043-0.584l-1.848,0.584c-0.292,0.097-0.389,0.486-0.195,0.681l5.836,5.666h-8.851	c-0.292,0-0.486,0.195-0.486,0.486v0.973c0,0.681,0.584,1.506,1.264,1.506h1.972v4.305c0,3.502,1.611,5.544,4.723,5.544	c0.973,0,1.378-0.097,2.35-0.486v3.112c0,0.875,0.681,1.556,1.556,1.556h0.786c0.292,0,0.584-0.292,0.584-0.584V21.969h2.812	c0.292,0,0.486-0.195,0.486-0.486V20.171z M26.043,28.413c-0.584,0.292-1.362,0.389-1.945,0.389c-1.556,0-2.097-0.778-2.097-2.529	v-4.305h4.043V28.413z" /></svg> */}
                                {/* PhonePe */}

                            </button>
                        </a>
                    </div>

                    {/* <div>
                        <a href="#" >
                            <button className="   items-center flex text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px" baseProfile="basic"><polygon fill="#388e3c" points="29,4 18,45 40,24" /><polygon fill="#f57c00" points="21,3 10,44 32,23" /></svg>
                                BHIM
                            </button>
                        </a>
                    </div> */}

                    <div>
                        <a href="#" >
                            <button className="   items-center flex text-sm">
                                <TfiWallet size="48px"></TfiWallet>
                                {/* <svg className="pr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="48px" height="48px" id="wallet"><path d="M93 48.627h-.5V34.968c0-4.263-3.157-7.792-7.254-8.398v-3.073c0-4.687-3.813-8.5-8.5-8.5H72.98l-1.983-5.285a1.5 1.5 0 0 0-1.864-.901l-19.201 6.186H10.735c-3.989 0-7.235 3.246-7.235 7.235V82.76c0 4.687 3.813 8.5 8.5 8.5h72c4.687 0 8.5-3.813 8.5-8.5V69.101h.5c1.93 0 3.5-1.57 3.5-3.5V52.127c0-1.929-1.57-3.5-3.5-3.5zM74.106 17.998h2.64c3.032 0 5.5 2.467 5.5 5.5v2.971h-4.961l-.299-.797-2.88-7.674zm-4.33-3 2.437 6.494 1.868 4.977H24.109l44.582-14.362 1.085 2.891zm-59.041 3h29.884l-18.84 6.07-7.453 2.401h-3.591c-2.335 0-4.235-1.9-4.235-4.235s1.9-4.236 4.235-4.236zM89.5 82.76c0 3.033-2.468 5.5-5.5 5.5H12a5.506 5.506 0 0 1-5.5-5.5V28.096c.021.016.046.026.068.042.262.185.535.354.821.504.053.028.109.052.163.079.265.131.538.246.82.344.048.017.094.036.142.052.312.101.633.177.962.235.073.013.147.023.221.034.34.049.685.083 1.038.083H84c3.032 0 5.5 2.467 5.5 5.5v13.659h-9.938c-4.687 0-8.5 3.813-8.5 8.5v3.474c0 4.687 3.813 8.5 8.5 8.5H89.5V82.76zm4-17.159a.5.5 0 0 1-.5.5H79.562a5.506 5.506 0 0 1-5.5-5.5v-3.474c0-3.033 2.468-5.5 5.5-5.5H93a.5.5 0 0 1 .5.5v13.474z"></path><path d="M83.449 54.522a4.347 4.347 0 0 0-4.343 4.342c0 2.395 1.948 4.342 4.343 4.342s4.342-1.948 4.342-4.342a4.347 4.347 0 0 0-4.342-4.342zm0 5.685c-.74 0-1.343-.602-1.343-1.342a1.343 1.343 0 0 1 2.685 0c0 .739-.602 1.342-1.342 1.342z"></path></svg> */}
                                Other UPI
                            </button>
                        </a>
                    </div>


                </div>

                <div className="text-sm font-medium pl-6 mt-7">
                    <span>Or Pay using Credit&#47;Debit card</span>
                </div>


                <div className="border border-gray-500 ml-20 mr-20 mt-3 pb-6 rounded-lg">
                    <div className="flex justify-center mt-1">
                        <div className="mt-5 font-semibold text-sm">
                            <label>Cardholder Name</label>
                            <input type="name" className="block w-96 px-4 py-2 bg-gray-100 border rounded-xl border-black border-opacity-30 shadow-md hover:shadow text-xs font-normal" placeholder="Enter cardholder Name" />
                        </div>

                    </div>

                    <div className="flex justify-center">
                        <div className="mt-2 font-semibold text-sm">
                            <label>Card Number</label>
                            <input type="tel" className="block w-96 px-4 py-2 bg-gray-100 border rounded-xl border-black border-opacity-30 shadow-md hover:shadow text-xs font-normal" inputMode="numeric" maxlength="19" placeholder="xxxx xxxx xxxx xxxx" />
                        </div>

                    </div>



                    <div className="px-36 grid grid-cols-3 divide-x-3">
                        <div className="mt-2 font-semibold text-sm ">
                            <label>Expiry</label>
                            <input type="tel" className=" block w-14 px-4 py-2 bg-gray-100 border rounded-lg border-black border-opacity-30 shadow-md hover:shadow text-xs font-normal" inputMode="numeric" maxlength="2" placeholder="MM" />
                        </div>

                        <div className="mt-7 font-semibold text-sm ">

                            <input type="tel" className=" block w-14 px-4 py-2 bg-gray-100 border rounded-lg border-black border-opacity-30 shadow-md hover:shadow text-xs font-normal" inputMode="numeric" maxlength="2" placeholder="YY" />
                        </div>

                        <div className="mt-2 font-semibold text-sm ">
                            <label>CVV</label>
                            <input type="tel" className=" block w-14 px-4 py-2 bg-gray-100 border rounded-lg border-black border-opacity-30 shadow-md hover:shadow text-xs font-normal" inputMode="numeric" maxlength="3" placeholder="CVV" />
                        </div>
                    </div>

                </div>


                <hr className="w-full h-[1px] opacity-25 mx-auto my-6 bg-gray-400 " />

                <div className="grid grid-cols-2">
                    <div className="font-normal pl-6">
                        <h1>Service Cost &#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;</h1>
                    </div>

                    <div className=" flex justify-end pr-6 font-normal">
                        <h1>&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#62; Rs&#46;2000</h1>
                    </div>
                </div>

                <div className="grid grid-cols-2 mt-3">
                    <div className="font-normal pl-6">
                        <h1>Extra &#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;</h1>
                    </div>

                    <div className=" flex justify-end pr-6 font-normal">
                        <h1>&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#62; Rs&#46;200</h1>
                    </div>
                </div>

                <hr className="w-full h-[2px]  mx-auto my-6 bg-gray-800 " />


                <div className="grid grid-cols-2 mt-3">
                    <div className="font-semibold pl-6">
                        <h1>Sub Total</h1>
                    </div>

                    <div className=" flex justify-end pr-6 font-semibold">
                        <h1> Rs&#46;2200</h1>
                    </div>
                </div>

                <div className="flex justify-center mt-5 ">
                    <button className="text-base border bg-blue-200 hover:bg-blue-400 hover:text-white rounded-lg shadow-md hover:shadow-lg p-1 w-20" onClick={clickHandler}>Pay Now</button>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const req = context.req
    const res = context.res
    const userId = context.query.userId
    console.log(userId)
    return{
        props:{
            userId:userId
        }
    }
}