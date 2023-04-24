//@ts-nocheck


import clientPromise from '@/lib/mongodb'
import { ObjectId } from 'mongodb'
import Link from 'next/link'


export default function userBill(props) {

    console.log(props.userId)

    return (
        <div className="container px-40 ">
            <div className="mx-auto border-2 border-black pl-8 pr-8 mt-8 mb-8" >

                <div className=" flex justify-center text-center py-6 underline">
                    <h1 className="font-extrabold text-2xl">SERVICE INVOICE</h1>
                </div>

                <div className="grid grid-cols-2 ">
                    <div className=" flex justify-start  ">

                        <div >
                            <h1 className="font-black text-lg">HANDYMAN</h1>
                            <h2 className="font-semibold text-sm">BOOK YOUR SERVICES IN NO TIME</h2>
                            <h2 className="font-semibold text-sm">Customer care : 2656652665</h2>
                            <h2 className="font-semibold text-sm">Website : www.handyman.com</h2>
                        </div>

                    </div>

                    <div className=" flex justify-end pr-36 pt-10">
                        <h1 className="font-semibold text-base">Date:{props.date}</h1>
                    </div>




                </div>

                <div className="grid grid-cols-2">
                    <div className=" pt-16 font-extrabold text-xl">
                        <span>BILL FROM,</span>
                        <h2 className="font-semibold text-sm">{props.emp_name}</h2>
                        <h2 className="font-semibold text-sm">Handyman employee</h2>
                        <h2 className="font-semibold text-sm">Plumbing,Electrical works</h2>
                        <h2 className="font-semibold text-sm">Experince :{props.experience} Works</h2>
                    </div>


                    <div className=" pl-40 pt-16 pr-28 font-extrabold text-xl">
                        <span>BILL TO,</span>
                        <h2 className="font-semibold text-sm">{props.userName}</h2>
                        <h2 className="font-semibold text-sm">{props.buildingName} ({props.building}),</h2>
                        <h2 className="font-semibold text-sm"> {props.area}</h2>
                        <h2 className="font-semibold text-sm">{props.city} (Via),</h2>
                        <h2 className="font-semibold text-sm">{props.pincode},</h2>
                        <h2 className="font-semibold text-sm">Kerala</h2>
                    </div>

                </div>


                <div className=" flex justify-start text-center  pb-6 ">
                    <h1 className="font-bold text-xl">SERVICE TYPE : Plumbing</h1>
                </div>




                <div className=" rounded-lg border-2 border-black mb-9">
                    <table className="w-full text-sm text-left text-black ">
                        <thead className="text-xs text-black uppercase  border-b-2 border-gray-500">
                            <tr>
                                <th scope="col" className="px-6 py-3 border-r-2  text-center">
                                    service
                                </th>
                                <th scope="col" className="px-6 py-3 border-r-2 text-center">
                                    quantity
                                </th>
                                <th scope="col" className="px-6 py-3 border-r-2 text-center">
                                    rate
                                </th>
                                <th scope="col" className="px-6 py-3 border-r-2 text-center">
                                    amount
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className=" border-b-2 text-black">
                                <td scope="row" className="px-6 py-4 border-r-2">
                                    <span>{props.data1.service}</span><br />
                                    <span>{props.data2.service}</span><br />
                                    <span>{props.data3.service}</span><br />
                                    <span>{props.data4.service}</span><br />
                                    <span>{props.data5.service}</span><br />
                                </td>
                                <td className="px-6 py-4 border-r-2">
                                    <span>{props.data1.quantity}</span><br />
                                    <span>{props.data2.quantity}</span><br />
                                    <span>{props.data3.quantity}</span><br />
                                    <span>{props.data4.quantity}</span><br />
                                    <span>{props.data5.quantity}</span><br />
                                </td>
                                <td className="px-6 py-4 border-r-2">
                                    <span>{props.data1.rate}</span><br />
                                    <span>{props.data2.rate}</span><br />
                                    <span>{props.data3.rate}</span><br />
                                    <span>{props.data4.rate}</span><br />
                                    <span>{props.data5.rate}</span><br />

                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span>{props.data1.amount}</span><br />
                                    <span>{props.data2.amount}</span><br />
                                    <span>{props.data3.amount}</span><br />
                                    <span>{props.data4.amount}</span><br />
                                    <span>{props.data5.amount}</span><br />
                                </td>

                            </tr>
                            <tr >
                                <th scope="row" className="px-6 py-4 ">

                                </th>
                                <td className="px-6 py-4 border-r-2">

                                </td>
                                <th scope="row" className="px-6 py-4 border-r-2 text-center">
                                    TOTAL
                                </th>
                                <td className="px-6 py-4 text-center">
                                    {props.total}
                                </td>


                            </tr>




                        </tbody>
                    </table>
                </div>


                <div className="text-sm font-bold flex justify-center mb-8 ">
                    {props.status === "pay" ? <Link href={{
                        pathname: '/user/payment',
                        query: {
                            userId: props.userId,
                        }
                    }}><button className='px-4 py-1 border-2 border-black rounded-md'>PAY</button></Link> : <Link><button className='px-4 py-1 border-2 border-black rounded-md'>PAY</button></Link>}
                </div>




            </div>
        </div>

    )
}

export async function getServerSideProps(context) {

    const bookingId = context.query.bookingId
    const status = context.query.status
    const userId = context.query.userId
    console.log(bookingId, status, userId)
    const client = await clientPromise;
    const db = await client.db('collegeProject')
    const result = await db.collection('bill').findOne({ bookingId: new ObjectId(`${bookingId}`) })
    console.log(result)

    return {
        props: {
            data1: result.data1,
            data2: result.data2,
            data3: result.data3,
            data4: result.data4,
            data5: result.data5,
            total: result.total,
            date: result.date,
            serviceType: result.serviceType,
            userName: result.userName,
            buildingName: result.buildingName,
            building: result.building,
            area: result.area,
            city: result.city,
            pincode: result.pincode,
            experience: result.experience,
            emp_name: result.emp_name,
            status: status,
            userId: userId,
            _id: result._id.toString()
        }
    }
}