import React, { useEffect, useState } from 'react'
import ProductCards from '../UI/ProductCards';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, SetCategories] = useState([
     "all",
    "beauty",
    "home-decoration",
    "fragrances",
    "kitchen-accessories",
    "groceries",
    "tops",
    "sunglasses",
    
  ]);
  const [selectedcategories, setSelectedCategories] = useState("");
  const [pagination, setPagination] = useState({
    total : 0,
    skip : 0,
    limit : 24,
  })
  useEffect(()=> {
    axios.get(`https://dummyjson.com/products${selectedcategories && "/category/" + selectedcategories}?limit=${pagination.limit}
      &skip=${pagination.skip}`).then((res) =>{
      setProducts(res.data.products)
      setPagination({
        total : res.data.total,
        skip : res.data.skip,
        limit : res.data.limit,
      })
    })
  }, [selectedcategories, pagination.skip, pagination.limit])

  
  return (
    <>
      <section className='bg-[#f1f0f0dd] md:py-14 py-4 '>
        <div className='md:px-10 container'>
          <div className='flex justify-between'>
             
             
             <ul className='md:flex  gap-10 font-normal md:text-base text-secondary md:mx-0 mx-auto text-center md:space-y-0 space-y-2 '>

              {
                categories.map((item) =>(
                  <li key={item} >
                   <button class onClick={() => setSelectedCategories(item == "all" ? "" : item)} className={`capitalize font-normal   text-lg cursor-pointer ${item == selectedcategories ? "text-badge" : "text-black"}`} >{item}</button>
                  </li>
                ))
              }

             </ul>

             <select onChange={
              (e) => setPagination((prev) => ({...prev, limit: e.target.value}) )
              }
              className='text-2xl px-2 py-1 bg-[#c9c9c9] rounded-md   '
              >
               <option value="20">24</option>
               <option value="40">40</option>
               <option value="60">60</option>
               <option value="80">80</option>
               <option value="100">100</option>
               <option value="120">120</option>
               <option value="120">150</option>
             </select>
          </div>
           
            
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-7 gap-y-[50px] mt-12 px-5 md:px-10'>
               
                
                   {
                    products.map((item) =>(
                      <ProductCards key={item.id} data={item}/>
                    ))
                   }
                                
            </div>
                  {/* pagination */}
            <div className="flex justify-center  items-center gap-2 mt-6">

  
               <button 
               
               onClick={() => setPagination((next) => ({...next, skip: pagination.skip - 1 }))

                }
               className="px-4 py-2 border mr-10 rounded-lg text-gray-600 hover:bg-gray-100 transition">
                    Prev
                </button>

  

  
                <button  onClick={() => setPagination((prev) => ({...prev, skip: pagination.skip + 1 }))

                }
                  className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100 transition">
                     Next
                </button>

            </div>

        </div>
    </section>
    </>
  )
}

export default Products





  
  
