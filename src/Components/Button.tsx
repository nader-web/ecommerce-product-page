interface Iprop extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	name: string;
	icon: string;
}
const Button = ({ name, icon }: Iprop) => {
	return (
		<button className="bg-orange-500 hover:bg-orange-600 text-white font-bold inline-flex h-14 w-80 md:w-80 lg:w-72 xl:w-72 2xl:w-64 rounded-lg items-center justify-center gap-3 ">
			<img src={icon} />

			{name}
		</button>
	);
};
export default Button;
