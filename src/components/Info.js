import emailImg from "../images/email.png";
import gibbonImg from "../images/gibbon.jpg";
import linkedInImg from "../images/linkedin.png";

export default function Info() {
	return (
		<div className="info">
			<img
				src={gibbonImg}
				alt="Close-up of the one and only gibbon developer."
			/>
			<h1>Gabriel Luis</h1>
			<h4>Full-Stack Developer</h4>
			<p>gibbondev.com</p>
			<div className="buttons">
				<button>
					<img src={emailImg} alt="Email Icon" />
					Email
				</button>
				<button>
					<img src={linkedInImg} alt="LinkedIn Icon" />
					LinkedIn
				</button>
			</div>
		</div>
	);
}
