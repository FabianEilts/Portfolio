import '../App.css'
import '../styles/Sections.css'
import '../styles/AboutSection.css'
import Heading from '../components/AboutSection/SectionHeading'
import Block from '../components/AboutSection/Block'
import SingleTriangle from '../components/AboutSection/SingleTriangle'

//https://i.pinimg.com/736x/8a/ee/c7/8aeec7bee05f84d7d1b7b0fbf28515a6.jpg

const AboutSection = () => {
    return (
        <section className="section aboutSection pt-40">
            <div className="inner-content">
                <Heading heading="About"/>
                <div className='flex'>
                    <Block
                        headerText="Experience" 
                        contentHeading="Web Developer" 
                        period="August 2023 - Present" 
                        content={
                            <div>
                                I am currently an apprentice as a web developer. 
                                I’m gaining<br/> hands-on experience in web development, 
                                the basics of software engineering and developing a 
                                software in a team.
                            </div>
                        }
                    />
                    <Block
                        headerText="Education" 
                        contentHeading="Software Developer" 
                        period="February 2020 - Present" 
                        content={
                            <div>
                                I have been programming since 2020. 
                                I’m highly skilled in building JavaScript backend/frontend 
                                projects and can implement projects reliably and quickly 
                                with the right tools.
                            </div>
                        }
                    />
                </div>
                <div className='mb-5'>
                    <SingleTriangle/>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;