import MainLayout from "../../components/layout/MainLayout"
import Navbar from "../../components/home/Navbar"

import clientPromise from '@/lib/mongodb'


export default function Bookings(props) {
    return (
        <MainLayout>
            <Navbar />
                <div className="container mx-auto">


                    {/* booking lists  */}
                    <ul >
                        {props.bookings.map(booking => (
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
                                        <div className="w-1/6 h-40 p-2 flex-col items-center justify-between">
                                            <h1 className="heading">PAYMENT</h1>
                                            <h2 className="subheading">1500Rs</h2>
                                        </div>
                                        <div className="section">
                                            <h1 className="heading">STATUS</h1>
                                            <h2 className="px-1 py-[0.5] bg-blue-700 rounded-xl text-sm font-semibold text-center w-20 mx-auto my-8 text-white">booked</h2>
                                            <a href="" className="underline block mx-auto w-10">Details</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                </div>
        </MainLayout>
    )
}


export async function getServerSideProps(context) {
    const req = context.req
    const res = context.res
    const userid = context.query

    const client = await clientPromise;
    const db = await client.db('collegeProject')
    const results = await db.collection('bookings').find({ user: "rahul" }).toArray()

    return {
        props: {
            bookings: results.map(result => (
                {
                    date: result.date,
                    time:result.time,
                    serviceType: result.serviceType,
                    emp_name: result.emp_name,
                    emp_image: result.emp_image,
                    id: result._id.toString()

                }
            ))
        }
    }
}