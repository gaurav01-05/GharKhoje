import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

function Register() {
  return (
    <div className="h-full w-full flex justify-center items-center">
    <div className="box bg-white p-2 py-[40px]  rounded-lg shadow-lg border  w-[40%]">
          <h1 className="text-center text-gray-700 text-2xl font-bold fosansnt-serif mb-4">Register</h1>

          <form className="w-full flex justify-center flex-col gap-5 items-center">

              <Input className="w-[80%] text-white" type="email" placeholder="Enter your email"/>
              <Input className="w-[80%] text-white" type="text" placeholder="Enter your username"/>

              <Input className="w-[80%] text-white" type="password" placeholder="Enter your password"/>
              <Input className="w-[80%] text-white" type="c_password" placeholder="Enter your confirm-password"/>
          
              <Button className="" variant={'submit'}>Register</Button>
              <Link className=" text-xs text-blue-500" to="/login">Already have account, Login here?</Link>



          </form>
    </div>
  </div>
)
  
}

export default Register
