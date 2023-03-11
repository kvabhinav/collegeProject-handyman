//@ts-nocheck

import clientPromise from '../../lib/mongodb'

export default async function handler(req,res){
    const data=req.body
    const client= await clientPromise;
    const db = await client.db('collegeProject')
    const result= await db.collection('employees').insertOne({...data})
    res.json(result)
    // let datas=JSON.parse(JSON.stringify(result))
    // console.log(datas)
}

  