

import DashHeader from "../Dashboard/DashHeader"
import DashSider from "../Dashboard/DashSider"
import { Outlet } from "react-router-dom"

const DashLayout = () => {
  return (
    <div>
       <div className="flex">
        <DashSider/> 
       <div className="flex  flex-col">
        <DashHeader/> 
        <Outlet/>
       </div>
       </div>
    </div>
  )
}

export default DashLayout