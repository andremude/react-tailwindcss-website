import React from 'react'
import Basket from '../components/Basket'
import ImageOne from '../images/avocado-toast.jpg'
import ImageTwo from '../images/tomato-soup.jpg'
import ImageThree from '../images/acai-bowl.jpg'
import ImageFour from '../images/tomato-eggplant-pizza.jpg'
import ImageFive from '../images/chicken-burger.jpg'
import ImageSix from '../images/Palabok.jpg'
import ImageSeven from '../images/chicken-wrap.jpg'
import ImageEight from '../images/mediterranean-salad.jpg'
import ImageNine from '../images/salmon-toast.jpg'
import ImageTen from '../images/salmon-bowl.jpg'
import ImageEleven from '../images/buddha-bowl.jpg'
import ImageTwelve from '../images/avocado-and-egg-toast.jpg'

const menu = () => {
  return (

  <div>
    <div className="h-screen flex justify-center items-center bg-lime-300">
      <h1 className="text-9xl uppercase font-black">Menu</h1>
    </div>

    {/* <div className='menu-cards-container flex justify-around flex-wrap'> */}
    <div className='menu-cards-container grid md:grid-cols-3 gap-3 sm:grid-cols-1 mb-10'>
      <div className='menu-card'>
        <img src={ImageOne} alt="" className="h-full rounded mb-2 shadow object-cover" />
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
            <img src={ImageTwo} alt="" className="h-full rounded mb-2 shadow object-cover" />
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
        <img src={ImageThree} alt="" className="h-full rounded mb-2 shadow object-cover" />
        <div className="card-text center-content">
          <h2 className='text-2xl mb-2'>Acai Bowl</h2>
            <p className="mb-2">Delicious fruity meal.
          </p>
          <span>
            $12
          </span>
          <button className='add-to-cart-btn'>Add to Cart</button>
        </div>
      </div>

      <div className='menu-card'>
        <img src={ImageFour} alt="" className="h-full rounded mb-2 shadow object-cover" />
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

      <div className='menu-card'>
            <img src={ImageFive} alt="" className="h-full rounded mb-2 shadow object-cover" />
            <div className="card-text center-content">
              <h2 className='text-2xl mb-2'>Chicken Burger</h2>
              <p className="mb-2">The tastiest chicken burger.
              </p>
              <span>
                $16
              </span>
              <button className='add-to-cart-btn'>Add to Cart</button>
            </div>
      </div>

      <div className='menu-card'>
            <img src={ImageSix} alt="" className="h-full rounded mb-2 shadow object-cover" />
            <div className="card-text center-content">
              <h2 className='text-2xl mb-2'>Palabok</h2>
              <p className="mb-2">Traditional taste.
              </p>
              <span>
                $12
              </span>
              <button className='add-to-cart-btn'>Add to Cart</button>
            </div>
      </div>

      <div className='menu-card'>
            <img src={ImageSeven} alt="" className="h-full rounded mb-2 shadow object-cover" />
            <div className="card-text center-content">
              <h2 className='text-2xl mb-2'>Chicken Wrap</h2>
              <p className="mb-2">Crispy chicken.
              </p>
              <span>
                $16
              </span>
              <button className='add-to-cart-btn'>Add to Cart</button>
            </div>
      </div>

      <div className='menu-card'>
            <img src={ImageEight} alt="" className="h-full rounded mb-2 shadow object-cover" />
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
            <img src={ImageNine} alt="" className="h-full rounded mb-2 shadow object-cover" />
            <div className="card-text center-content">
              <h2 className='text-2xl mb-2'>Salmon Toast</h2>
              <p className="mb-2">Finest ingredients.
              </p>
              <span>
                $16
              </span>
              <button className='add-to-cart-btn'>Add to Cart</button>
            </div>
      </div>

      <div className='menu-card'>
            <img src={ImageTen} alt="" className="h-full rounded mb-2 shadow object-cover" />
            <div className="card-text center-content">
              <h2 className='text-2xl mb-2'>Salmon Bowl</h2>
              <p className="mb-2">Delicious grilled salmon.
              </p>
              <span>
                $16
              </span>
              <button className='add-to-cart-btn'>Add to Cart</button>
            </div>
      </div>

      <div className='menu-card'>
            <img src={ImageEleven} alt="" className="h-full rounded mb-2 shadow object-cover" />
            <div className="card-text center-content">
              <h2 className='text-2xl mb-2'>Buddha Bowl</h2>
              <p className="mb-2">Mixture in a bowl.
              </p>
              <span>
                $16
              </span>
              <button className='add-to-cart-btn'>Add to Cart</button>
            </div>
      </div>

      <div className='menu-card'>
            <img src={ImageTwelve} alt="" className="h-full rounded mb-2 shadow object-cover" />
            <div className="card-text center-content">
              <h2 className='text-2xl mb-2'>Avocado and Egg Toast</h2>
              <p className="mb-2">Delicious ingredients.
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

export default menu
