import React from 'react'

function Des() {
  return (
    <div class="w-full h-auto bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 overflow-hidden">
  <div class="lg:px-16 xs:px-4 xs:py-10 sm:py-10 px-8 py-1 pb-4 h-full flex items-center text-white">
    <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div class="flex flex-col z-10 w-full">
        <h4 class="text-lg font-semibold text-white xl:text-2xl">
          Welcome to my portfolio
        </h4>
        <h1 class="xl:text-8xl sm:text-6xl xs:text-3xl font-semibold font-serif mt-2">
          I'm <span>Aitrik</span>
        </h1>
        <h1 class="sm:text-6xl xs:text-3xl font-semibold font-serif">
          Saha
        </h1>
        <h4 class="text-green-300 mt-4 lg:text-2xl">
          -- FrontEnd Web Developer
        </h4>
        <p class="lg:w-[70%] xs:w-full text-white text-sm mt-4 xl:text-xl">
          Experienced full-stack developer with 4+ years of expertise in Laravel,
          NestJS, Nuxt.js, Next.js, Android, and some Flutter experience.
        </p>
        <div>
          <button class="mt-6 px-6 py-3 rounded-full bg-green-400 hover:bg-green-600 text-gray-300 text-sm lg:text-lg font-bold transition-all duration-300 ease-in-out shadow-md">
    Contact Me
  </button>
        </div>

      </div>

      <div class="flex justify-center items-center">
        <div class="relative rounded-lg shadow-lg overflow-hidden">
          <img
                  className="w-full h-auto"
                  src="https://images.unsplash.com/photo-1632255658480-3546119b5ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNXx8cG9ydGZvbGlvfGVufDB8MXx8fDE3MzczNzQxMDd8MA&ixlib=rb-4.0.3&q=80&w=1080"
                  alt="Incognito Image"
                />
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Des