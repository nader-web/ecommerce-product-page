interface Iprop {
	productName: string;
	description: string;
	price: number;
	discountPercentage: number;
}
const ProductDetails = ({
	productName,
	description,
	price,
	discountPercentage,
}: Iprop) => {
	return (
		<div className="flex flex-col gap-6 ">
			<h1 className="text-3xl font-bold mb-10">{productName}</h1>
			<p className="text-lg mb-7">{description}</p>
			<div className="flex items-center gap-4">
				{discountPercentage ? (
					<>
						<span className="text-lg font-bold">
							{new Intl.NumberFormat("en-US", {
								style: "currency",
								currency: "USD",
							}).format(price - (price * discountPercentage) / 100)}
						</span>
						
						<span className="text-sm text-gray-500">
							{discountPercentage}% off
						</span><span className="line-through">
							{new Intl.NumberFormat("en-US", {
								style: "currency",
								currency: "USD",
							}).format(price)}
						</span>
					</>
				) : (
					<span className="text-lg font-bold">
						{new Intl.NumberFormat("en-US", {
							style: "currency",
							currency: "USD",
						}).format(price)}
					</span>
				)}
			</div>
		</div>
	);
};
export default ProductDetails;
