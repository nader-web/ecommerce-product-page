import { useState } from "react";

const images = [
	"../images/image-product-1.jpg",
	"../images/image-product-2.jpg",
	"../images/image-product-3.jpg",
	"../images/image-product-4.jpg",
];
const ImageSlider = () => {
	const [activeImage, setActiveImage] = useState(images[0]);
	const handleImageChange = (image: string) => {
		console.log(image);
		const index = images.indexOf(activeImage);
		if (image === images[0] && activeImage === images[0]) {
			setActiveImage(images[images.length - 1]);
		} else if (
			image === images[images.length - 1] &&
			activeImage === images[images.length - 1]
		) {
			setActiveImage(images[0]);
		} else if (index !== -1) {
			setActiveImage(images[(index + 1) % images.length]);
		}
	};

	return (
		<div className="flex flex-col w-full  gap-4">
			{/* Product Image Section */}
			<div className="image-wrapper w-fit relative">
				{/* arrows in right and left switch product images */}
				<span
					className="absolute top-0 h-full left-0 w-8 bg-slate-200 flex items-center lg:hidden"
					onClick={() =>
						handleImageChange(images[images.indexOf(activeImage) - 1])
					}
				>
					<img src="../../images/icon-previous.svg" alt="prev" />
				</span>
				<img
					src={activeImage}
					alt="Product"
					className="w-full h-full rounded-lg object-cover"
				/>
				<span
					className="absolute top-0 h-full right-0 flex items-center lg:hidden"
					onClick={() =>
						handleImageChange(
							images[(images.indexOf(activeImage) + 1) % images.length]
						)
					}
				>
					<img src="../../images/icon-next.svg" alt="next" />
				</span>
			</div>
			{/* Thumbnail Images */}
			<div className="hidden lg:grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 justify-center">
				{images.map((image, index) => (
					<img
						key={index}
						src={image}
						alt={`Product ${index + 1}`}
						className={` object-cover rounded-lg cursor-pointer ${
							activeImage === image ? "border-2 border-orange-500" : ""
						} hover:opacity-75`}
						onClick={() => handleImageChange(image)}
					/>
				))}
			</div>
		</div>
	);
};


export default ImageSlider;
