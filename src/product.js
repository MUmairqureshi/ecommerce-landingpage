import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { motion, useScroll } from "framer-motion"
import { RevealWrapper } from  'next-reveal'  
export default function Product(Product){

    return(
        <div className="w-full mx-auto flex flex-row justify-between mt-20">
        <div className="flex mx-auto  flex-col mt-2">
          <div className="flex bg-[#e1edff] text-blue-700 h-[40px] w-[120px] rounded-lg justify-center items-center">
            <h1 className="headline">Sale 70%</h1>
          </div>
          
          


          <div className="flex mt-10 lg:w-[28vw] w-full mx-auto  ">
          {/* <motion.div  initial={{ x: -100 }}

  animate={{ x:0 }}
  transition={{ delay: 1  ,type:'tween' , stiffness: 5 }} > */}
          {/* <RevealWrapper  origin="left" delay={200} duration={1000} distance='500px' reset={true}> */}
            <h1 className="    md:text-6xl text-6xl w-[88vw] text-[#212121]  leading-[50px] font-bold">
              An Industrial Take on Streetwear
            </h1>
            {/* </motion.div> */}
            {/* </RevealWrapper> */}
          </div> 
          
          <div className="mt-6   lg:w-64 w-[64vw]">
            <p className="text-lg lg:w-[32vw] xl:w-[22vw] md:w-[62vw]">
              Anyone can beat you but no one can beat your outfit as long as you
              wear Dine outfits.
            </p>
          </div>
  
          <motion.div  whileHover={{ scale: 1.1 , boxShadow: "0px ,0px , 0px , rgb(255 ,255,255)  " }}>  
         <div className=" px-4   border xl:w-[12vw] lg:w-[18vw] py-2 md:w-[24vw] w-[62vw] xl:gap-x-2 lg:gap-x-2 md:gap-x-2  gap-x-4 justify-center    content-center mt-6 bg-black   ">
  
    <a href="/product" className="flex        gap-x-4    items-center  text-white     text-center justify-center  ">
            <FiShoppingCart size={40} className="  justify-center mt-4 content-center   items-center text-right" />
            <h1 className=" text-lg   text-center mt-2   ">Start Shopping</h1>
            </a>
              </div>  
              </motion.div>        {/* <div className="flex flex-row mt-5">
            <div className="mx-2">
              <Image src={bazaar} alt="logo" />
            </div>
            <div className="mx-2">
              <Image src={bustle} alt="logo" />
            </div>
            <div className="mx-2">
              <Image src={versace} alt="logo" />
            </div>
            <div className="mx-2">
              <Image src={instyle} alt="logo" />
            </div> 
          </div> */}
        </div>
        <div className="flex flex-row mx-20">
          <div className="z-10  absolute lg:flex  hidden">
            <img src="https://hackathon-sigma-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.a5793859.png&w=640&q=75" alt="hero" className="z-20" />
          </div>
          <div className="bg-[#FFECE3] lg:flex hidden lg:w-[36rem]  lg:h-[34rem] rounded-full relative mt-10"></div>
        </div>
      </div>
    )
}