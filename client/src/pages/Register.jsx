
import Button from "../components/Button";

const Register = () => { 
    return (
        <div className="login flex justify-center items-center 
        h-full bg-dark-purple ">
            <div className="login-form flex flex-col items-center justify-center rounded-md 
            w-[35%] min-w-[400px] h-3/4 bg-white px-8 text-dark-purple">
                <h4 className="font-bold text-2xl mb-12">KerjaWOI</h4>
                
                <div className="username-container w-full mb-4">
                    <p className="font-semibold mb-1">Username</p>
                    <input type="text" placeholder="Enter Username"
                    className="rounded-md border-2 border-solid border-gray-200 outline-none
                    bg-dark-white placeholder:text-dark-purple placeholder:opacity-50
                    py-2 px-4 w-full
                    hover:border-dark-purple focus:ring "/>
                </div>

                <div className="email-container w-full mb-4">
                    <p className="font-semibold mb-1">Email</p>
                    <input type="text" placeholder="Enter Email"
                    className="rounded-md border-2 border-solid border-gray-200 outline-none
                    bg-dark-white placeholder:text-dark-purple placeholder:opacity-50
                    py-2 px-4 w-full
                    hover:border-dark-purple focus:ring "/>
                </div>

                <div className="password-container w-full mb-8">
                    <p className="font-semibold mb-1">Password</p>
                    <input type="password" placeholder="Enter Password"
                    className="rounded-md border-2 border-solid border-gray-200 outline-none
                    bg-dark-white placeholder:text-dark-purple placeholder:opacity-50
                    py-2 px-4 w-full
                    hover:border-dark-purple focus:ring"/>
                </div>

                <Button 
                text="Register"
                className="rounded-md drop-shadow-[4px_4px_0px_rgba(0,0,0,0.5)] 
                font-bold bg-Orange text-white text-lg
                py-2 px-8 w-full mb-4
                hover:bg-[#D89340] active:drop-shadow-none active:translate-x-1 active:translate-y-1"/>

                <div className="signup flex w-full justify-start">
                    <p>Already have an account? <button className="font-medium hover:text-dark-blue hover:underline">Login here!</button></p>
                </div>
                
            </div>
        </div>
    )
}

export default Register;