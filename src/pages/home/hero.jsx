import line from "../../assets/line.svg"
import sponsors from "../../assets/sponsors.svg"
import { IoArrowForwardOutline } from "react-icons/io5";
const Hero = () => {
  return (
    <main className='lg:mt-36 mt-28 container mx-auto lg:px-44 px-5'>
      <div className='flex justify-center'>
        <p className='lg:px-64 px-8 lg:text-base text-xs py-2 rounded-full text-center bg-sub border border-border'>
          Your Email & SMS Marketing Partner
        </p>
      </div>
      <div className='relative'>
        <p className='text-center lg:text-5xl text-2xl mt-12 font-bold'>
          Full Service Email & SMS Marketing For <br /> E-commerce Brands
        </p>
        <img
          src={line}
          className='absolute lg:h-auto lg:w-[30%] lg:top-10 top-8 w-2/3 left-1/2 transform -translate-x-1/2'
          alt=''
        />
      </div>

      <p className='text-center mt-8'>
        AJ Media helps e-commerce brands increase revenue through leveraging
        email and SMS marketing.
      </p>

      <div className='flex justify-center mt-10'>
        <button className='uppercase flex items-center lg:px-24 px-12 lg:py-3 py-2 rounded bg-alt text-black font-extrabold'>
          Book a Call
          <IoArrowForwardOutline size={"1.5rem"} className='ml-2' />
        </button>
      </div>

      <div className='flex justify-center'>
        <p className='lg:px-20 py-2 px-8 text-[8px] rounded-full lg:text-sm mt-20 text-center bg-sub border border-border'>
          Trusted By Best-In-Class eCom Brands
        </p>
      </div>

      <div className=' relative'>
        {/* <div className='absolute inset-0 bg-gradient-to-r from-gray-100/10 via-transparent to-transparent pointer-events-none'></div> */}
        <img src={sponsors} className='mt-10' alt='' />
      </div>
    </main>
  );
};

export default Hero;
