//@ts-nocheck

import MainLayout from "../../components/layout/MainLayout"
import Navbar from "../../components/home/Navbar"
import Link from "next/link"




export default function Bookings(props) {

    // console.log(props.userId)
    return (
        <MainLayout>
            <Navbar user={props.userId} />
            <div className="container mx-auto">


                {/* booking lists  */}
                <ul >
                    {Object.keys(props.bookings).length === 0 ? <h1 className="flex justify-center items-end mt-96">YOU DON'T HAVE ANY BOOKINGS</h1> : props.bookings.map((booking) => {
                        let color = ''
                        if (booking.status === "booked") {
                            color = "orange"
                        } else if (booking.status === "pay") {
                            color = "green"
                        } else if (booking.status === "finished") {
                            color = "blue"
                        }
                        console.log(color)
                        return (
                            <li key={booking.id}>
                                <div className="mx-40 flex-col ">
                                    <div className="bg-[#EDF4FA] h-40 mx-12 flex rounded-xl my-4">
                                        <div className="section">
                                            <h1 className="heading">DATE</h1>
                                            <h2 className="subheading">{booking.date}</h2>
                                        </div>
                                        <div className="section">
                                            <h1 className="heading">SERVICE TYPE</h1>
                                            <h2 className="subheading">{booking.serviceType}</h2>
                                        </div>
                                        <div className="section">
                                            <h1 className="heading">SERVICING TIME</h1>
                                            <h2 className="subheading">{booking.time}</h2>
                                        </div>
                                        <div className="section">
                                            <h1 className="heading">EMPLOYEE</h1>

                                            <img src={booking.emp_image} alt="" className="w-24 h-24 contain mx-auto mt-2 rounded-full object-cover" />

                                            <h2 className="subheading py-1" >{booking.emp_name}</h2>
                                        </div>
                                        {/* <div className="w-1/6 h-40 p-2 flex-col items-center justify-between">
                                            <h1 className="heading">PAYMENT</h1>
                                            <h2 className="subheading">1500Rs</h2>
                                        </div> */}
                                        <div className="section">
                                            <h1 className="heading">STATUS</h1>
                                            {booking.status === "pay" ?
                                                <Link href={{
                                                    pathname: '/user/userBill',
                                                    query: {
                                                        bookingId: booking.id.toString(),
                                                        userId: props.userId,
                                                        status: booking.status
                                                    }
                                                }}><button className="px-1 py-[0.5]  rounded-xl text-sm font-semibold block text-center w-20 mx-auto my-8 text-white" style={{ backgroundColor: `${color}` }} >{booking.status}</button></Link> :
                                                <button className="px-1 py-[0.5]  rounded-xl text-sm font-semibold block text-center w-20 mx-auto my-8 text-white" style={{ backgroundColor: `${color}` }}>{booking.status}</button>}
                                            {booking.status === "booked" ? <a className="underline block mx-auto w-10">Details</a> : <Link href={{
                                                pathname: '/user/userBill',
                                                query: {
                                                    bookingId: booking.id.toString(),
                                                    userId: props.userId,
                                                    status: booking.status
                                                }
                                            }} className="underline block mx-auto w-10">Details</Link>}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>

            </div>
        </MainLayout>
    )
}


export async function getServerSideProps(context) {
    const req = context.req
    const res = context.res
    const userId = context.query.user
    console.log(userId)



    // bookings fetch function 
    const response = await fetch('http://localhost:3000/api/bookings', {
        method: 'POST',
        body: JSON.stringify(userId),
        headers: {
            'Content-Type': 'application/json'
        }
    })


    const results = await response.json();
    // console.log(results)
    return {
        props: {
            bookings: results.map(result => (
                {
                    date: result.date,
                    time: result.time,
                    serviceType: result.serviceType,
                    emp_name: result.emp_name,
                    emp_image: result.emp_image,
                    status: result.status,
                    id: result._id.toString()

                }
            )),
            userId: userId,
        }
    }
}