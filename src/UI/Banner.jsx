import React from 'react'
import { Link } from "react-router"

const Banner = ({tittle, path}) => {
  return (
    <>
      <section className="bg-[url('/shopBanner.png')] py-28 w-full ">
        <div className="container text-center">
            <h2 className='text-4xl text-[#343434] font-medium '>{tittle}</h2>
            <div className='flex gap-3  text-secondary text-lg font-normal items-center justify-center mt-6'>
                <Link to="/">Home /</Link>
                <p><Link to="/shop">{path}</Link></p>
            </div>
        </div>

      </section>

    </>
  )
}

export default Banner
