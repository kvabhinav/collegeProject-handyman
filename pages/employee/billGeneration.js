//@ts-nocheck
import { useState, useEffect } from 'react'
import { withRouter, useRouter } from 'next/router'

function billGeneration({ router }) {


    const router1 = useRouter()

    // bill submission function 
    async function sentBill() {
        const response = await fetch('/api/billSubmission', {
            method: 'POST',
            body: JSON.stringify({
                data: {
                    data1: data1,
                    data2: data2,
                    data3: data3,
                    data4: data4,
                    data5: data5,
                    total: total,
                    date: router.query.date,
                    serviceType: router.query.serviceType,
                    userName: router.query.userName,
                    buildingName: router.query.buildingName,
                    building: router.query.building,
                    area: router.query.area,
                    city: router.query.city,
                    pincode: router.query.pincode,
                    emp_name: router.query.emp_name,
                    experience: router.query.experience
                },
                _id: router.query._id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })


        const data = await response.json()
        router.push({
            pathname: "/employee/profile",
            query: router.query.emp_id
        })

    }
    console.log(router.query.emp_id)


    

    // data set 1
    const [data1, setData1] = useState({
        service: "",
        quantity: "",
        rate: "",
        amount: 0
    })
    function handleChange1(event) {
        setData1(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })

    }

    // data set2 
    const [data2, setData2] = useState({
        service: "",
        quantity: "",
        rate: "",
        amount: 0
    })
    function handleChange2(event) {
        setData2(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })

    }

    // data set3 
    const [data3, setData3] = useState({
        service: "",
        quantity: "",
        rate: "",
        amount: 0
    })
    function handleChange3(event) {
        setData3(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })

    }

    // data set4 
    const [data4, setData4] = useState({
        service: "",
        quantity: "",
        rate: "",
        amount: 0
    })
    function handleChange4(event) {
        setData4(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })

    }

    // data set5 
    const [data5, setData5] = useState({
        service: "",
        quantity: "",
        rate: "",
        amount: 0
    })
    function handleChange5(event) {
        setData5(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })

    }


    // total value handler 
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(parseInt(data1.amount) + parseInt(data2.amount) + parseInt(data3.amount) + parseInt(data4.amount) + parseInt(data5.amount))
    }, [data1, data2, data3, data4, data5])
    return (

        <div className="container px-40 ">
            <div className="mx-auto border-2 border-black pl-8 pr-8 mt-8 mb-8" >

                <div className=" flex justify-center text-center py-6 underline">
                    <h1 className="font-extrabold text-2xl">EMPLOYEE SIDE USER BILL</h1>
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
                        <h1 className="font-semibold text-base">Date:{router.query.date}</h1>
                    </div>




                </div>

                <div className="grid grid-cols-2">
                    <div className=" pt-16 font-extrabold text-xl">
                        <span>BILL FROM,</span>
                        <h2 className="font-semibold text-sm">{router.query.emp_name}</h2>
                        <h2 className="font-semibold text-sm">Handyman employee</h2>
                        <h2 className="font-semibold text-sm">Plumbing,Electrical works</h2>
                        <h2 className="font-semibold text-sm">Experince :{router.query.experience} Works</h2>
                    </div>


                    <div className=" pl-40 pt-16 pr-28 font-extrabold text-xl">
                        <span>BILL TO,</span>
                        <h2 className="font-semibold text-sm">{router.query.userName}</h2>
                        <h2 className="font-semibold text-sm">{router.query.buildingName}({router.query.building}),</h2>
                        <h2 className="font-semibold text-sm">{router.query.area},</h2>
                        <h2 className="font-semibold text-sm">{router.query.city} (Via),</h2>
                        <h2 className="font-semibold text-sm">{router.query.pincode},</h2>
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
                                <th scope="col" className="px-6 py-3 border-r-2 border-gray-500 text-center">
                                    service
                                </th>
                                <th scope="col" className="px-6 py-3 border-r-2 border-gray-500 border-gray-500text-center">
                                    quantity
                                </th>
                                <th scope="col" className="px-6 py-3 border-r-2 border-gray-500 text-center">
                                    rate
                                </th>
                                <th scope="col" className="px-6 py-3 text-center">
                                    amount
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr className="py-4 border-b-2 border-gray-400 text-black" >
                                <td scope="row" className=" py-4 border-r-2 border-gray-400" >
                                    <input type="text" className="border-b  w-full shadow-sm hover:shadow" name="service" value={data1.service} onChange={handleChange1} /> <br />
                                    <br />
                                    <input type="text" className="border-b  w-full shadow-sm hover:shadow" name="service" value={data2.service} onChange={handleChange2} /> <br />
                                    <br />
                                    <input type="text" className="border-b  w-full shadow-sm hover:shadow" name="service" value={data3.service} onChange={handleChange3} /> <br />
                                    <br />
                                    <input type="text" className="border-b  w-full shadow-sm hover:shadow" name="service" value={data4.service} onChange={handleChange4} /> <br />
                                    <br />
                                    <input type="text" className="border-b  w-full shadow-sm hover:shadow" name="service" value={data5.service} onChange={handleChange5} /> <br />
                                    <br />
                                </td>
                                <td scope="row" className=" py-4 border-r-2 border-gray-400" >
                                    <input type="text" className="border-b  w-full shadow-sm hover:shadow" name="quantity" value={data1.quantity} onChange={handleChange1} /> <br />
                                    <br />
                                    <input type="text" className="border-b  w-full shadow-sm hover:shadow" name="quantity" value={data2.quantity} onChange={handleChange2} /> <br />
                                    <br />
                                    <input type="text" className="border-b  w-full shadow-sm hover:shadow" name="quantity" value={data3.quantity} onChange={handleChange3} /> <br />
                                    <br />
                                    <input type="text" className="border-b  w-full shadow-sm hover:shadow" name="quantity" value={data4.quantity} onChange={handleChange4} /> <br />
                                    <br />
                                    <input type="text" className="border-b  w-full shadow-sm hover:shadow" name="quantity" value={data5.quantity} onChange={handleChange5} /> <br />
                                    <br />
                                </td>
                                <td scope="row" className=" py-4 border-r-2 border-gray-400" >
                                    <input type="text" className="border-b  w-full shadow-sm hover:shadow" name="rate" value={data1.rate} onChange={handleChange1} /> <br />
                                    <br />
                                    <input type="text" className="border-b  w-full shadow-sm hover:shadow" name="rate" value={data2.rate} onChange={handleChange2} /> <br />
                                    <br />
                                    <input type="text" className="border-b  w-full shadow-sm hover:shadow" name="rate" value={data3.rate} onChange={handleChange3} /> <br />
                                    <br />
                                    <input type="text" className="border-b  w-full shadow-sm hover:shadow" name="rate" value={data4.rate} onChange={handleChange4} /> <br />
                                    <br />
                                    <input type="text" className="border-b  w-full shadow-sm hover:shadow" name="rate" value={data5.rate} onChange={handleChange5} /> <br />
                                    <br />
                                </td>
                                <td scope="row" className=" py-4 border-r-2 border-gray-400" >
                                    <input type="number" className="border-b  w-full shadow-sm hover:shadow" name="amount" value={data1.amount} onChange={handleChange1} /> <br />
                                    <br />
                                    <input type="number" className="border-b  w-full shadow-sm hover:shadow" name="amount" value={data2.amount} onChange={handleChange2} /> <br />
                                    <br />
                                    <input type="number" className="border-b  w-full shadow-sm hover:shadow" name="amount" value={data3.amount} onChange={handleChange3} /> <br />
                                    <br />
                                    <input type="number" className="border-b  w-full shadow-sm hover:shadow" name="amount" value={data4.amount} onChange={handleChange4} /> <br />
                                    <br />
                                    <input type="number" className="border-b  w-full shadow-sm hover:shadow" name="amount" value={data5.amount} onChange={handleChange5} /> <br />
                                    <br />
                                </td>

                            </tr>
                            <tr >
                                <th scope="row" className="px-6 py-4 ">

                                </th>
                                <td className="px-6 py-4 border-r-2 border-gray-400">

                                </td>
                                <th scope="row" className="px-6 py-4 border-r-2 border-gray-400 text-center">
                                    TOTAL
                                </th>
                                <td className="py-4 text-center">
                                    <h1>{total}</h1>

                                </td>


                            </tr>



                        </tbody>
                    </table>
                </div>


                <div className="text-sm font-bold flex justify-center mb-8">
                    <button className="border-2 border-black rounded-md w-20" onClick={sentBill}>SENT</button>
                </div>




            </div>
        </div >
    )
}
export default withRouter(billGeneration)