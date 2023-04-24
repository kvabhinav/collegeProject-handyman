//@ts-nocheck

import { ObjectId } from 'mongodb'
import clientPromise from '../../lib/mongodb'

export default async function handler2(req, res) {
    const data = req.body.formData
    const id = req.body.id
    const user = req.body.user

    // const empId = console.log(Object.getOwnPropertyNames(id)[0])
    const client = await clientPromise;
    const db = await client.db('collegeProject')
    const result = await db.collection('bookings').insertOne({ ...data, empl_id: new ObjectId(id),userId:new ObjectId(user) })

    res.json(result)
}