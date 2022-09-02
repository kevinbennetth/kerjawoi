const Button = ({children, color, to, className})=>{
    return(
        <a href={to?to:"#"} className={`py-2 px-3 md:py-3 md:px-6 bg-${color} text-white text-xs md:text-lg text-center font-bold rounded-md hover:drop-shadow-lg ${className}`}>
            {children}
        </a>
    )
}

export default Button;