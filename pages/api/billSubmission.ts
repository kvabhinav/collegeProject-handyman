//@ts-nocheck

import clientPromise from '../../lib/mongodb'
import { ObjectId } from 'mongodb'

export default async function handler(req, res) {
    const data = req.body.data
    const itemId=req.body._id
    const client = await clientPromise;
    const db = await client.db('collegeProject')
    const result = await db.collection('bill').insertOne({ ...data })
    const result1= await db.collection('bookings').updateOne({_id:new ObjectId(`${itemId}`)},{$set:{status:"pay"}},{upsert:false})
    res.json(result)
    res.json(result1)
}