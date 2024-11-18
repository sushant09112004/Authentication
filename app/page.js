// pages/index.js
"use client";
import Head from 'next/head';
import Image from 'next/image';
import useGsapAnimations from './hooks/landing-animation';

export default function Home() {
  useGsapAnimations();
  return (
    <div className="bg-[url('/bg.svg')] bg-cover min-h-screen flex flex-col overflow-x-hidden">
      <Head>
        <title>FinAdvise</title>
        <meta name="description" content="AI-based financial advisor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full flex flex-col items-center  relative">
        <h1 id='animated-h1' className="text-4xl md:text-6xl lg:text-8xl font-bold text-center mt-5">Personalized Financial</h1>
        <h1 id='animated-h1' className="text-4xl md:text-6xl lg:text-8xl mb-24 font-bold text-center">Guidance</h1>

        {/* SVG container positioned lower */}
        <div className="absolute inset-x-64 flex justify-between items-center px-4 md:px-8 lg:px-16 top-16 md:top-16 lg:top-16 gap-16"> {/* Adjusted positioning and gap */}
          <div className="hidden w-40 h-40 lg:block  md:w-56 md:h-56 lg:w-72 lg:h-72"> {/* Increased sizes */}
            <Image
              id='left-svg'
              src="/chat-img.svg"
              alt="Chat Image"
              layout="responsive"
              width={256}
              height={256}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="hidden lg:block w-40 h-40  md:w-56 md:h-56 lg:w-64 lg:h-64"> {/* Increased sizes */}
            <Image
              id='right-svg'
              src="/graph-icon.svg"
              alt="Graph Icon"
              layout="responsive"
              width={256}
              height={256}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        {/* Responsive paragraph */}
        <p id="hero-description" className="text-center text-lg md:text-xl lg:text-2xl mb-5 leading-relaxed md:leading-relaxed lg:leading-relaxed">
          AI-driven insights, real-time advice,<br className="hidden md:block"/> and comprehensive tools tailored to <br className="hidden md:block"/> your unique financial journey.
        </p>

        {/* Responsive input and button */}
        <div id = "waitlist-btn"className="flex items-center justify-center flex-col md:flex-row gap-2 w-full md:w-auto mb-16">
        <input
    className="bg-gray-500 text-white opacity-50 rounded-xl p-2 md:p-3 lg:p-4 pl-5 md:pl-6 lg:pl-8 text-sm md:text-base lg:text-lg w-1/2 md:w-auto"
    placeholder="name@email.com"
  />
  <button className="bg-white text-black p-2 md:p-3 lg:p-4 font-semibold rounded-xl text-sm md:text-base lg:text-lg w-1/2 md:w-auto">
    Join Waitlist
  </button>
</div>


        {/* Ellipse SVG positioned below the button */}
        <div className="w-full">
          <Image
            src="/ellipse.svg"
            alt="Ellipse"
            layout="responsive"
            width={1920}
            height={500}
            className="w-full object-cover"
          />
        </div>
         {/* Responsive text sections */}
         <div className='bg-black w-full pb-40'>
          <h2 className='text-white text-center text-4xl mb-12 md:text-5xl lg:text-6xl font-bold leading-relaxed'>The problems</h2>
          <h2 className='text-custom-purple text-center mb-10  text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug mt-2'>Lack of Knowledge</h2>
          <h2 className='text-custom-purple2 text-center mb-10 text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug mt-2'>Tracking/Managing Expenses</h2>
          <h2 className='text-custom-purple3 text-center  text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug mt-2'>Missing important deadlines</h2>
        </div>
        <div className='bg-black w-full pb-40'>
              <p className='text-white text-5xl font-bold text-center'>There is a easier way</p>
        </div>
        <div className='bg-black w-full pb-20'>
              <h2 className='text-white text-5xl font-bold text-center'>Effortless Financial Management</h2>
        </div>
       {/* Feature cards section */}
       <div className="bg-black w-full h-full pb-5">
          <div className="bg-black grid grid-cols-1 md:grid-cols-2 gap-10 p-10 mx-auto max-w-screen-lg">
            {/* Feature Card 1 */}
            <div className="flex flex-col items-center bg-black border-2 border-gray-600 p-10 rounded-lg w-full">
              <Image
                src="/feature-1-icon.svg"
                alt="Feature Icon 1"
                layout="fixed"
                width={64}
                height={64}
                className="object-contain pb-2"
              />
              <h2 className="text-white font-semibold text-center text-xl mt-3 pb-1">
                Personalized Recommendations
              </h2>
              <p className="text-center font-light text-base">
                Tailored financial advice based on your unique profile, goals, and risk tolerance.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="flex flex-col items-center bg-black border-2 border-gray-600 p-10 rounded-lg w-full">
              <Image
                src="/feature-2-icon.svg"
                alt="Feature Icon 2"
                layout="fixed"
                width={64}
                height={64}
                className="object-contain"
              />
              <h2 className="text-white font-semibold text-center text-xl mt-3 pb-1">
                Interactive Chat Q&A
              </h2>
              <p className="text-center font-light text-base">
                Interaction with AI chatbot for prompt responses to your financial queries.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="flex flex-col items-center bg-black border-2 border-gray-600 p-10 rounded-lg w-full">
              <Image
                src="/feature-3-icon.svg"
                alt="Feature Icon 3"
                layout="fixed"
                width={64}
                height={64}
                className="object-contain"
              />
              <h2 className="text-white font-semibold text-center text-xl mt-3 pb-1">
                Expense Tracker
              </h2>
              <p className="text-center font-light text-base">
                Simplify your expense tracking and monitor your spending habits efficiently.
              </p>
            </div>

            {/* Feature Card 4 */}
            <div className="flex flex-col items-center bg-black border-2 border-gray-600 p-10 rounded-lg w-full">
              <Image
                src="/feature-4-icon.svg"
                alt="Feature Icon 4"
                layout="fixed"
                width={64}
                height={64}
                className="object-contain"
              />
              <h2 className="text-white font-semibold text-center text-xl mt-3 pb-1">
                Finance News Aggregator
              </h2>
              <p className="text-center font-light text-base">
                Stay informed with curated finance-related content to enhance your financial literacy.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[url('/blur-bg.svg')] flex flex-col w-full h-full items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 w-full  max-w-screen-lg">
        {/* Existing Solution Card */}
        <div className="relative w-full bg-black border-4 border-red-500 shadow-2xl shadow-red-400 rounded-3xl p-6">
          <div className="absolute inset-0 rounded-lg border-gradient-to-r from-red-400 via-red-500 to-red-600 opacity-75 pointer-events-none"></div>
          <div className="relative z-10 flex flex-col ">
          <h3 className="text-white text-3xl md:text-4xl lg:text-5xl whitespace-nowrap p-5 font-semibold mb-8">
          Existing Solution
        </h3>
        <p className="flex items-center text-red-200 text-2xl font-medium pl-5 pb-14">
          <span className="mr-2 text-red-500">&#x2716;</span> {/* Red Cross Icon */}
          Expensive Financial Advisors
        </p>
        <p className="flex items-center text-red-200 text-red text-2xl font-medium pl-5 pb-16">
          <span className="mr-2 text-red-500">&#x2716;</span> {/* Red Cross Icon */}
          Generic Advise
        </p>
        <p className="flex items-center text-red-200 text-red text-2xl font-medium pl-5 pb-5">
          <span className="mr-2 text-red-500">&#x2716;</span> {/* Red Cross Icon */}
          Standalone Financial Apps
        </p>
          </div>
        </div>

        {/* Our Solution Card */}
        <div className="relative bg-black border-4 w-full shadow-2xl shadow-green-400 border-green-500 rounded-3xl p-6">
          <div className="absolute inset-0 rounded-lg  opacity-75 pointer-events-none"></div>
          <div className="relative z-10 flex flex-col ">
            
          <h3 className="text-white text-3xl md:text-4xl lg:text-5xl whitespace-nowrap p-5 font-semibold mb-8">
          Our Solution
        </h3> 
        <p className="flex items-center text-green-200 text-2xl font-medium pl-5 pb-10">
          <span className="mr-2 text-green-500">&#x2714;</span> {/* Green Tick Icon */}
          Affordable, AI-driven guidance
        </p>
        <p className="flex items-center text-green-200 text-2xl font-medium pl-5 pb-10">
          <span className="mr-2 text-green-500">&#x2714;</span> {/* Green Tick Icon */}
          Integrated financial ecosystem <br /> with professional advice
        </p>
        <p className="flex items-center text-green-200 text-2xl font-medium pl-5 pb-10">
          <span className="mr-2 text-green-500">&#x2714;</span> {/* Green Tick Icon */}
          Personalized financial recommendations
        </p>
          </div>
        </div>
      </div>
      <div className="relative py-20 flex flex-col w-full h-full items-center">
  {/* Top Left SVG */}
  <div className="absolute top-0 left-0 w-20 h-20 md:w-40 md:h-40 lg:w-64 lg:h-64">
    <img src="/footer-1-icon.svg" alt="Top Left SVG" className="w-full h-full object-contain" />
  </div>

  {/* Bottom Right SVG */}
  <div className="absolute bottom-0 right-0 w-20 h-20 md:w-40 md:h-40 lg:w-64 lg:h-64">
    <img src="/footer-2-icon.svg" alt="Bottom Right SVG" className="w-full h-full object-contain" />
  </div>

  <div className="relative z-10 flex flex-col items-center text-center max-w-screen-lg mx-auto">
    <h3 className="text-white text-3xl md:text-3xl lg:text-4xl font-semibold mb-8">
      Get instant access
    </h3>
    <p className="text-white text-2xl md:text-lg lg:text-xl mb-8 max-w-prose">
      Celebrate the joy of accomplishment with an app designed<br className="hidden md:block" /> to track your progress and motivate your efforts.
    </p>
    <div className="flex flex-col md:flex-row items-center gap-2 w-full max-w-md">
    <input
    className="bg-gray-500 text-white opacity-50 rounded-xl p-2 md:p-3 lg:p-4 pl-5 md:pl-6 lg:pl-8 text-sm md:text-base lg:text-lg w-1/2 md:w-auto"
    placeholder="name@email.com"
  />
      <button className="bg-white text-black p-2 md:p-3 lg:p-4 font-semibold rounded-xl text-sm md:text-base lg:text-lg">
        Join Waitlist
      </button>
    </div>
  </div>
</div>
</div>
      </main>
      <div className="w-full bg-black">
        <footer className="bg-black text-white p-4 text-center items-center flex justify-between w-full">
          &copy; 2024 Existence. All rights reserved.
          <div className="flex gap-4">
            <Image
              src="/x.svg"
              alt="X Icon"
              width={24}
              height={24}
              className="w-6 h-6 object-contain"
            />
            <Image
              src="/linkedin.svg"
              alt="LinkedIn Icon"
              width={24}
              height={24}
              className="w-6 h-6 object-contain"
            />
            <Image
              src="/youtube.svg"
              alt="YouTube Icon"
              width={24}
              height={24}
              className="w-6 h-6 object-contain"
            />
          </div>
        </footer>
      </div>
    </div>
  );
}
