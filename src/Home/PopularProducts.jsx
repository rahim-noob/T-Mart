import React, { useEffect, useState } from 'react'
import ProductCards from '../UI/ProductCards';
import axios from 'axios';
import Skeleton from '../UI/Skeleton';



const ProductText = () =>  {
  const [products, setProducts] = useState([]);
  const [Loading, SetLoading] = useState(true)
  const [categories, SetCategories] = useState([
    "all",
    "furniture",
    "home-decoration",
    "kitchen-accessories",
    "womens-dresses",
    "groceries",
    "womens-bags",
    "skin-care",
    
  ]);

  const [selectedcategories, setSelectedCategories] =useState("");
   
  useEffect(() => {
    axios.get(`https://dummyjson.com/products${selectedcategories && "/category/" + selectedcategories }?limit=12`).then((res) =>{
      setProducts(res.data.products);
      SetLoading(false);
    })
  }, [selectedcategories]);
  
  return (
    <section className='bg-background-color md:mt-10 md:pt-14 mt-6    '>
      <div className="container">
         <h2 className='text-xl md:text-3xl font-normal text-primary text-center'>Popular Products</h2>
         <p className='text-xs md:text-base font-normal text-center text-secondary max-w-[750px] m-auto pt-5 px-6 md:px-24 py-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod temp incididunt ut labore et
          dolore magna aliqua.</p>

          <div className='md:pt-5 md:px-10'>
            <ul className='md:flex  gap-10 font-normal md:text-base text-secondary md:mx-0 mx-auto text-center md:space-y-0 space-y-2 '>
               
               {
                      
                    categories.map((item) => (
                      <li key={item}>
                        <button onClick={()=> setSelectedCategories(item == "all" ? "" : item ) } className={`capitalize font-normal   text-lg cursor-pointer ${item == selectedcategories ? "text-badge" :"text-black"}`}>{item}</button>
                      </li>
                    )) 
                       
                      
                    }
            </ul>

            

            
          </div>

         {
          Loading ? (<Skeleton/>)
          : (
            <div className='grid grid-cols-2 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-x-7 gap-y-[50px] mt-12 px-5 md:px-10'>
              {
                products.map((item) => (
                  <ProductCards key={item.id} data={item} />
                ))
              }

            </div>
          )
         }
            
          
          
      </div>

      
    </section>
  )
}

export default ProductText
    