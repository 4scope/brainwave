import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import Section from "./Section";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
	return (
		<Section className='overflow-hidden' id='pricing'>
			<div className='container relative z-2'>
				<div className='hidden relative justify-center mb-[6.5rem] lg:flex'>
					<img
						src={smallSphere}
						className='relative z-1'
						width={225}
						height={255}
						alt='sphere'
					/>
					<div className='absolute'>
						<img
							src={stars}
							className='w-full'
							width={950}
							height={400}
							alt='stars'
						/>
					</div>
				</div>
				<Heading
					title='Pay once, use forever'
					tag='Get started with Brainwave'
				/>

				<div className='relative'>
					<PricingList />
					<LeftLine />
					<RightLine />
				</div>

				<div className='flex justify-center mt-10'>
					<a
						href='/pricing'
						className='body-2 text-xs font-code font-bold border-b tracking-wider'
					>
						See more details
					</a>
				</div>
			</div>
		</Section>
	);
};

export default Pricing;
