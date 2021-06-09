import React from 'react'
import image from '../lake.jpg'

const Home = () => {
  return (
    <main>
      <img
        src={image}
        alt="Lake Louise"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8 bgimg-css">
        <h1 className="text-6xl text-gray-50 font-bold cursive leading-none lg:leading-snug home-name">
          NAMASTE. I'M YASH.
        </h1>
      </section>
    </main>
  )
}

export default Home
