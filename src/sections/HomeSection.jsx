import '../App.css'
import '../styles/Sections.css'
import '../styles/HomeSection.css'
import '../connectingDots.js'

const HomeSection = () => {
    return (
            <section className="section homeSection bg-secondaryColor">
                <canvas id="canvas">
                </canvas>
            </section>
    )
}

export default HomeSection;