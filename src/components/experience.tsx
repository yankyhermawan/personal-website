import Company from "./company";
export default function Experience({ dark }: { dark: boolean }) {
	return (
		<div className="self-start pl-16 pt-16" id="experience">
			<p className="text-3xl font-semibold">Experience</p>
			<div className="flex flex-row flex-wrap mt-8 font-semibold">
				<div
					className={`flex flex-col border-solid border-[1px] ${
						dark ? "border-bgLight" : "border-bgDark"
					} border-opacity-70 gap-8`}
				>
					<Company />
				</div>
			</div>
		</div>
	);
}
