import React, { useEffect, useState } from 'react'
import Banner from '../UI/Banner'
import ImageGallery from "react-image-gallery"; 
import "react-image-gallery/styles/css/image-gallery.css";
import { FaRegStar } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";
import axios from 'axios';
import { useParams } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';


const ProductDeatails = () => {
  let [quantity, setQuantity] = useState(1)

  const [productData, setProductData] = useState({});
  const [images, setImages] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${params.id}`).then((res)=> {
      setProductData(res.data);
      const imgData = res.data.images.map((items) => {
        return {
          original: items,
          thumbnail:items,
        };
      } );
      setImages(imgData)
    })
  }, []);
  console.log(params);

  const handleAddToCart = () => {
    axios.post("https://dummyjson.com/carts/add", {
       userId: 1,
       products:[
        {
          id: params.id,
          quantity: quantity,
        },
       ],
    }).then((res) => {
      toast.success("Your Product is Added to cart")
      
    }).catch((err) => {
      console.log(err);
      
    })
   
  }

  console.log(productData);

  

  console.log(images);
  
  

  return (
    <>
    
    <Banner tittle="Product Details" path="Shop Page"/>
    <section className='py-30'>
      <div className='md:px-20 grid md:grid-cols-2 grid-cols-1 gap-10 px-3 '>
        <div>
          <ImageGallery items={images} thumbnailPosition={'left'} autoPlay={false}    showPlayButton={false}  />
        </div>

        {/* design contenten with product */}

        <div className=' space-y-2'>
          <h2 className='text-product font-medium text-3xl'>{productData.title}</h2>
          <div className='flex gap-4 items-center'>
            <div className='flex gap-2.5 text-amber-400'>
             <FaRegStar />
             <FaRegStar/>
             <FaRegStar/>
             <FaRegStar />
             <FaRegStar />
            </div>
            <h3>({productData.rating})</h3>
          </div>
          <p className='text-secondar text-sm  '>{productData.description
            }</p>
            <div className='space-x-2'>
              <span className='text-gray-500 text-lg line-through'>${productData.price}</span>
              <span className='text-2xl text-badge font-medium'>${productData.discountPercentage}</span>
              <span></span>
            </div>
            <p>{productData.availabilityStatus}</p>
            <p>{productData.stock}</p>
            <h3 className='text-[22px] font-medium text-secondary'>Size</h3>
            <div className='flex -mt-3 gap-4 text-lg'>
              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
            </div>
            <div className='flex gap-6 items-center '>
              <h3 className='text-xl font-medium text-secondary'>Quantity:</h3>
              <div className='text-2xl space-x-6'>
                
                <button onClick={()=>
                  {
                    if (quantity > 1){
                      setQuantity(quantity - 1)
                    }
                  }
                  }>-</button>

                <span>{quantity}</span>

                <button onClick={()=> setQuantity(++quantity)}>
                  
                  +</button>
              </div>
            </div>
            <div className='flex  flex-wrap  gap-6'>
              <button className='bg-navbar text-white text-sm font-medium px-8 py-3 rounded'>Buy Now</button>
              <button onClick={handleAddToCart} className='bg-gray-200 text-badge px-8 font-medium text-lg py-3 rounded cursor-pointer'>Add To Cart</button>
              <ToastContainer />
              
            </div>
        </div>
        
         
      </div>

      <div className='pt-12 flex justify-center gap-8 border-b-2 border-secondary mx-auto w-[90%] md:px-20 pb-5 '>
          <h2 className='text-2xl font-medium text-primary'>Description</h2>
           <h2 className='text-2xl font-medium text-primary'>Data Sheet</h2>
            <h2 className='text-2xl font-medium text-primary'>Reviews</h2>
          
        </div>
        <h3 className='text-xl font-medium text-secondary md:px-15 pt-10'>Details</h3>

        <p className='text-sm text-product font-medium max-w-[820px] md:px-15 pt-6 pb-15'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis noexercit
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.</p>
        
        <h3 className='text-xl font-medium text-secondary md:px-15 pt-10'>Features</h3>

        <div className='pt-10 space-y-4'>
          <div className='flex gap-5 text-base text-product md:px-15'>
            <FaDotCircle />
            <span>Duis aute irure dolor in reprehenderit in voluptate velit esse</span>
          </div>
          <div className='flex gap-5 text-base text-product md:px-15'>
             <FaDotCircle />
            <span>Irure dolor in reprehenderit in voluptate velit esse</span>
          </div>
          <div className='flex gap-5 text-base text-product md:px-15'>
            <FaDotCircle />
            <span>Sed do eiusmod tempor incididunt ut labore et</span>
          </div>
          <div className='flex gap-5 text-base text-product md:px-15'>
            <FaDotCircle />
          <span>Nisi ut aliquip ex ea commodo consequat.</span>
          </div>
        </div>
    </section>
    </>
    
     
  )
}

export default ProductDeatails
