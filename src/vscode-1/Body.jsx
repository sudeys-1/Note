import { useState } from "react"
import Form from "./Form"


function Body (){
    const [isOpen, SetOpen ] =useState (false)
    const OpenBtn= ()=> {
        SetOpen(true)
    }
    const CloseBtn= ()=> {
        SetOpen(false)
    }
    return <div>

    <div className="  p-[20px] bg-[#780FEF] justify-between flex ">
        <h1 className="text-[40px] font-bold text-[#EAE40B]  ">Nooty</h1>
        <button onClick={OpenBtn}  className=" text-[20px] text-[#780FEF] sm:p-[15px]  sm:m-[0px] w-[100px] sm:w-[140px]   mt-[10px] rounded-[10px] bg-[#EAE40B]  " >Add note</button>
    </div>
    {
        isOpen == true ? <Form Close={CloseBtn} /> :""
    }

    </div>
}


export default Body
