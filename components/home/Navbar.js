import Link from 'next/link'

export default function Navbar(){
    return(
        <nav className="border-b-[0.5px] border-neutral-400 h-12 flex items-center justify-between">
            <div className="ml-6">
                <Link href='/' ><h1 className="font-bold text-xl">HANDYMAN</h1></Link>
            </div>
            <div className="flex">
                <Link href=''><button className="button1">LOGIN</button></Link>
                <Link href='' ><button className="button1">EMPLOYEE LOGIN</button></Link>
            </div>
        </nav>
    )
}