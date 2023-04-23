//@ts-nocheck

import Navbar from '../components/home/Navbar'
import Header from '../components/home/Header'
import ContentLayout from '../components/layout/ContentLayout'
import MainLayout from '../components/layout/MainLayout'
import Card from '../components/home/Card'

import clientPromise from '@/lib/mongodb'


export default function Home(props) {

  function bookingHandler() {
    const data = document.getElementById('popup')
    console.log(data)
    data.classList.add("flex")
    data.classList.remove("hidden")
    function showDiv() {
      const data = document.getElementById('popup')
      data.classList.add("hidden")
      data.classList.remove("flex")
    }
    setTimeout(showDiv, 2000);
  }

  return (
    <div>
      <MainLayout>
        <Navbar user={props.userId} />
        <Header user={props.userId} />
        <ContentLayout>

          <div className='w-60 h-20 font-bold text-lg shadow-xl items-center justify-center hidden bg-blue-900 text-white rounded-xl  top-1/2 left-[610px] z-50 fixed' id='popup'>
            <h1 className=''>SIGN IN TO REGISTER</h1>
          </div>

          <ul className="grid grid-cols-2 m-4">
            {props.cards.map((card, index) => (
              <li className='my-4 mx-auto' key={card.id}>
                <Card
                  toggle={bookingHandler}
                  userId={props.userId}
                  ind={index}
                  key={card.id}
                  emp_id={card.id}
                  firstName={card.firstName.toUpperCase()}
                  lastName={card.lastName.toUpperCase()}
                  rating={card.rating}
                  from={card.min}
                  to={card.max}
                  locations={card.locations}
                  image={card.image}
                  jobs={card.jobs}
                  cardType={card.jobs}
                  experience={card.experience}
                />
              </li>
            ))}
          </ul>
        </ContentLayout>
      </MainLayout>
    </div>
  )
}


export async function getServerSideProps(context) {
  const req = context.req
  const res = context.res
  const user = context.query


  // searching variables 
  let jobTitle = ""
  let location = ""
  jobTitle=context.query.jobTitle
  location=context.query.location

  console.log(location,jobTitle)
  let userId
  if (Object.keys(user).length === 0) {
    userId = ""
  } else {
    userId = `${Object.getOwnPropertyNames(user)[0]}`
  }

  const client = await clientPromise;
  const db = await client.db('collegeProject')

  let results = []
  if (jobTitle === undefined || location === undefined) {
    results = await db.collection('employees').find({}, { sex: 0, dob: 0, email: 0, phone: 0, house: 0, area: 0, city: 0, postcode: 0, district: 0, firstName: 0 }).toArray()
  } else if (jobTitle !== undefined && location==="") {
    results = await db.collection('employees').find({ "jobs.job": jobTitle }, { sex: 0, dob: 0, email: 0, phone: 0, house: 0, area: 0, city: 0, postcode: 0, district: 0, firstName: 0 }).toArray()
  } else if (jobTitle === "" && location!== undefined){
    results = await db.collection('employees').find({ "locations.place": location }, { sex: 0, dob: 0, email: 0, phone: 0, house: 0, area: 0, city: 0, postcode: 0, district: 0, firstName: 0 }).toArray()
  }
  // console.log(results)

  return {
    props: {
      cards: results.map(result => (
        {
          firstName: result.firstName,
          lastName: result.lastName,
          locations: result.locations,
          image: result.image,
          jobs: result.jobs,
          experience: result.experience,
          rating: result.rating,
          id: result._id.toString()
        }
      )),
      userId: userId
    }
  }
}
