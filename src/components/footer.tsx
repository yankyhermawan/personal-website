import linkedIn from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import githubLight from "../assets/github-light.svg";
import instagram from "../assets/instagram.svg";
export default function Footer({ dark }: { dark: boolean }) {
	return (
		<div className="flex flex-row justify-center p-8 text-xl bottom-0">
			<div className="flex flex-col gap-6 items-center">
				<span>Find Me On</span>
				<div className="flex flex-row">
					<a href="https://www.linkedin.com/in/yankyhermawan/">
						<img src={linkedIn} width={64} height={64} />
					</a>
					{dark ? (
						<a href="https://github.com/yankyhermawan">
							<img src={githubLight} width={64} height={64} />
						</a>
					) : (
						<a href="https://github.com/yankyhermawan">
							<img src={github} width={64} height={64} />
						</a>
					)}
					<a href="https://www.instagram.com/yomansekik/">
						<img src={instagram} width={64} height={64} />
					</a>
				</div>
			</div>
		</div>
	);
}
