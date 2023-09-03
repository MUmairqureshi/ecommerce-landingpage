import axios from "axios";
import { useState } from "react"


const url = 'https://dummyjson.com'
export default function Add() {
    const [addprod, setAddprod] = useState({
        id: "",
        title: "",
        description: "",
        price: "",
        category: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (addprod.id) {
            const upd = await axios.put(`${url}/products/${addprod.id}`, addprod)
            console.log('Product added Update:', upd.data);
        }
        else {
            const addp = await axios.post(`${url}/products/add`, addprod)
            console.log('Product added successfully:', addp.data);
        }
        setAddprod({
            id: "",
            title: '',
            description: '',
            price: '',
            category: ""
        });
    }





    const handledalate = async (productid) => {
        // e.preventDefault();

        const del = await axios.delete(`${url}/products/${productid}`)
        console.log('Product delete :', del.data);

        // setAddprod({
        //     id: "",
        //     title: '',
        //     description: '',
        //     price: '',
        //     category: ""
        // });
    }

    const handlechange = (e) => {
        const { name, value } = e.target;
        setAddprod({ ...addprod, [name]: value });
    };



    console.log(addprod)
    // const add = async()=>{
    //     const addp = await fetch(`${url}/product/add,{
    //       method: 'POST',
    //       headers: {'Content-Type': 'application/json'}
    //     }`)
    //   }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>

                    <input placeholder="id" value={addprod.id} id="id"
                        name="id" type="number" onChange={handlechange} />
                    <input placeholder="Title" value={addprod.title} id="title"
                        name="title" type="text" onChange={handlechange} />
                    <input placeholder="description" value={addprod.description} id="description"
                        name="description" type="text" onChange={handlechange} />
                    <input placeholder="price" id="price"
                        name="price" type="number" onChange={handlechange} value={addprod.price} />
                    <input placeholder="category" id="category" value={addprod.category}
                        name="category" type="text" onChange={handlechange} />
                    <br />
                    <button className="bg-blue-400 text-white p-2 rounded-sm border" type="submit">AddProduct</button>
                    <button className="bg-blue-400 text-white p-2 rounded-sm border" onClick={() => handledalate(addprod.id)}>delete</button>
                    
                </div>
            </form>

        </div>
    )
}