import logo from './logo.svg';

import { motion } from "framer-motion"


import React, { useEffect, useState } from "react";
// import Logo from '../../../public/Logo.png'
// import nav from "next/nav";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";
import { RiMenu3Fill } from "react-icons/ri";

import { FiShoppingCart } from "react-icons/fi";
// import { useStateContext } from '../contextapi/useContext'

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}

function Header({ searchproduct, loader, setSearchdata }) {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }
  const [onFocus, setOnFocus] = useState(false)
  const [nav, setNave] = useState(false)
  const [inputBox, setInputBox] = useState("");
  const handlenav = () => {
    setNave(!nav)
  }
  let datasearch = (title) => {
    searchproduct(title)
    setInputBox("")

  }



  useEffect(() => {
    setSearchdata(inputBox);
  }, [inputBox, setSearchdata]);

  // const { totalQuantities } = useStateContext() 
  return (
    <div className=" container   bg-white">
      <div className="  flex flex-wrap justify-between  mx-auto my-10 ">
        <div>
          <nav href="/">
            <img src='https://hackathon-sigma-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.962f4500.png&w=256&q=75' alt="Logo" />
          </nav>
        </div>
        <div className="lg:flex  hidden">
          <nav href="/female" className="mx-5 text-lg font-medium">
            Female
          </nav>
          <nav href="/male" className="mx-5 text-lg font-medium">
            Male
          </nav>
          <nav href="/kids" className="mx-5 text-lg font-medium">
            Kids
          </nav>
          <nav href="/product" className="mx-5 text-lg font-medium">
            All Products
          </nav>
        </div>








        <div className=" lg:flex hidden flex-row border-2    rounded-md h-7">
          <AiOutlineSearch size={20} className="mt-[2px] mx-2 " />
          <input value={inputBox} onChange={(e) => {
            setInputBox(e.target.value);
            setInputBox(e.target.value)
          }}
            placeholder="What are you loooking for " className=" w-[18vw] px-2 text-xs hover:border-black mr-4" />
        </div>
        <button onClick={() => datasearch(inputBox)}>Search</button>
        <div>

        </div>


















        <nav href="/cart/">
          <div className=" lg:flex hidden flex-row rounded-full bg-[#f1f1f1] w-12 h-12">
            <div className="flex justify-center items-center mx-3">
              <FiShoppingCart size={25} />
            </div>
            <div className="bg-red-500 rounded-full absolute w-6 right-[7rem] text-center top-9 h-6 ">
              <h1 className="text-white">
                {/* {totalQuantities} */}
              </h1></div>
          </div>
        </nav>
 
        {!nav ? <motion.div
      animate={nav ? "open" : "closed"}
      variants={variants} className="  lg:hidden inline-flex text-2xl font-bold">

        

          <RiMenu3Fill className="text-2xl h1 w-10 font-bold " onClick={handlenav} />
                
          </motion.div> : <div className="lg:hidden inline-flex text-2xl font-bold">
          <RxCross2 className="text-2xl h1 w-10 font-bold " onClick={handlenav} />
        </div>
        } 

      </div>











      <div className={nav ? " mt-5  md:hidden left-0  w-full h-full border-r border-r-gray-200 bg-white flex   flex-col  " : "hidden"} >

        <nav href="/cart/" onClick={handlenav}>
          <div className="   flex-row rounded-full bg-[#f1f1f1]   mx-auto w-12 h-12   items-center">
            <div className="flex justify-center items-center mx-   mx-auto">
              <FiShoppingCart className="my-3 mx-auto" size={25} />
            </div>
            <div className="bg-red-500 rounded-full mx-auto text-center absolute   ml-[2rem] mt-[-3rem] h-6 px-2">
              <h1 className="text-center text-white">
                {/* {totalQuantities} */}
              </h1></div>
          </div>
        </nav>

        <nav href="/female" onClick={handlenav} className="mx-5 text-lg font-medium mt-3 text-center">
          Female
        </nav>
        <nav href="/male" onClick={handlenav} className="mx-5 text-lg font-medium mt-3 text-center">
          Male
        </nav>
        <nav href="/kids" onClick={handlenav} className="mx-5 text-lg font-medium mt-3 text-center">
          Kids
        </nav>
        <nav href="/product" onClick={handlenav} className="mx-5 text-lg font-medium mt-3 mb-12 text-center">
          All Products
        </nav>
      </div>
    </div>


  );
}

export default Header;
