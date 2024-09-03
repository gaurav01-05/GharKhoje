import { Outlet } from "react-router-dom"
import Header from "./components/home/Header"
import Background from "./assets/background.jpeg";

function Home() {
  return (
    <div className="root text-white flex flex-col h-[100vh]">
      <Header/>
    
    <div className="content h-full grow overflow-y-auto" style={{backgroundImage:`url(${Background})`}}>
        <Outlet  />
    </div>
    </div>
  )
}

export default Home
