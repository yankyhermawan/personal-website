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
		name: "flask",
		prof: "competent",
		cat: "back end",
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
		tech: ["ExpressJS", "Socket.IO", "RestAPI", "Prisma", "PostgreSQL"],
		url: "chatterbox-t3.netlify.app",
		github: "https://github.com/yankyhermawan/chatterbox",
	},
	{
		name: "Curagan",
		role: "Backend",
		tech: ["NestJS", "Socket.IO", "RestAPI", "Prisma", "PostgreSQL"],
		url: "curagan-frontend.vercel.app/",
		github: "https://github.com/yankyhermawan/curagan-backend",
	},
	{
		name: "TRAFFIC CONGESTION INDEX OF THE TOP 300 LARGEST CITIES IN THE WORLD BASED ON UNCALIBRATED IFN",
		role: "Full Stack Developer",
		tech: ["Flask", "Open Street Map", "Data"],
		url: "https://publication.petra.ac.id/index.php/teknik-sipil/article/view/12933",
		github: "https://github.com/yankyhermawan/yankyhermawan.github.io",
	},
];
