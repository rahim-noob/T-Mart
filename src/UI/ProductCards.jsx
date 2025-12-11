
import { Link } from "react-router";


const ProductCards = ({data}) => {
  return (
    <>
      <div className="text-center w-fit bg-white md:p-5 p-5 rounded-md transition duration-300 transform hover:-translate-y-2 hover:shadow-sm ">
     
       
        <Link to={`/shop/${data.id}`}> <img className="w-full" src={data?.thumbnail} alt={data?.title} /></Link>
        <Link to={`/shop/${data.id}`}><h2 className='text-product text-lg font-normal pt-7 inline-block'>{data?.title}</h2></Link>
       
            <p className='text-dolor text-base font-normal pt-2'>${data?.price}</p>
         <Link to={`/shop/${data.id}`}>
          <p className="text-[#301818]">View Details</p>
         </Link>   
           
        
      
      
    </div>
    </>
  )
}

export default ProductCards
