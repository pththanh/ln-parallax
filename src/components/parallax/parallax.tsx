import React from 'react'
import Image from 'next/image'

const Parallax = () => {
  return (
    <div>
        <div className='min-h-screen relative w-full bg-sky bg-fixed bg-cover bg-center max-[550px]:bg-scroll'>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <p className='text-6xl uppercase text-white'>Sky</p>
            </div>
        </div>
        <div className="p-20 bg-gradient-to-b from-white to-orange-100">
            <h2 className='font-bold text-4xl pb-2'>Sky</h2>
            <p>The sky, a vast expanse above our heads, paints a canvas of ever-changing hues, from the soft pastels of dawn to the fiery brilliance of sunset,
             adorned with clouds that dance and weave tales across the endless blue, a testament to the beauty and wonder that stretches infinitely overhead.</p>
        </div>
        <div className='min-h-screen relative w-full bg-desert bg-fixed bg-cover bg-center max-[550px]:bg-scroll'>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <p className='text-6xl uppercase text-white'>Desert</p>
            </div>
        </div>
        <div className="p-20 bg-gradient-to-b from-orange-100 to-blue-100">
            <h2 className='font-bold text-4xl pb-2'>Desert</h2>
            <p>The desert, an expansive landscape of arid beauty, unfolds its golden dunes beneath the relentless sun. The rhythmic dance of shifting sands creates a mesmerizing tapestry, 
            while resilient flora and fauna adapt to the harsh conditions, embodying a stark yet captivating harmony in this seemingly inhospitable environment.</p>
        </div>
        <div className='min-h-screen relative w-full bg-sea bg-fixed bg-cover bg-center max-[550px]:bg-scroll'>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <p className='text-6xl uppercase text-white'>Sea</p>
            </div>
        </div>
    </div>
  )
}

export default Parallax