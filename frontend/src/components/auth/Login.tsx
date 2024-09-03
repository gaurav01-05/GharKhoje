import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

function Login() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="box backdrop-blur-sm bg-white p-2 py-[40px]  rounded-lg shadow-lg border  w-[40%]">
            <h1 className="text-center text-gray-700 text-2xl font-bold fosansnt-serif mb-4">Login</h1>

            <form className="w-full px-[10%] flex justify-center flex-col gap-3 items-center">

                <Input  className="w-full text-white" type="email" placeholder="Enter your email"/>

                <Input className="w-full text-white" type="password" placeholder="Enter your password"/>
                <Link className="self-start text-xs text-blue-500" to="#">Forgot Password?</Link>
            
                <Button className="" variant={'submit'}>Login</Button>


                <Link className=" text-xs text-blue-500" to="/register">Dont have account,Register here?</Link>



            </form>
      </div>
    </div>
  )
}

export default Login
