//@ts-nocheck

import { ObjectId } from 'mongodb'
import clientPromise from '../../lib/mongodb'

export default async function handler2(req,res){
    const array=req.body.array
    const array2=req.body.array2
    const itemId=req.body.itemId
    console.log(itemId)
    const client= await clientPromise;
    const db = await client.db('collegeProject')
    const result= await db.collection('employees').updateOne({_id:new ObjectId(`${itemId}`)},{$set:{jobs:[...array],locations:[...array2]}},{upsert:true})
    res.json(result)
}
