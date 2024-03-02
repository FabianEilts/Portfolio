import '../App.css'
import '../styles/Sections.css'
import '../styles/AboutSection.css'

//https://i.pinimg.com/736x/8a/ee/c7/8aeec7bee05f84d7d1b7b0fbf28515a6.jpg

const AboutSection = () => {
    return (
        <section className="section aboutSection">
            <div className="inner-content">
                <h1 className="tag">&lt;about&gt;</h1>
                <h1 className="tag closing-tag">&lt;/about&gt;</h1>
            </div>
        </section>
    )
}

export default AboutSection;