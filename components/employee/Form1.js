import { useRouter } from 'next/router'
import { useState } from 'react'


export default function Form() {

    // state initialisation 
    const router = useRouter()
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        sex: "Male",
        dob: 0,
        email: "",
        phone: "",
        house: "",
        area: "",
        city: "",
        postCode: 0,
        district: "",
        state: "",
        image: '',
        experience:'0',
        rating:'new',
        status:'offline'
    })




    // handle change function 
    async function handleChange(event) {

        if (event.target.name === "image") {
            const file = event.target.files[0];
            var base64 = await convertToBase64(file);
        }
        setFormData(prevState => {
            if (event.target.name === "image") {

                return {
                    ...prevState,
                    [event.target.name]: base64
                }
            } else {
                return {
                    ...prevState,
                    [event.target.name]: event.target.value
                }
            }
        })
    }




    // form submission function 
    async function submitForm() {
        const response = await fetch('/api/formHandle1', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        let alldata = await response.json();
        router.push({
            pathname: '/employee/registration2',
            query: { empl_id: alldata.insertedId }
        })
    }


    return (
        <div className='border-2 border-black mt-4 border-dashed'>
            <form method='POST' className="w-fit mx-auto">
                <div className=' flex justify-center  py-10 no-underline hover:underline'>
                    <h1 className='text-3xl font-bold'>EMPLOYEE REGISTRATION</h1>
                </div>



                <div className='grid grid-cols-3 place-items-center'>

                    {/* name input field  */}
                    <div>
                        <label htmlFor="" className='form-heading'>Full Name</label>
                        <br />
                        <input type="text" placeholder="first name" name="firstName" className="input_field" value={formData.firstName} onChange={handleChange} />
                    </div>

                    <div className='self-end'>
                        <input type="text" placeholder="last name" name="lastName" className="input_field" value={formData.lastName} onChange={handleChange} />
                    </div>

                    {/* image upload  */}
                    <div className='row-span-2'>
                        <label className="flex justify-center  mb-2 text-sm font-medium pt-4 text-gray-900 "
                            htmlFor="image">Upload photo
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                            </svg>

                        </label>
                        <input className="upload-button"
                            id="file_input" type="file" name="image" onChange={handleChange} />
                    </div>

                    {/* date of birth  */}
                    <div>
                        <label htmlFor="" className='form-heading'>Date of Birth</label>
                        <br />
                        <input type="date" name='dob' className='input_field' />
                    </div>

                    {/* select gender  */}
                    <div>
                        <label htmlFor="" className='form-heading'>Sex</label>
                        <br />
                        <select name="sex" id="" className='input_field' value={formData.sex} onChange={handleChange}>
                            <option value="Male" >Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>

                    {/* email  */}
                    <div>
                        <label htmlFor="" className='form-heading'>Email</label>
                        <br />
                        <input type="text" className='input_field ' name='email' value={formData.email} onChange={handleChange} />
                    </div>

                    {/* phone number  */}
                    <div>
                        <label htmlFor="" className='form-heading'>Phone Number</label>
                        <br />
                        <input type="text" className='input_field' name='phone' value={formData.phone} onChange={handleChange} />
                    </div>
                </div>



                {/* address section  */}
                <h1 className='font-semibold text-lg px-10 pl-2 py-4 underline ml-2'>Address</h1>

                <div className='grid grid-cols-3 place-items-center'>
                    <div>
                        <label htmlFor="" className='form-heading'>House name/Flat no.</label>
                        <br />
                        <input type="text" className='input_field w-80' name='house' value={formData.house} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="" className='form-heading'>Area</label>
                        <br />
                        <input type="text" className='input_field w-80' name='area' value={formData.area} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="" className='form-heading'>City</label>
                        <br />
                        <input type="text" className='input_field w-80' name='city' value={formData.city} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="" className='form-heading'>Postal Code</label>
                        <br />
                        <input type="text" className='input_field w-80' name='postCode' value={formData.postCode} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="" className='form-heading'>District</label>
                        <br />
                        <input type="text" className='input_field w-80' name='district' value={formData.district} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="" className='form-heading'>State</label>
                        <br />
                        <input type="text" className='input_field w-80' name='state' value={formData.state} onChange={handleChange} />
                    </div>
                </div>
            </form>

            {/* form submit button  */}
            <button className='button2 my-6 block mx-auto' onClick={submitForm} >SUBMIT</button>
        </div>
    )
}

// image convert to base64 format

function convertToBase64(file){
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result)
      };
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }