export const skills = [
	{
		name: "javascript",
		prof: "proficient",
		cat: "lang",
	},
	{
		name: "typescript",
		prof: "proficient",
		cat: "lang",
	},
	{
		name: "python",
		prof: "competent",
		cat: "lang",
	},
	{
		name: "java",
		prof: "novice",
		cat: "lang",
	},
	{
		name: "golang",
		prof: "novice",
		cat: "lang",
	},

	{
		name: "react",
		prof: "proficient",
		cat: "front end",
	},
	{
		name: "tailwindcss",
		prof: "proficient",
		cat: "front end",
	},
	{
		name: "nextjs",
		prof: "competent",
		cat: "front end",
	},
	{
		name: "express",
		prof: "proficient",
		cat: "back end",
	},
	{
		name: "nestjs",
		prof: "proficient",
		cat: "back end",
	},
	{
		name: "flask",
		prof: "competent",
		cat: "back end",
	},

	{
		name: "nextjs",
		prof: "competent",
		cat: "back end",
	},
	{
		name: "spring",
		prof: "novice",
		cat: "back end",
	},
	{
		name: "prisma",
		prof: "competent",
		cat: "db",
	},
	{
		name: "postgresql",
		prof: "novice",
		cat: "db",
	},
	{
		name: "mongodb",
		prof: "novice",
		cat: "db",
	},
	{
		name: "mysql",
		prof: "novice",
		cat: "db",
	},
];

export function titleCase(str: string) {
	return str
		.toLowerCase()
		.split(" ")
		.map(function (word) {
			return word.charAt(0).toUpperCase() + word.slice(1);
		})
		.join(" ");
}

export const data = [
	{
		name: "Chatterbox",
		role: "Backend Leader",
		start: "July 2023",
		end: "August 2023",
		tech: ["ExpressJS", "Socket.IO", "RestAPI", "Prisma", "PostgreSQL"],
		url: "https://chatterbox-t3.netlify.app",
		github: "https://github.com/yankyhermawan/chatterbox",
		description:
			"ChatterBox is a cutting-edge group chat app designed to revolutionize your communication experience. Whether it's connecting with friends, family, or colleagues, ChatterBox offers a seamless and intuitive platform for all your group messaging needs. With its cross-platform capabilities and customizable profiles, ChatterBox brings a new level of convenience and personalization to your conversations.",
	},
	{
		name: "Curagan",
		role: "Backend",
		start: "September 2023",
		end: "Present",
		tech: ["NestJS", "Socket.IO", "RestAPI", "Prisma", "PostgreSQL"],
		url: "https://curagan-frontend.vercel.app/",
		github: "https://github.com/yankyhermawan/curagan-backend",
		description:
			"Curagan is a mobile-based web application where we can make appointments with available doctors for consultation.",
	},
	{
		name: "TRAFFIC CONGESTION INDEX OF THE TOP 300 LARGEST CITIES IN THE WORLD BASED ON UNCALIBRATED IFN",
		role: "Full Stack Developer",
		start: "December 2021",
		end: "July 2022",
		tech: ["Flask", "Open Street Map", "Data", "Python"],
		url: "https://publication.petra.ac.id/index.php/teknik-sipil/article/view/12933",
		github: "https://github.com/yankyhermawan/yankyhermawan.github.io",
		description:
			"The abstract discusses the Ideal Flow Network (IFN) method, a novel approach for estimating traffic congestion indices without the need for OD-Matrix data. IFN requires a strongly connected road network with balanced traffic flow, making it irreducible and premagic. The research aims to apply IFN to estimate congestion levels in 300 major cities worldwide based on GDP, population, and area. The results will be presented in rankings, a novel application of IFN. Additionally, the study explores the relationship between congestion levels and various indicators. Surprisingly, the research finds little correlation between congestion and GDP, population, or area. The findings are shared on a website to promote IFN as a congestion estimation tool.",
	},
];

export const companies = [
	{
		name: "RevoU Next Internship",
		industry: "Education",
		start: "Aug 2023",
		end: "Present",
		position: "Backend Developer",
		jobDesc: [
			"Designed and implemented secure user authentication, authorization, and role-based access control using JWT tokens in a web application.",
			"Designed and implemented a real-time doctor status tracking feature on the server-side using Socket.IO, allowing instant updates of doctor availability and status to clients.",
			"Led the initial design and modeling of the application's database schema, optimizing data storage structures for enhanced performance and scalability.",
			"Developed comprehensive unit tests for backend components using Jest",
		],
		skills: [
			"Backend Development",
			"NestJS",
			"WebSocket",
			"Authentication",
			"Authorization",
			"Prisma",
			"PostgreSQL",
		],
	},
	{
		name: "HUTAMA MANDALA PUTRA",
		industry: "Metal Fabrication Workshop",
		start: "Dec 2022",
		end: "Present",
		position: "Team Leader",
		jobDesc: [
			"Act as the primary customer contact for project requirements clarification.",
			"Develop detailed work plans, accounting for project scope, timelines, resources, and budget constraints.",
			"Communicate project goals, objectives, and deliverables clearly to the project team.",
			"Monitor project progress, ensuring adherence to timelines, quality standards, and customer requirements.",
			"Identify and mitigate project risks and develop contingency plans.",
		],
		skills: [
			"Leadership",
			"Team Work",
			"Communication",
			"Critical Thinking",
			"Problem Solving",
		],
	},
];
