import Link from 'next/link'
import { withRouter } from 'next/router'

 function Successfull({ router }) {
    return (
        <div className="px-40 py-16 text-gray-800">
            <div className="mx-auto pt-2 py-24 my-14 pb-6 border-4 border-gray-800 rounded-3xl shadow-xl hover:shadow-2xl ">

                <div className="flex justify-center">
                    <script src="https://cdn.lordicon.com/ritcuqlt.js"></script><lord-icon
                        style={{ width: "250px", height: "250px" }}
                        src="https://cdn.lordicon.com/lupuorrc.json"
                        trigger="hover"></lord-icon>
                </div>

                <div className="flex justify-center  mb-6 uppercase font-extrabold text-4xl text-green-600">
                    <span >booking successful</span>
                </div>

                <div className="flex justify-center text-lg font-semibold tracking-widest">
                    <span>Our employee will reach you as soon as possible </span>
                </div>

                <div className="flex justify-center text-lg font-semibold tracking-wide mt-7">
                    <span>Thanks to using our service</span>
                </div>

                <div className=" container flex justify-center text-xs font-medium tracking-wide mt-8   ">
                    <Link href={{
                        pathname:'/',
                        query:router.query
                    }} className="hover:text-[rgb(37,87,167)] flex justify-end ">
                        Click here to go back to the main page<svg className="w-4 ml-1  " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
                        </svg>
                    </Link>
                </div>


            </div>
        </div>
    )
}

export default withRouter(Successfull)