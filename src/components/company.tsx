export default function Company() {
	const companies = [
		{
			name: "HUTAMA MANDALA PUTRA",
			industry: "Metal Fabrication Workshop",
			start: "Dec 2022",
			end: "Present",
			position: "Team Leader",
		},
	];
	return (
		<>
			{companies.map((company, idx) => {
				return (
					<div key={idx}>
						<div className="flex flex-row justify-between gap-16">
							<p>{company.position}</p>
							<p>{`${company.start}-${company.end}`}</p>
						</div>

						<div className="flex flex-col gap-2">
							{company.name}
							<p>{company.industry}</p>
						</div>
					</div>
				);
			})}
		</>
	);
}
