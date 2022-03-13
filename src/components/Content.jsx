import React from 'react'
import ImageOne from '../images/mediterranean-salad.jpg'
import ImageTwo from '../images/tomato-soup.jpg'
import ImageThree from '../images/tomato-eggplant-pizza.jpg'

const Content = () => {
  return (

  <div>
    <h1 className="text-3xl text-center uppercase font-black mt-10 underline">Most Popular</h1>

    <div className='menu-cards-container grid md:grid-cols-3 sm:grid-cols-1 mb-10 items-center'>

      <div className='menu-card'>
            <img src={ImageOne} alt="" className="h-full rounded mb-10 shadow object-cover" />
            <div className="card-text center-content">
              <h2 className='text-2xl mb-2'>Mediterranean Salad</h2>
              <p className="mb-2">Exotic and delicious.
              </p>
              <span>
                $16
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

      <div className='menu-card'>
        <img src={ImageThree} alt="" className="h-full rounded mb-10 shadow object-cover" />
        <div className="card-text center-content">
          <h2 className='text-2xl mb-2'>Eggplant Pizza</h2>
          <p className="mb-2">Crispy and delicious.
          </p>
          <span>
            $14
          </span>
          <button className='add-to-cart-btn'>Add to Cart</button>
        </div>
      </div>

    </div>



  </div>

  )
}

export default Content
