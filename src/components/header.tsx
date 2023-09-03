export default function Header() {
	return (
		<div className="bg-gray-800 py-4 text-white flex flex-row justify-between px-8">
			<div className="w-max">
				<span>Yanky Hermawan</span>
			</div>
			<div className="w-max flex flex-row gap-4">
				<span>About</span>
				<span>Project</span>
				<span>Contact</span>
			</div>
		</div>
	);
}
