import clientPromise from '../../lib/mongodb'

export default async function handler(req,res){
    const data=req.body
    const client= await clientPromise;
    const db = await client.db('collegeProject')
    const result= await db.collection("employees").find().toArray()
    console.log(result)
    res.json(result)
}

  