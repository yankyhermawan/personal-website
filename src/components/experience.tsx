import Company from "./company";
export default function Experience({ dark }: { dark: boolean }) {
	return (
		<div className="self-start pl-16 pt-16" id="experience">
			<p className="text-3xl font-semibold">Experience</p>
			<div className="flex flex-row flex-wrap mt-8 font-semibold gap-8">
				<Company dark={dark} />
			</div>
		</div>
	);
}
