import React from 'react'
import Button from '../ui/Button'

const HomeHero = () => {
  return (
    <section className='max-w-5xl mx-auto pt-[80px] pb-[60px] px-5 md:pt-[132px] md:pb-[80px] md:px-8 text-center flex flex-col items-center gap-8'>
        {/* header */}
        <div className="flex flex-col items-center gap-8 w-full max-w-[500px]">
            <div className="text-black-2 grid gap-4 text-balance">
                <h1 className="text-[32px] md:text-[40px] lg:text-[48px]">Convert customers with  an AI-powered CRM</h1>
                <p className='text-[18px] md:text-[19px] lg:text-[20px]'>Streamline your sales process with AI-powered insights and close 50% more deals at faster speed.</p>
            </div>
            <Button text='Get started' variant='primary' to='/' shadow={true} className='px-10 py-2'/>
        </div>
    </section>
  )
}

export default HomeHero