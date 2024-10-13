import '../App.css'
import '../styles/Sections.css'
import '../styles/SkillSection.css'
import SingleTriangle from '../components/SingleTriangle'
import TrianglePink from '../components/TrianglePink'
import TriangleChain from '../components/TriangleChain'
import Heading from '../components/SectionHeading'
import SkillsCard from '../components/SkillsSection/SkillsCard'

const SkillSection = () => {
	return (
		<section className="section skillSection relative pt-40">
			<div className="inner-content h-full flex flex-col">
				<Heading id="skillSection" heading="Skills" />
				<div className="flex flex-wrap my-auto justify-center gap-y-16 gap-x-20">
					<SkillsCard imageUrl="/react.svg" skillName="React" />
					<SkillsCard imageUrl="/vue.svg" skillName="Vue.js" />
					<SkillsCard
						imageUrl="/typescript.svg"
						skillName="Typescript"
					/>
					<SkillsCard imageUrl="/html.svg" skillName="HTML" />
					<SkillsCard imageUrl="/css.svg" skillName="CSS" />
					<SkillsCard imageUrl="/symfony.svg" skillName="Symfony" />
					<SkillsCard imageUrl="/mysql.svg" skillName="MySQL" />
					<SkillsCard imageUrl="/nodejs.svg" skillName="Node.js" />
					<SkillsCard imageUrl="/python.svg" skillName="Python" />
					<SkillsCard imageUrl="/git.svg" skillName="Git" />
				</div>
				<div className="absolute top-40 left-80">
					<SingleTriangle
						height="27"
						width="23"
						viewBox="0 0 27 23"
						rotation="rotate(90, 13, 11)"
					/>
				</div>
				<div className="absolute bottom-96 right-0 mb-10">
					<SingleTriangle
						height="27"
						width="24"
						viewBox="0 0 27 24"
						rotation="rotate(145, 15, 14)"
					/>
				</div>
				<div className="absolute bottom-20 left-56">
					<SingleTriangle
						height="27"
						width="23"
						viewBox="0 0 27 23"
						rotation="rotate(180, 13, 12)"
					/>
				</div>
				<div className="absolute bottom-24 right-96">
					<TriangleChain />
				</div>
				<div className="absolute bottom-1/2 -left-14">
					<TrianglePink
						width="95"
						height="95"
						viewBox="0 -7 95 95"
						rotation="rotate(135, 40, 40)"
					/>
				</div>
			</div>
		</section>
	)
}

export default SkillSection
