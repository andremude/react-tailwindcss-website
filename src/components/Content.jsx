import React from 'react'
import ImageOne from '../images/avocado-toast.jpg'
import ImageTwo from '../images/tomato-soup.jpg'

const Content = () => {
  return (

  <div>
    <h1 className="text-3xl text-center uppercase font-black mt-10 underline">Most Popular</h1>

    <div className="home-cards-container flex justify-around">

        <div className='menu-card'>
          <img src={ImageOne} alt="" className="h-full rounded mb-10 shadow object-cover" />
          <div className="card-text center-content">
            <h2 className='text-2xl mb-2'>Avocado Toast</h2>
            <p className="mb-2">Fresh and nutritious.
            </p>
            <span>
              $12
            </span>
            <button className='add-to-cart-btn'>Add to Cart</button>
          </div>
        </div>

        <div className='menu-card'>
          <img src={ImageTwo} alt="" className="h-full rounded mb-10 shadow object-cover" />
          <div className="card-text center-content">
            <h2 className='text-2xl mb-2'>Tomato Soup</h2>
            <p className="mb-2">Smooth and creamy.
            </p>
            <span>
              $16
            </span>
            <button className='add-to-cart-btn'>Add to Cart</button>
          </div>
        </div>
    </div>

  </div>

  )
}

export default Content
