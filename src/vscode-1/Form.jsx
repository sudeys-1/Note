


function Form ({Close}){


    return <div className="bg-black  bg-opacity-75 h-screen absolute top-0 w-full ">
        

    <div className="flex justify-center pt-[100px] ">
        <form className="bg-[#780FEF] h-[500px]  pt-[40px] sm:w-[500px] w-[350px]     ">
        <i onClick={Close}  className="fa-solid fa-x  text-[25px] text-white absolute  right-[70px] top-28 sm:right-[480px]   "></i>
        <br />
        <input className="ml-[40px] h-[40px] border-2 border-black w-[280px]  sm:w-[410px] text-center rounded-[5px] "  type="text"  placeholder="Enter Titel"/>
        <br />
        <textarea className="ml-[40px] rounded-[10px] sm:w-[410px] p-[20px] w-[280px] border-2 border-black   border-solid mt-[20px] "  rows={8} cols={46}></textarea>
        <br />
        <button  className=" ml-[40px] mt-[20px]  text-[20px] w-[280px]  sm:w-[410px] flex justify-center p-[15px] border-[#011815] border-2  bg-[#EAE40B] text-[#780FEF]  rounded-[5px]  "> Save</button>




        </form>
    </div>
    

    </div>
}

export default Form