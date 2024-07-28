// src/ResponsiveDivs.js
import { useState } from "react";

import Slide0 from "../../assets/Slide0.png";
import Slide1 from "../../assets/Slide1.png";
import Slide2 from "../../assets/Slide2.png";
import Slide3 from "../../assets/Slide3.png";
import VectorPurple from "../../assets/VectorPurple.png";

const ResponsiveDivs = () => {
	const [currentDiv, setCurrentDiv] = useState(0);

	const divs = [
		{
			id: 1,
			content: (
				<>
					<img src={Slide0} alt='slide 0' />
				</>
			),
		},
		{
			id: 2,
			content: (
				<>
					<img src={Slide1} alt='slide 1' />
				</>
			),
		},
		{
			id: 3,
			content: (
				<>
					<img src={Slide2} alt='slide 2' />
				</>
			),
		},
		{
			id: 4,
			content: (
				<>
					<img src={Slide3} alt='slide 3' />
				</>
			),
		},
	];

	const nextDiv = () => {
		setCurrentDiv((prevDiv) => (prevDiv + 1) % divs.length);
	};

	const prevDiv = () => {
		setCurrentDiv((prevDiv) => (prevDiv - 1 + divs.length) % divs.length);
	};

	return (
		<div className='mx-4'>
			<div className='flex justify-center'>
				<p className='lg:px-8 py-2 px-4 text-[8px] rounded-full lg:text-sm mt-20 text-center bg-sub border border-border'>
					5 Star Reviews only
				</p>
			</div>

			<div className='relative mb-6'>
				<p className='text-center lg:text-2xl text-md lg:mt-12 mt-4 font-bold lg:mb-12'>
					What Our
					<span className='relative inline-block mx-2'>
						Clients
						<img
							src={VectorPurple}
							className='absolute lg:h-auto lg:w-full lg:top-8 top-6 w-full left-1/2 transform -translate-x-1/2'
							alt=''
						/>
					</span>
					Have To Say
				</p>
			</div>
			{/* Desktop View */}
			<div className='hidden md:flex justify-between mx-6 space-x-4'>
				{divs.map((div) => (
					<div key={div.id}>{div.content}</div>
				))}
			</div>

			{/* Mobile View */}
			<div className='relative flex md:hidden justify-center items-center mx-4'>
				<button
					onClick={prevDiv}
					className='absolute left-0 bg-gray-300 hover:bg-gray-400 rounded-full p-2 m-2'
					aria-label='Previous'
				>
					&lt;
				</button>
				<div className='flex justify-center items-center w-full'>
					<div className='w-2/3'>{divs[currentDiv].content}</div>
				</div>
				<button
					onClick={nextDiv}
					className='absolute right-0 bg-gray-300 hover:bg-gray-400 rounded-full p-2 m-2'
					aria-label='Next'
				>
					&gt;
				</button>
			</div>
		</div>
	);
};

export default ResponsiveDivs;
