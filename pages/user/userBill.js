//@ts-nocheck

export default function userBill(props) {
    let item = "items"
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
                        <h1 className="font-semibold text-base">Date:11/04/2023</h1>
                    </div>




                </div>

                <div className="grid grid-cols-2">
                    <div className=" pt-16 font-extrabold text-xl">
                        <span>BILL FROM,</span>
                        <h2 className="font-semibold text-sm">Ajith</h2>
                        <h2 className="font-semibold text-sm">Handyman employee</h2>
                        <h2 className="font-semibold text-sm">Plumbing,Electrical works</h2>
                        <h2 className="font-semibold text-sm">Experince :23 Works</h2>
                    </div>


                    <div className=" pl-40 pt-16 pr-28 font-extrabold text-xl">
                        <span>BILL TO,</span>
                        <h2 className="font-semibold text-sm">Abhinav kv</h2>
                        <h2 className="font-semibold text-sm">Valiyaparambil House,</h2>
                        <h2 className="font-semibold text-sm">Onakkun PO,</h2>
                        <h2 className="font-semibold text-sm">Payyannur (Via),</h2>
                        <h2 className="font-semibold text-sm">Kasaragod (dist),</h2>
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
                                    <span>{item}</span><br />
                                    <span>{item}</span><br />
                                    <span>{item}</span><br />
                                    <span>{item}</span><br />
                                    <span>{item}</span><br />
                                </td>
                                <td className="px-6 py-4 border-r-2">
                                    <span>{item}</span><br />
                                    <span>{item}</span><br />
                                    <span>{item}</span><br />
                                    <span>{item}</span><br />
                                    <span>{item}</span><br />
                                </td>
                                <td className="px-6 py-4 border-r-2">
                                    <span>{item}</span><br />
                                    <span>{item}</span><br />
                                    <span>{item}</span><br />
                                    <span>{item}</span><br />
                                    <span>{item}</span><br />

                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span>{item}</span><br />
                                    <span>{item}</span><br />
                                    <span>{item}</span><br />
                                    <span>{item}</span><br />
                                    <span>{item}</span><br />
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
                                    Rs.1170
                                </td>


                            </tr>




                        </tbody>
                    </table>
                </div>


                <div className="text-sm font-bold flex justify-center mb-8 ">
                    <span>Thank you For Selecting Handyman</span>
                </div>




            </div>
        </div>

    )
}