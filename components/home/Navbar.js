
export default function Navbar(){
    return(
        <nav className="border-b-[0.5px] border-neutral-400 h-12 flex items-center justify-between">
            <div className="ml-6">
                <h1 className="font-bold text-xl">HANDYMAN</h1>
            </div>
            <div className="flex">
                <button className="button1">LOGIN</button>
                <button className="button1">EMPLOYEE LOGIN</button>
            </div>
        </nav>
    )
}