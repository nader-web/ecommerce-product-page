import Button from "./Button";
import ImageSlider from "./ImageSlider";
import ProductDetails from "./Product-details";

const MainSection = () => {
	return (
		<main className="main-section py-10 min-h-full flex items-center">
			<div className="container flex-col w-full lg:w-[850.08px] xl:w-[1037.6px] 2xl:w-[1224.96px] px-0 lg:px-4  lg:mx-auto lg:h-full lg:flex lg:flex-row lg:items-center lg:justify-around 2xl:gap-32 xl:gap-24 lg:gap-16 md:gap-12">
				{/* Part 1: Image Slider */}
				<ImageSlider />
				<div className="flex flex-col items-center lg:items-start">
					{/* Part 2: Product Description Section */}
					<ProductDetails
						productName="Fall Limited Edition Sneakers"
						description="These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they&#39;ll withstand everything the weather can offer."
						price={250}
						discountPercentage={50}
					/>
					<div className="flex items-center gap-4 h-14 flex-col lg:flex-row ">
						{/* product quantity section */}
						<div className="flex bg-blue-100 2xl:w-40 xl:w-36 lg:w-32 md:w-28  justify-evenly items-center rounded-md h-full gap-4">
							<button className="text-3xl font-bold">-</button>
							<span className="text-3xl font-bold">0</span>
							<button className="text-3xl font-bold">+</button>
						</div>
						<div className="flex items-center gap-4 ">
							<Button name="add to cart" icon="../images/icon-cart.svg " />
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default MainSection;
