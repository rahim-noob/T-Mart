import React from 'react'


const Banner = () => {
  return (
    <>
      <section className="bg-[url('/Background.png')] md:h-110 h-50 bg-no-repeat w-full bg-cover bg-center  relative">

        <div  className='absolute md:top-[40%] md:right-[25%] top-[20%] right-[10%]  text-center'>
            <h1 className='text-[#474747] font-medium md:text-2xl text-lg'>Awesome Product Collection <br />
            <span className='text-[#2685f1] md:text-[28px] '>In 2025</span> </h1>

            <p className='pt-2 text-black md:text-lg'>Shop now</p>
            
        </div>
      </section>
    </>
  )
}

export default Banner
 
 