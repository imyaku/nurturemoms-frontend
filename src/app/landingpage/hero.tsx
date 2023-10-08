import React from 'react'

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-xl"
          alt="hero"
          src="assets\nurturemoms_image.png"
        ></img>
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
            Maternal Care and Empowerment at the Heart of NurtureMoms Your
            Partner Through Pregnancy and Beyond
          </h1>
          <p className="mb-8 leading-relaxed">
            Welcome to NurtureMoms, your dedicated companion throughout the
            incredible journey of motherhood. NurtureMoms is here to ensure
            every step of the way is filled with confidence and care.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-yellow-300 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-200 rounded text-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero