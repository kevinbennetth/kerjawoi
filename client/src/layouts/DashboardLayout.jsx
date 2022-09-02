
const DashboardLayout = ({children})=>{
    return (
        <div className="lg:grid lg:grid-cols-6 w-100 min-h-screen h-auto">
            <nav className="flex lg:col-span-1 bg-dark-purple text-white lg:flex-col justify-between">
                <p>KerjaWOI</p>
            </nav>
            <div className="lg:col-span-5 p-10 bg-[#F9F9F9]">{children}</div>
        </div>
    )
}

export default DashboardLayout;