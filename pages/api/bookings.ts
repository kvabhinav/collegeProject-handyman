//@ts-nocheck

import { ObjectId } from 'mongodb'
import clientPromise from '../../lib/mongodb'

export default async function handler2(req,res){

    const user=req.body
    // console.log(user)
    // const user="641568423b4cf496a76f9cf0"

    let userId
    if (user==="") {
        userId = ""
    } else {
        // console.log(new ObjectId(user))
        userId=user
    }

    const client = await clientPromise;
    const db = await client.db('collegeProject')

    let results=[]
    if (userId === "") {
        results = []
    } else {
        results = await db.collection('bookings').find({userId:new ObjectId(userId)}).toArray()
    }

    // console.log(results)
    res.json(results)
}
