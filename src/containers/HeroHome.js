import React from 'react';
import Link from '../components/Link'

function HeroHome() {



  return (
    <section className="relative">

   

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" >Template Create React App <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Tailwindcss</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" >The template is responsive, so you only have to set it up once and get amazing results.</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"  >
                <div>
                  <Link className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" to="https://github.com/mcljs/tailwind-template-cra">Start</Link>
                </div>
                <div>
                  <Link className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="/">Contact</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div className="relative flex justify-center mb-8" >
              <div className="flex flex-col justify-center">
                <img className="mx-auto" src={require('../images/header.jpg').default} width="768" height="432" alt="Hero" />
             
              </div>
           
            </div>

        

          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroHome;
