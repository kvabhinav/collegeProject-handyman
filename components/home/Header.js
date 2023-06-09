import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'



export default function Header(props) {

    const router = useRouter()
    const [search,setSearch] = useState({
        jobTitle:"",
        location:""
      })
    
      function handleChange(event){
        setSearch(prevFormData=>{
          return{
            ...prevFormData,
            [event.target.name]:event?.target.value
          }
        })
      }

      function clickHandle() {
        router.push({
            pathname:'/',
            query: {
                jobTitle:search.jobTitle,
                location:search.location
            },
          });
      }

    return (
        <header className="pb-12 pt-20 border-b-[1px] border-neutral-400">
            <div className="mx-auto w-fit ">
                <form action="">
                    <input type="text" placeholder="Search by job title or name" name="jobTitle" value={search.jobTitle} onChange={handleChange} className="search-bar" />
                    <input type="text" placeholder="Search by location" name="location" value={search.location} onChange={handleChange} className="search-bar mx-2" />
                    <button className="button2" onClick={clickHandle}>Search</button>
                </form>
            </div>
            <div className="w-96 mx-auto mt-4 pt-12">
                <h1 className="text-6xl font-bold text-center leading-relaxed">BOOK YOUR SERVICES IN NO TIME</h1>
            </div>
            <div className="flex justify-end items-center">
                <Link href={{
                    pathname:'/user/bookings',
                    query:{
                        user:props.user
                    }
                }} ><button className="button1">BOOKINGS</button></Link>
            </div>
        </header>
    )
}
