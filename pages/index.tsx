//@ts-nocheck

import Navbar from '../components/home/Navbar'
import Header from '../components/home/Header'
import ContentLayout from '../components/layout/ContentLayout'
import MainLayout from '../components/layout/MainLayout'
import Card from '../components/home/Card'

import clientPromise from '@/lib/mongodb'


export default function Home(props) {
  return (
    <div>
      <MainLayout>
        <Navbar />
        <Header />
        <ContentLayout>
        <ul className="flex m-4">
        {props.cards.map((card, index) => (
          <li className='my-4 mx-auto' key={card.id}>
            <Card
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
  const user=context.query

  const client = await clientPromise;
  const db = await client.db('collegeProject')
  const results = await db.collection('employees').find({}, { sex: 0, dob: 0, email: 0, phone: 0, house: 0, area: 0, city: 0, postcode: 0, district: 0, firstName: 0 }).toArray()

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
      ))
    }
  }
}
