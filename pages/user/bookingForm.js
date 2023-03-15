import { useState } from 'react'
import { withRouter } from 'next/router'

import React from 'react'
import Link from 'next/link'

function BookingForm({ router }) {

    // formdata state 
    const [formData, setFormData] = useState({
        serviceType: 'installation',
        building: 'home',
        name: '',
        phoneNo: '',
        pincode: '',
        state: '',
        city: '',
        buildingName: '',
        area: '',
        date:new Date().toLocaleDateString(),
        time:new Date().toLocaleTimeString(),
        user:"rahul",
        emp_name:router.query.name,
        emp_image:router.query.image
    })


    // formdata onchange handling function
    function handleChange(event) {
        setFormData((prevData => {
            return {
                ...prevData,
                [event.target.name]: event.target.value
            }
        }))
    }


    // data submission handling function 
    async function submitForm() {
        const response = await fetch('/api/hello3', {
            method: 'POST',
            body: JSON.stringify({
                formData,
                id: router.query.emp_id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json()
    }

    return (
        <div>
            <div className="container mx-auto px-40">
                <main className="mt-20">
                    <div className="border-2 border-black w-[700px] mx-auto h-[500px]">
                        <div className="flex justify-center place-items-center mt-4">
                            <div className="h-2 w-40 bg-green-300 rounded-lg mx-1">

                            </div>
                            <div className="h-2 w-40 bg-gray-500 rounded-lg mx-1">

                            </div>
                        </div>
                        <form action="">
                            <div className="grid grid-cols-2  place-items-center h-[400px]">
                                <div className="col-span-2 my-4">
                                    <h1 className="font-bold text-lg">Give Your Details</h1>
                                </div>
                                <div>
                                    <label htmlFor="">What Type of Service do you want..?</label>
                                    <br />
                                    <select name="serviceType" value={formData.serviceType} onChange={handleChange} className="type">
                                        <option value="installation">installation</option>
                                        <option value="repair">repair</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="">Where do you want your service done..?</label>
                                    <br />
                                    <select name="building" value={formData.building} onChange={handleChange} className="type">
                                        <option value="Home">Home</option>
                                        <option value="Office">Office</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="">Full name</label>
                                    <br />
                                    <input type="text" name='name' value={formData.name} onChange={handleChange} className="type" />
                                </div>
                                <div>
                                    <label htmlFor="">Phone number</label>
                                    <br />
                                    <input type="text" name='phoneNo' value={formData.phoneNo} onChange={handleChange} className="type" />
                                </div>
                                <div>
                                    <label htmlFor="">Pincode</label>
                                    <br />
                                    <input type="text" name='pincode' value={formData.pincode} onChange={handleChange} className="type" />
                                </div>
                                <div>
                                    <label htmlFor="">State</label>
                                    <br />
                                    <input type="text" name='state' value={formData.state} onChange={handleChange} className="type" />
                                </div>
                                <div>
                                    <label htmlFor="">City</label>
                                    <br />
                                    <input type="text" name='city' value={formData.city} onChange={handleChange} className="type" />
                                </div>
                                <div>
                                    <label htmlFor="">House No,Building Name</label>
                                    <br />
                                    <input type="text" name='buildingName' value={formData.buildingName} onChange={handleChange} className="type" />
                                </div>
                                <div>
                                    <label htmlFor="">Road Name,Area,Colony</label>
                                    <br />
                                    <input type="text" name='area' value={formData.area} onChange={handleChange} className="type" />
                                </div>
                                <div className="col-span-2 mt-10">

                                    <Link href="/user/bookingSuccess">
                                        <button onClick={submitForm}
                                            className="px-4 py-2 hover:bg-[rgb(22,64,129)] bg-[rgb(37,87,167)] rounded-md font-bold text-white">BOOK
                                            NOW</button>
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default withRouter(BookingForm)

