import img1 from "../../assets/1 501.png";
import img2 from "../../assets/1 496.png";
import img3 from "../../assets/1 497.png";
import img4 from "../../assets/1 498.png";
import img5 from "../../assets/1 499.png";
import img6 from "../../assets/1 500.png";
import img7 from "../../assets/1 509.png"
import img8 from "../../assets/1 508.png";
import img9 from "../../assets/1 510.png";
import { IoArrowForwardOutline } from "react-icons/io5";

const Email = () => {
  return (
    <main>
      <div className='flex justify-center'>
        <p className='lg:px-8 py-2 px-4 text-[8px] rounded-full lg:text-sm mt-20 text-center bg-sub border border-border'>
          Email Designs <span className='text-[#aaaaaa]'>/ Our Works</span>
        </p>
      </div>

      <div className='relative'>
        <p className='text-center lg:text-2xl text-md lg:mt-12 mt-4 font-bold'>
          Email Designs custom to your brand
        </p>
      </div>

      <div className='lg:flex hidden mt-10'>
        <img src={img1} className='w-1/6 h-[950px]' alt='img-1' />
        <img src={img2} className='w-1/6 h-[950px]' alt='img-2' />
        <img src={img3} className='w-1/6 h-[950px]' alt='img-3' />
        <img src={img4} className='w-1/6 h-[950px]' alt='img-4' />
        <img src={img5} className='w-1/6 h-[950px]' alt='img-5' />
        <img src={img6} className='w-1/6 h-[950px]' alt='img-6' />
      </div>

      <div className='flex lg:hidden mt-5'>
        <img src={img7} className='w-1/3 ' alt='' />
        <img src={img8} className='w-1/3 ' alt='' />
        <img src={img9} className='w-1/3 ' alt='' />
      </div>

      <div className='flex justify-center mt-10'>
        <button className='lg:uppercase flex items-center lg:px-24 px-4 lg:py-3 py-2 rounded lg:text-base text-xs bg-alt text-black font-extrabold'>
          See Our Design Gallery
          <IoArrowForwardOutline size={"1.5rem"} className='ml-2' />
        </button>
      </div>
    </main>
  );
};

export default Email;
