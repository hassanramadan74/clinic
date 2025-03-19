import Image from 'next/image'
import React from 'react'
import filler from '../../public/filler.png'
import botox from '../../public/botox.png'
import skin from '../../public/skin.png'
function Services() {
  return (
    <section className='bg-[#f2f2f2]'>
        <div className='container mx-auto p-4 pb-12'>
            <div className='text-center'>
            <h2 className='text-6xl font-[1000] mb-2 font-montserrat text-[#2c4755]'>SERVICES</h2>
            <h2 className='font-[400] text-black text-xl font-montserrat'>Learn Services to focus on your beauty</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-4 justify-center'>
                <div className='bg-white rounded-3xl py-12 px-7 shadow-xl flex-col items-center flex justify-center font-montserrat text-center'>
                    <Image src={filler} alt='first service' width={120} height={120}/>
                    <h2 className='text-3xl font-[1000] mt-2 text-[#2c4755]'>FILLER</h2>
                    <h3 className='font-[500] text-[#2c4755] text-[25px] mt-4 mb-7 px-3'>Best Filler in New Cairo
                    Restore volume and contour to your face with our dermal fillers. Enhance your lips, cheeks, and overall facial structure.</h3>
                    <button className="bg-[#2c4755] hover:bg-[#1d3644] text-white rounded-full px-6 py-4 text-[17px] font-medium font-montserrat cursor-pointer">
              More Details
            </button>
                </div>
                <div className='bg-white rounded-3xl py-12 px-7 shadow-xl flex-col items-center flex justify-center font-montserrat text-center'>
                    <Image src={botox} alt='first service' width={120} height={120}/>
                    <h2 className='text-3xl font-[1000] mt-2 text-[#2c4755]'>BOTOX</h2>
                    <h3 className='font-[500] text-[#2c4755] text-[25px] mt-4 mb-7 px-3'>Best Botox in New Cairo
Smooth away wrinkles and fine lines with our Botox treatments. Enjoy a more youthful and refreshed appearance.</h3>
                    <button className="bg-[#2c4755] hover:bg-[#1d3644] text-white rounded-full px-6 py-4 text-[17px] font-medium font-montserrat cursor-pointer">
              More Details
            </button>
                </div>
                <div className='bg-white rounded-3xl py-12 px-7 shadow-xl flex-col items-center flex justify-center font-montserrat text-center'>
                    <Image src={skin} alt='first service' width={120} height={120}/>
                    <h2 className='text-3xl font-[1000] mt-2 text-[#2c4755]'>SKIN BOOSTERS</h2>
                    <h3 className='font-[500] text-[#2c4755] text-[25px] mt-4 mb-7 px-3'>Achieve a radiant and hydrated complexion with our skin boosters. Revitalize your skin from within for a luminous glow.</h3>
                    <button className="bg-[#2c4755] hover:bg-[#1d3644] text-white rounded-full px-6 py-4 text-[17px] font-medium font-montserrat cursor-pointer">
              More Details
            </button>
                </div>
            </div>
            <div className='flex justify-center mt-14 items-center'>
            <button className="bg-[#2c4755] hover:bg-[#1d3644] text-white rounded-full px-12 py-4 text-[19px] font-medium font-montserrat cursor-pointer">
             Explore More of our Services
            </button>
            </div>
        </div>
    </section>
  )
}

export default Services