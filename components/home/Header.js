
export default function Header() {
    return (
        <header className="pb-12 pt-20 border-b-[1px] border-neutral-400">
            <div className="mx-auto w-fit ">
                <form action="">
                    <input type="text" placeholder="Search by job title or name" name="" className="search-bar" />
                    <input type="text" placeholder="Search by location" name="location" className="search-bar mx-2" />
                    <button className="button2">Search</button>
                </form>
            </div>
            <div className="w-96 mx-auto mt-4 pt-12">
                <h1 className="text-6xl font-bold text-center leading-relaxed">BOOK YOUR SERVICES IN NO TIME</h1>
            </div>
            <div className="flex justify-end items-center">
                <button className="button1">BOOKINGS</button>
            </div>
        </header>
    )
}
