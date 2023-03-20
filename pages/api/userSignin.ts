//@ts-nocheck

import clientPromise from '../../lib/mongodb'

export default async function handler(req,res){
    const data=req.body
    const client= await clientPromise;
    const db = await client.db('collegeProject')
    const result= await db.collection('users').findOne({email:data.email , phone:data.phone ,password:data.password})
    if(result==null) {
        res.json("no match found")
    }else{
        res.json(result)
    }
    
    console.log(result)
}