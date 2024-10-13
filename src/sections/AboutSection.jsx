import '../App.css'
import '../styles/Sections.css'
import '../styles/AboutSection.css'
import Heading from '../components/SectionHeading'
import Block from '../components/AboutSection/Block'
import SingleTriangle from '../components/SingleTriangle'
import TrianglePink from '../components/TrianglePink'
import TriangleChain from '../components/TriangleChain'
import TriangleCombine from '../components/TriangleCombine'

//https://i.pinimg.com/736x/8a/ee/c7/8aeec7bee05f84d7d1b7b0fbf28515a6.jpg

const AboutSection = () => {
	return (
		<section className="section aboutSection pt-40">
			<div className="inner-content">
				<Heading id="aboutSection" heading="About" />
				<div className="blocks flex flex-wrap">
					<Block
						headerText="Experience"
						contentHeading="Web Developer"
						period="August 2023 - Present"
						content={
							<div>
								I am currently an apprentice as a web developer.
								I'm gaining
								<br /> hands-on experience in web development,
								the basics of software engineering and
								developing a software in a team.
							</div>
						}
					/>
					<Block
						headerText="Education"
						contentHeading="Software Developer"
						period="February 2020 - Present"
						content={
							<div>
								I have been programming since 2020. I'm highly
								skilled in building JavaScript backend/frontend
								projects and can implement projects reliably and
								quickly with the right tools.
							</div>
						}
					/>
				</div>
				<div className="absolute top-28 right-28">
					<SingleTriangle
						height="27"
						width="23"
						viewBox="0 0 27 23"
					/>
				</div>
				<div className="absolute top-72 left-28">
					<SingleTriangle
						height="27"
						width="25"
						viewBox="3 -5 27 25"
						rotation="rotate(225, 13.4724, 11.4724)"
					/>
				</div>
				<div className="absolute bottom-12 right-72">
					<SingleTriangle
						height="27"
						width="23"
						viewBox="0 0 27 23"
						rotation="rotate(90, 13.4724, 11.4724)"
					/>
				</div>
				<div className="absolute bottom-10 right-1/2">
					<TrianglePink width="80" height="80" viewBox="0 0 80 80" />
				</div>
				<div className="absolute bottom-1/2 -right-8">
					<TrianglePink
						width="95"
						height="95"
						viewBox="0 -7 95 95"
						rotation="rotate(135, 40, 40)"
					/>
				</div>
				<div className="absolute top-40 right-152">
					<TriangleChain />
				</div>
				<div className="absolute bottom-7 left-36">
					<TriangleCombine />
				</div>
			</div>
		</section>
	)
}

export default AboutSection
