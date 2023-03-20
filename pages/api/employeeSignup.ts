//@ts-nocheck

import { ObjectId } from 'mongodb'
import clientPromise from '../../lib/mongodb'

export default async function handler2(req,res){
    const user=req.body.user
    const emp_id=req.body.emp_id

    const itemId=`${Object.getOwnPropertyNames(emp_id)[0]}`
    console.log(user)
    console.log(itemId)

    const client= await clientPromise;
    const db = await client.db('collegeProject')
    const result= await db.collection('employees').updateOne({_id:new ObjectId(`${itemId}`),email:user.email,phone:user.phone},{$set:{password:user.password}},{upsert:false})
    console.log(result)
    res.json(result)
}
