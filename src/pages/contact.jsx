import React from 'react'
import { useState } from 'react'

const contact = () => {
  return (

    <div className="">
      <div className="h-screen flex justify-center items-center bg-red-300">
        <h1 className="text-9xl uppercase font-black">contact</h1>
      </div>
      <div className="h-96">
        <form className="form flex flex-col m-3">
          <div className="name flex flex-col m-3">
            <label for="firstName">First name</label>
            <input
              type="text"
              name="firstName"
              className="firstName border-2"
              tabIndex="1"
            />
            <label for="lastName">Last name</label>
            <input
              type="text"
              name="lastName"
              className="lastName border-2"
              tabIndex="2"
            />
          </div>
          <div className="email flex flex-col m-3">
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="email border-2 "
              placeholder="example@corp.com"
              tabIndex="3"
            />
          </div>
          <div className="message flex flex-col m-3">
            <label for="message">Message</label>
            <textarea
              placeholder="Start typing..."
              className="message border-2"
              name="message"
            />
          </div>
          <div className="button-send flex justify-center">
            <button type="submit" className="send w-56 py-3 border rounded bg-gray-200 text-black">Send</button>
          </div>
        </form>
      </div>
    </div>



  )
}

export default contact
