//@ts-nocheck

import { ObjectId } from 'mongodb'
import clientPromise from '../../lib/mongodb'

export default async function handler2(req,res){
    const emp_id=req.body.emp_id
    const status=req.body.status
    const client= await clientPromise;
    const db = await client.db('collegeProject')
    const result= await db.collection('employees').updateOne({_id:new ObjectId(`${emp_id}`)},{$set:{status:status}},{upsert:true})
    res.json(result)
    console.log(result)
}