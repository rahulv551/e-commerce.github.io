import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/hero'
import FeaturedProducts from '../components/featuredProducts'
import NewArrival from '../components/newArrival'
import img1 from '../assets/images/banner/b17.jpg'
import img2 from '../assets/images/banner/b10.jpg'

const home = () => {
  return (
    <>
    <section className='banner mb-3'>
      <div className="container-xxl">
       <div className="row">
        <div className="banner-details p-2 d-flex flex-column align-items-start justify-content-center">
          <span className="shadow-md p-3 mt-3 text-white">Trade in offer</span>
          <h1>Super Value Deals</h1>
          <h2>On all products</h2>
          <p className='p-3 m-1 ss'>Save more with </p>
          <Link className="button-link mb-3">Shop now</Link>
        </div>
       </div>
      </div>
    </section>

    <Hero/>

    <section className="featured-products p-5">
      <div className="container-xxl">
        <div className="row">
          <div className="text-center">
            <h1>Our Featured Products</h1>
            <p>All Weather Modern Designs</p>
          </div>

          <FeaturedProducts/>

        </div>
      </div>
    </section>

<section className='repair'>
  <div className="container-xxl">
    <div className="row">
      <div className="repair-details text-center d-flex flex-column align-item-center p-3">
        <span className="text-white mt-2">Repair Services</span>
        <h2 className="text-white">On <span className='text-success'><b>70%</b></span> off on All Products and Accessories</h2>
        <div className="mt-3">
          <button className='button-repair'>Explore Now</button>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="new-products p-5">
      <div className="container-xxl">
        <div className="row">
          <div className="text-center">
            <h1>New Arrivals</h1>
            <p>Your Best Designer Outfits</p>
          </div>

          <NewArrival/>

        </div>
      </div>
    </section>

<div className="deals p-5">
  <div className="container-xxl">
    <div className="row">
      <div className="col-6 p-4">
      <div className="card row">
        <div className="d-flex">
        <div className="col-md-4">
         <img src={img1} alt="" className='img-fluid rounded-start p-2 h-100'/>
        </div>
        <div className="col-md-8">
        <div className="card-body">
            <span>Hot Deals</span>
            <h3 className="card-title">
              Buy One get one free.
            </h3>
            <p>The latest best collection in our closet
              Feel Cute with our outfits</p>
              <button className="button-deals mt-3">
                Learn More
              </button>
          </div>
        </div>
        </div>
      </div>
      </div>


      <div className="col-6 p-4">
      <div className="card row">
        <div className="d-flex">
        <div className="col-md-4">
         <img src={img2} alt="" className='img-fluid yy rounded-start p-2 h-100'/>
        </div>
        <div className="col-md-8">
        <div className="card-body">
            <span>Hot Deals</span>
            <h3 className="card-title">
              Buy One get one free.
            </h3>
            <p>The latest best collection in our closet
              Feel Cute with our outfits</p>
              <button className="button-deals mt-3">
                Learn More
              </button>
          </div>
        </div>
        </div>
      </div>
      </div>

    </div>
  </div>
</div>

    </>
  )
}

export default home
