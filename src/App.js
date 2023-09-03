import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Add from './addproduct'
import Header from './header'
import Product from './product'
import PromotionalCards from './promotion'
import { Uniquepro } from './uniqueproduct'
import { useEffect, useState } from 'react';
import Footer from './footer'
import { motion, useScroll } from "framer-motion"

const url = 'https://dummyjson.com'

function App() {
  const { scrollYProgress } = useScroll();

  const [loadling, setLoading] = useState(false)
  const [data, setData] = useState([])

  const [filterdata, setfilterdata] = useState([])
  const [searchlist, setSearchlist] = useState([])

  const setSearchdata = (title) => {

    const filteredData = data.products?.filter(item =>
      item.title.toLowerCase().includes(title.toLowerCase()))


    setfilterdata(filteredData)
  }


  const search = async (title) => {
    setLoading(true)
    try {


      let searchdata = await axios.get(`${url}/products/search?q=${title}`)


      setSearchlist(searchdata.data)
      setLoading(false)

    } catch (error) {
      setLoading(false)
    }
  }



  const getproduct = async () => {
    let prod = await axios.get(`${url}/products`)

    setData(prod.data)
  }


  useEffect(() => {
    getproduct()
    search()
  }, [])







  const add = async () => {
    const addp = await fetch(`${url}/product/add,{
    method: 'POST',
    headers: {'Content-Type': 'application/json'}
  }`)
  }


  return (
   
<motion.div        d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
 style={{ pathLength: scrollYProgress }} className=" md:px-[9vw] px-[6vw]"> 
<motion.div initial={{ y: -250 }}
    animate={{ y: 0 }}
    transition={{ delay:0.5 , type:'tween' , stiffness:5 }}
    >
      <Header setSearchdata={setSearchdata} searchproduct={search} loader={loadling} />
       </motion.div>
            {/* <motion.div initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay:1.5 , duration:1.8 }}
    >  */}

      <Product productslist={filterdata !== undefined && filterdata.length ? filterdata : data} />
      
    {/* </motion.div> */}

      <PromotionalCards />
      <Uniquepro />
      <Footer />
      {/* <Add/> */}
    </motion.div>
  );
}





export default App;
