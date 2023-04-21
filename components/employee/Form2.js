import { useState } from 'react'
import { useRouter } from 'next/router'
import { withRouter } from 'next/router'



function Form2({ router }) {
    const router2 = useRouter()



    // range and field functions 
    const [formData, setFormData] = useState({
        job: 'Repairing',
        min: 0,
        max: 0,
        count: 0
    })

    const [array, setArray] = useState([])

    // handlchange function of job field 
    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })

    }

    //   setting array function for job field 
    function setValues() {
        setArray(prevArray => {
            if (array.length >= 2) {
                return [
                    ...prevArray
                ]
            } else {
                return [
                    ...prevArray,
                    formData
                ]
            }

        })
        setFormData(() => {
            return {
                job: 'Repairing',
                min: 0,
                max: 0,
                count: 0
            }
        })
    }

    // function for clearing job field array 
    function removeElement() {
        setArray(prevArray => {
            return [

            ]
        })
    }







    // district and place fields 
    const [places, setPlaces] = useState({
        place: 'Payyannur'
    })

    const [array2, setArray2] = useState([])

    // handlechange function for region 
    function handleChange2(event) {
        setPlaces(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })

    }

    // function for setting array for region 
    function setValues2() {
        setArray2(prevArray => {
            if (array.length >= 5) {
                return [
                    ...prevArray
                ]
            } else {
                return [
                    ...prevArray,
                    places
                ]
            }

        })
        setPlaces(() => {
            return {
                place: 'Payyannur'
            }
        })
    }

    // function for clearing places array 
    function removeElement2() {
        setArray2(prevArray => {
            return [

            ]
        })
    }




    // submit handling function 
    async function submitForm() {
        const response = await fetch('/api/formHandle2', {
            method: 'POST',
            body: JSON.stringify({
                array,
                array2,
                itemId: router.query.empl_id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json()
        router2.push({
            pathname: "/employee/signUp",
            query: router.query.empl_id
        })
    }



    let certificate = false

    return (
        <div className='px-20'>
            <div className='border-2 border-black px-16 mt-6 border-dashed'>

                {/* heading  */}
                <div className=' flex justify-center  py-10 no-underline hover:underline'>
                    <h1 className='text-3xl font-bold'>JOB DETAILS</h1>
                </div>


                {/* job field selection  */}
                <div className='flex' >
                    <div className='grid grid-rows-2 item w-1/3 place-items-start gap-6'>
                        <div className='my-auto'>
                            <label htmlFor="" className='form-heading text-lg'>Select your Job</label>
                            <br />
                            <select name="job" id="" className='input_field my-2' value={formData.job} onChange={handleChange}>
                                <option value="Repairing">Repairing</option>
                                <option value="Electrician">Electrician</option>
                                <option value="Plumber">Plumber</option>
                                <option value="Carpenter">Carpenter</option>
                                <option value="Painter">Painter</option>
                                <option value="Plastering">Plastering</option>
                                <option value="Tiling">Tiling</option>
                            </select>
                        </div>
                        <div className='border-black border-2 rounded-md w-fit p-2'>
                            <h1 className='font-semibold text-lg underline'>Price Range</h1>
                            <h2 className='text-sm mb-2'>Enter min and max rate for each work</h2>
                            <div className='inline-block'>
                                <label htmlFor="min">Min</label>
                                <input type="number" className='input_field w-16 mx-2 mb-0' name='min' step={50} min={0} max={1500} value={formData.min} onChange={handleChange} />
                            </div>
                            <div className='inline-block'>
                                <label htmlFor="max">Max</label>
                                <input type="number" className='input_field w-16 mx-2 mb-0' name='max' step={50} min={0} max={5000} value={formData.max} onChange={handleChange} />
                            </div>
                        </div>
                    </div>



                    {/* job field display  */}
                    <div className='w-2/3  mt-32'>
                        {array.map((arr) => {
                            if (arr.job === 'Electrical' && arr.job === "Repairing" && arr.job === "Plumbing") {
                                certificate = true
                            } else {
                                certificate = false
                            }
                            return (
                                <div className='flex'>
                                    <div className='flex itmes-center px-2 py-2 bg-gray-200 rounded-xl text-sm w-96 mt-2'>
                                        <h1 className='mx-6'>{arr.job}</h1>
                                        <h1 className='ml-auto '>min: {arr.min} Rs</h1>
                                        <h1 className='mx-2'>max: {arr.max} Rs</h1>

                                    </div>
                                    {certificate && <div className='flex items-center justify-center mx-4 '>
                                        <input type="file" className='bg-blue-700 rounded-md w-52' />
                                    </div>}

                                </div>

                            )
                        })}
                    </div>
                </div>



                {/* add and clear buttons for job field  */}
                <div className='flex mt-4'>
                    <div className='my-4 pl-1'>
                        <button onClick={setValues} className='border-neutral-500 border-[1px] rounded-md bg-red-500 py-2 px-6 mx-0 text-white' >Add</button>
                    </div>
                    <div className='my-4 ml-2'>
                        <button onClick={removeElement} className='button1 px-6 py-2' >Clear</button>
                    </div>
                </div>


                {/* select working region  */}
                <div className='pt-6'>
                    <label htmlFor="" className='form-heading text-lg'>Select your working region</label>
                    <br />
                    <select name="district" id="" className='input_field'>
                        <option value="kannur" >kannur</option>
                    </select>
                    <select name="place" id="" className='input_field m-2 ' value={places.place} onChange={handleChange2}>
                        <option value="Payyannur">Payyannur</option>
                        <option value="Thalassery">Thalassery</option>
                        <option value="Karivellur">Karivellur</option>
                    </select>


                    {/* add and clear button for region  */}
                    <button className='border-neutral-500 border-[1px] rounded-md bg-red-500 py-2 px-6 mx-0 text-white' onClick={setValues2}>Add</button>
                    <button onClick={removeElement2} className='button1 px-6 py-2' >Clear</button>


                    {/* display region  */}
                    <div className='h-6'>
                        {array2.map((arr) => {
                            return (
                                <h1 className='element w-28 text-center inline-block my-2'>{arr.place}</h1>
                            )
                        })}
                    </div>



                </div>
                <br />

                {/* submit button  */}
                <button onClick={submitForm} className='button2 ml-[490px]' >submit</button>
            </div>
        </div>
    )
}

export default withRouter(Form2)