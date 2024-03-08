import '../App.css'
import '../styles/Sections.css'
import '../styles/HomeSection.css'
import SocialMedia from '../SocialMedia.jsx'
import ResumeBtn from '../components/buttons/ResumeBtn.jsx'
import HireMeBtn from '../components/buttons/HireMeBtn.jsx'

//https://i.pinimg.com/736x/8a/ee/c7/8aeec7bee05f84d7d1b7b0fbf28515a6.jpg

const HomeSection = () => {
    return (
            <section className="section homeSection">
                    <div className="inner-content mx-44 mt-20">
                        <div className="greeting mt-60">
                            <span className="text-6xl">Hello, I am Fabian.</span><br></br>
                            <span className="text-2 text-secondaryColor typeWriter">Web Developer from Germany<span className="cursor">|</span></span><br/>
                            <div className="flex gap-5 mt-5">
                                <HireMeBtn />
                                <ResumeBtn />
                            </div>
                            <SocialMedia />
                        </div>
                        <figure className="shapeFigure">
                            <svg width="1185" height="951" viewBox="0 0 1185 951" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="519" y1="40.5" x2="574" y2="40.5" stroke="#48EDDD" stroke-width="3"/>
                            <line x1="572.5" y1="39" x2="572.5" y2="94" stroke="#48EDDD" stroke-width="3"/>
                            <line x1="158" y1="469.5" x2="213" y2="469.5" stroke="#E9B171" stroke-width="3"/>
                            <line x1="159.5" y1="416" x2="159.5" y2="471" stroke="#E9B171" stroke-width="3"/>
                            <path d="M131.866 267.5L131 266L130.134 267.5L121.474 282.5L120.608 284H122.34H139.66H141.392L140.526 282.5L131.866 267.5Z" stroke="#E9B171" stroke-width="2"/>
                            <path d="M179.866 267.5L179 266L178.134 267.5L169.474 282.5L168.608 284H170.34H187.66H189.392L188.526 282.5L179.866 267.5Z" stroke="#E9B171" stroke-width="2"/>
                            <path d="M156.066 267.5L155.2 266L154.334 267.5L145.674 282.5L144.808 284H146.54H163.86H165.592L164.726 282.5L156.066 267.5Z" stroke="#E9B171" stroke-width="2"/>
                            <path d="M204.066 267.5L203.2 266L202.334 267.5L193.674 282.5L192.808 284H194.54H211.86H213.592L212.726 282.5L204.066 267.5Z" stroke="#E9B171" stroke-width="2"/>
                            <path d="M71.1583 455.008L70.71 456.681L72.383 456.232L89.1133 451.749L90.7864 451.301L89.5616 450.076L77.3142 437.829L76.0894 436.604L75.6411 438.277L71.1583 455.008Z" stroke="#E9B171" stroke-width="2"/>
                            <path d="M37.2172 421.066L36.7689 422.739L38.4419 422.291L55.1722 417.808L56.8453 417.36L55.6205 416.135L43.3731 403.888L42.1483 402.663L41.7 404.336L37.2172 421.066Z" stroke="#E9B171" stroke-width="2"/>
                            <path d="M54.0463 437.896L53.598 439.569L55.271 439.12L72.0013 434.637L73.6744 434.189L72.4496 432.964L60.2022 420.717L58.9774 419.492L58.5291 421.165L54.0463 437.896Z" stroke="#E9B171" stroke-width="2"/>
                            <path d="M20.1052 403.954L19.6569 405.627L21.3299 405.179L38.0602 400.696L39.7333 400.248L38.5085 399.023L26.2611 386.776L25.0363 385.551L24.588 387.224L20.1052 403.954Z" stroke="#E9B171" stroke-width="2"/>
                            <path d="M699.008 204.179L700.681 204.627L700.232 202.954L695.749 186.224L695.301 184.551L694.076 185.776L681.829 198.023L680.604 199.248L682.277 199.696L699.008 204.179Z" stroke="#48EDDD" stroke-width="2"/>
                            <path d="M665.066 238.12L666.739 238.568L666.291 236.895L661.808 220.165L661.36 218.492L660.135 219.717L647.888 231.964L646.663 233.189L648.336 233.637L665.066 238.12Z" stroke="#48EDDD" stroke-width="2"/>
                            <path d="M681.896 221.291L683.569 221.739L683.12 220.066L678.637 203.336L678.189 201.663L676.964 202.888L664.717 215.135L663.492 216.36L665.165 216.808L681.896 221.291Z" stroke="#48EDDD" stroke-width="2"/>
                            <path d="M647.954 255.232L649.627 255.68L649.179 254.007L644.696 237.277L644.248 235.604L643.023 236.829L630.776 249.076L629.551 250.301L631.224 250.749L647.954 255.232Z" stroke="#48EDDD" stroke-width="2"/>
                            <circle cx="116" cy="17" r="1" fill="#E9B171"/>
                            <circle cx="116" cy="57" r="1" fill="#E9B171"/>
                            <circle cx="116" cy="37" r="1" fill="#E9B171"/>
                            <circle cx="116" cy="77" r="1" fill="#E9B171"/>
                            <circle cx="116" cy="107" r="1" fill="#E9B171"/>
                            <circle cx="116" cy="27" r="1" fill="#E9B171"/>
                            <circle cx="116" cy="67" r="1" fill="#E9B171"/>
                            <circle cx="116" cy="97" r="1" fill="#E9B171"/>
                            <circle cx="116" cy="47" r="1" fill="#E9B171"/>
                            <circle cx="116" cy="87" r="1" fill="#E9B171"/>
                            <circle cx="116" cy="117" r="1" fill="#E9B171"/>
                            <circle cx="156" cy="17" r="1" fill="#E9B171"/>
                            <circle cx="156" cy="57" r="1" fill="#E9B171"/>
                            <circle cx="156" cy="37" r="1" fill="#E9B171"/>
                            <circle cx="156" cy="77" r="1" fill="#E9B171"/>
                            <circle cx="156" cy="107" r="1" fill="#E9B171"/>
                            <circle cx="156" cy="27" r="1" fill="#E9B171"/>
                            <circle cx="156" cy="67" r="1" fill="#E9B171"/>
                            <circle cx="156" cy="97" r="1" fill="#E9B171"/>
                            <circle cx="156" cy="47" r="1" fill="#E9B171"/>
                            <circle cx="156" cy="87" r="1" fill="#E9B171"/>
                            <circle cx="156" cy="117" r="1" fill="#E9B171"/>
                            <circle cx="196" cy="17" r="1" fill="#E9B171"/>
                            <circle cx="196" cy="57" r="1" fill="#E9B171"/>
                            <circle cx="196" cy="37" r="1" fill="#E9B171"/>
                            <circle cx="196" cy="77" r="1" fill="#E9B171"/>
                            <circle cx="196" cy="107" r="1" fill="#E9B171"/>
                            <circle cx="196" cy="27" r="1" fill="#E9B171"/>
                            <circle cx="196" cy="67" r="1" fill="#E9B171"/>
                            <circle cx="196" cy="97" r="1" fill="#E9B171"/>
                            <circle cx="196" cy="47" r="1" fill="#E9B171"/>
                            <circle cx="196" cy="87" r="1" fill="#E9B171"/>
                            <circle cx="196" cy="117" r="1" fill="#E9B171"/>
                            <circle cx="136" cy="17" r="1" fill="#E9B171"/>
                            <circle cx="136" cy="57" r="1" fill="#E9B171"/>
                            <circle cx="136" cy="37" r="1" fill="#E9B171"/>
                            <circle cx="136" cy="77" r="1" fill="#E9B171"/>
                            <circle cx="136" cy="107" r="1" fill="#E9B171"/>
                            <circle cx="136" cy="27" r="1" fill="#E9B171"/>
                            <circle cx="136" cy="67" r="1" fill="#E9B171"/>
                            <circle cx="136" cy="97" r="1" fill="#E9B171"/>
                            <circle cx="136" cy="47" r="1" fill="#E9B171"/>
                            <circle cx="136" cy="87" r="1" fill="#E9B171"/>
                            <circle cx="136" cy="117" r="1" fill="#E9B171"/>
                            <circle cx="176" cy="17" r="1" fill="#E9B171"/>
                            <circle cx="176" cy="57" r="1" fill="#E9B171"/>
                            <circle cx="176" cy="37" r="1" fill="#E9B171"/>
                            <circle cx="176" cy="77" r="1" fill="#E9B171"/>
                            <circle cx="176" cy="107" r="1" fill="#E9B171"/>
                            <circle cx="176" cy="27" r="1" fill="#E9B171"/>
                            <circle cx="176" cy="67" r="1" fill="#E9B171"/>
                            <circle cx="176" cy="97" r="1" fill="#E9B171"/>
                            <circle cx="176" cy="47" r="1" fill="#E9B171"/>
                            <circle cx="176" cy="87" r="1" fill="#E9B171"/>
                            <circle cx="176" cy="117" r="1" fill="#E9B171"/>
                            <circle cx="216" cy="17" r="1" fill="#E9B171"/>
                            <circle cx="216" cy="57" r="1" fill="#E9B171"/>
                            <circle cx="216" cy="37" r="1" fill="#E9B171"/>
                            <circle cx="216" cy="77" r="1" fill="#E9B171"/>
                            <circle cx="216" cy="107" r="1" fill="#E9B171"/>
                            <circle cx="216" cy="27" r="1" fill="#E9B171"/>
                            <circle cx="216" cy="67" r="1" fill="#E9B171"/>
                            <circle cx="216" cy="97" r="1" fill="#E9B171"/>
                            <circle cx="216" cy="47" r="1" fill="#E9B171"/>
                            <circle cx="216" cy="87" r="1" fill="#E9B171"/>
                            <circle cx="216" cy="117" r="1" fill="#E9B171"/>
                            <circle cx="126" cy="17" r="1" fill="#E9B171"/>
                            <circle cx="126" cy="57" r="1" fill="#E9B171"/>
                            <circle cx="126" cy="37" r="1" fill="#E9B171"/>
                            <circle cx="126" cy="77" r="1" fill="#E9B171"/>
                            <circle cx="126" cy="107" r="1" fill="#E9B171"/>
                            <circle cx="126" cy="27" r="1" fill="#E9B171"/>
                            <circle cx="126" cy="67" r="1" fill="#E9B171"/>
                            <circle cx="126" cy="97" r="1" fill="#E9B171"/>
                            <circle cx="126" cy="47" r="1" fill="#E9B171"/>
                            <circle cx="126" cy="87" r="1" fill="#E9B171"/>
                            <circle cx="126" cy="117" r="1" fill="#E9B171"/>
                            <circle cx="166" cy="17" r="1" fill="#E9B171"/>
                            <circle cx="166" cy="57" r="1" fill="#E9B171"/>
                            <circle cx="166" cy="37" r="1" fill="#E9B171"/>
                            <circle cx="166" cy="77" r="1" fill="#E9B171"/>
                            <circle cx="166" cy="107" r="1" fill="#E9B171"/>
                            <circle cx="166" cy="27" r="1" fill="#E9B171"/>
                            <circle cx="166" cy="67" r="1" fill="#E9B171"/>
                            <circle cx="166" cy="97" r="1" fill="#E9B171"/>
                            <circle cx="166" cy="47" r="1" fill="#E9B171"/>
                            <circle cx="166" cy="87" r="1" fill="#E9B171"/>
                            <circle cx="166" cy="117" r="1" fill="#E9B171"/>
                            <circle cx="206" cy="17" r="1" fill="#E9B171"/>
                            <circle cx="206" cy="57" r="1" fill="#E9B171"/>
                            <circle cx="206" cy="37" r="1" fill="#E9B171"/>
                            <circle cx="206" cy="77" r="1" fill="#E9B171"/>
                            <circle cx="206" cy="107" r="1" fill="#E9B171"/>
                            <circle cx="206" cy="27" r="1" fill="#E9B171"/>
                            <circle cx="206" cy="67" r="1" fill="#E9B171"/>
                            <circle cx="206" cy="97" r="1" fill="#E9B171"/>
                            <circle cx="206" cy="47" r="1" fill="#E9B171"/>
                            <circle cx="206" cy="87" r="1" fill="#E9B171"/>
                            <circle cx="206" cy="117" r="1" fill="#E9B171"/>
                            <circle cx="146" cy="17" r="1" fill="#E9B171"/>
                            <circle cx="146" cy="57" r="1" fill="#E9B171"/>
                            <circle cx="146" cy="37" r="1" fill="#E9B171"/>
                            <circle cx="146" cy="77" r="1" fill="#E9B171"/>
                            <circle cx="146" cy="107" r="1" fill="#E9B171"/>
                            <circle cx="146" cy="27" r="1" fill="#E9B171"/>
                            <circle cx="146" cy="67" r="1" fill="#E9B171"/>
                            <circle cx="146" cy="97" r="1" fill="#E9B171"/>
                            <circle cx="146" cy="47" r="1" fill="#E9B171"/>
                            <circle cx="146" cy="87" r="1" fill="#E9B171"/>
                            <circle cx="146" cy="117" r="1" fill="#E9B171"/>
                            <circle cx="186" cy="17" r="1" fill="#E9B171"/>
                            <circle cx="186" cy="57" r="1" fill="#E9B171"/>
                            <circle cx="186" cy="37" r="1" fill="#E9B171"/>
                            <circle cx="186" cy="77" r="1" fill="#E9B171"/>
                            <circle cx="186" cy="107" r="1" fill="#E9B171"/>
                            <circle cx="186" cy="27" r="1" fill="#E9B171"/>
                            <circle cx="186" cy="67" r="1" fill="#E9B171"/>
                            <circle cx="186" cy="97" r="1" fill="#E9B171"/>
                            <circle cx="186" cy="47" r="1" fill="#E9B171"/>
                            <circle cx="186" cy="87" r="1" fill="#E9B171"/>
                            <circle cx="186" cy="117" r="1" fill="#E9B171"/>
                            <circle cx="226" cy="17" r="1" fill="#E9B171"/>
                            <circle cx="226" cy="57" r="1" fill="#E9B171"/>
                            <circle cx="226" cy="37" r="1" fill="#E9B171"/>
                            <circle cx="226" cy="77" r="1" fill="#E9B171"/>
                            <circle cx="226" cy="107" r="1" fill="#E9B171"/>
                            <circle cx="226" cy="27" r="1" fill="#E9B171"/>
                            <circle cx="226" cy="67" r="1" fill="#E9B171"/>
                            <circle cx="226" cy="97" r="1" fill="#E9B171"/>
                            <circle cx="226" cy="47" r="1" fill="#E9B171"/>
                            <circle cx="226" cy="87" r="1" fill="#E9B171"/>
                            <circle cx="226" cy="117" r="1" fill="#E9B171"/>
                            <circle cx="533" cy="330" r="1" fill="#48EDDD"/>
                            <circle cx="533" cy="370" r="1" fill="#48EDDD"/>
                            <circle cx="533" cy="350" r="1" fill="#48EDDD"/>
                            <circle cx="533" cy="390" r="1" fill="#48EDDD"/>
                            <circle cx="533" cy="420" r="1" fill="#48EDDD"/>
                            <circle cx="533" cy="340" r="1" fill="#48EDDD"/>
                            <circle cx="533" cy="380" r="1" fill="#48EDDD"/>
                            <circle cx="533" cy="410" r="1" fill="#48EDDD"/>
                            <circle cx="533" cy="360" r="1" fill="#48EDDD"/>
                            <circle cx="533" cy="400" r="1" fill="#48EDDD"/>
                            <circle cx="533" cy="430" r="1" fill="#48EDDD"/>
                            <circle cx="573" cy="330" r="1" fill="#48EDDD"/>
                            <circle cx="573" cy="370" r="1" fill="#48EDDD"/>
                            <circle cx="573" cy="350" r="1" fill="#48EDDD"/>
                            <circle cx="573" cy="390" r="1" fill="#48EDDD"/>
                            <circle cx="573" cy="420" r="1" fill="#48EDDD"/>
                            <circle cx="573" cy="340" r="1" fill="#48EDDD"/>
                            <circle cx="573" cy="380" r="1" fill="#48EDDD"/>
                            <circle cx="573" cy="410" r="1" fill="#48EDDD"/>
                            <circle cx="573" cy="360" r="1" fill="#48EDDD"/>
                            <circle cx="573" cy="400" r="1" fill="#48EDDD"/>
                            <circle cx="573" cy="430" r="1" fill="#48EDDD"/>
                            <circle cx="613" cy="330" r="1" fill="#48EDDD"/>
                            <circle cx="613" cy="370" r="1" fill="#48EDDD"/>
                            <circle cx="613" cy="350" r="1" fill="#48EDDD"/>
                            <circle cx="613" cy="390" r="1" fill="#48EDDD"/>
                            <circle cx="613" cy="420" r="1" fill="#48EDDD"/>
                            <circle cx="613" cy="340" r="1" fill="#48EDDD"/>
                            <circle cx="613" cy="380" r="1" fill="#48EDDD"/>
                            <circle cx="613" cy="410" r="1" fill="#48EDDD"/>
                            <circle cx="613" cy="360" r="1" fill="#48EDDD"/>
                            <circle cx="613" cy="400" r="1" fill="#48EDDD"/>
                            <circle cx="613" cy="430" r="1" fill="#48EDDD"/>
                            <circle cx="553" cy="330" r="1" fill="#48EDDD"/>
                            <circle cx="553" cy="370" r="1" fill="#48EDDD"/>
                            <circle cx="553" cy="350" r="1" fill="#48EDDD"/>
                            <circle cx="553" cy="390" r="1" fill="#48EDDD"/>
                            <circle cx="553" cy="420" r="1" fill="#48EDDD"/>
                            <circle cx="553" cy="340" r="1" fill="#48EDDD"/>
                            <circle cx="553" cy="380" r="1" fill="#48EDDD"/>
                            <circle cx="553" cy="410" r="1" fill="#48EDDD"/>
                            <circle cx="553" cy="360" r="1" fill="#48EDDD"/>
                            <circle cx="553" cy="400" r="1" fill="#48EDDD"/>
                            <circle cx="553" cy="430" r="1" fill="#48EDDD"/>
                            <circle cx="593" cy="330" r="1" fill="#48EDDD"/>
                            <circle cx="593" cy="370" r="1" fill="#48EDDD"/>
                            <circle cx="593" cy="350" r="1" fill="#48EDDD"/>
                            <circle cx="593" cy="390" r="1" fill="#48EDDD"/>
                            <circle cx="593" cy="420" r="1" fill="#48EDDD"/>
                            <circle cx="593" cy="340" r="1" fill="#48EDDD"/>
                            <circle cx="593" cy="380" r="1" fill="#48EDDD"/>
                            <circle cx="593" cy="410" r="1" fill="#48EDDD"/>
                            <circle cx="593" cy="360" r="1" fill="#48EDDD"/>
                            <circle cx="593" cy="400" r="1" fill="#48EDDD"/>
                            <circle cx="593" cy="430" r="1" fill="#48EDDD"/>
                            <circle cx="633" cy="330" r="1" fill="#48EDDD"/>
                            <circle cx="633" cy="370" r="1" fill="#48EDDD"/>
                            <circle cx="633" cy="350" r="1" fill="#48EDDD"/>
                            <circle cx="633" cy="390" r="1" fill="#48EDDD"/>
                            <circle cx="633" cy="420" r="1" fill="#48EDDD"/>
                            <circle cx="633" cy="340" r="1" fill="#48EDDD"/>
                            <circle cx="633" cy="380" r="1" fill="#48EDDD"/>
                            <circle cx="633" cy="410" r="1" fill="#48EDDD"/>
                            <circle cx="633" cy="360" r="1" fill="#48EDDD"/>
                            <circle cx="633" cy="400" r="1" fill="#48EDDD"/>
                            <circle cx="633" cy="430" r="1" fill="#48EDDD"/>
                            <circle cx="543" cy="330" r="1" fill="#48EDDD"/>
                            <circle cx="543" cy="370" r="1" fill="#48EDDD"/>
                            <circle cx="543" cy="350" r="1" fill="#48EDDD"/>
                            <circle cx="543" cy="390" r="1" fill="#48EDDD"/>
                            <circle cx="543" cy="420" r="1" fill="#48EDDD"/>
                            <circle cx="543" cy="340" r="1" fill="#48EDDD"/>
                            <circle cx="543" cy="380" r="1" fill="#48EDDD"/>
                            <circle cx="543" cy="410" r="1" fill="#48EDDD"/>
                            <circle cx="543" cy="360" r="1" fill="#48EDDD"/>
                            <circle cx="543" cy="400" r="1" fill="#48EDDD"/>
                            <circle cx="543" cy="430" r="1" fill="#48EDDD"/>
                            <circle cx="583" cy="330" r="1" fill="#48EDDD"/>
                            <circle cx="583" cy="370" r="1" fill="#48EDDD"/>
                            <circle cx="583" cy="350" r="1" fill="#48EDDD"/>
                            <circle cx="583" cy="390" r="1" fill="#48EDDD"/>
                            <circle cx="583" cy="420" r="1" fill="#48EDDD"/>
                            <circle cx="583" cy="340" r="1" fill="#48EDDD"/>
                            <circle cx="583" cy="380" r="1" fill="#48EDDD"/>
                            <circle cx="583" cy="410" r="1" fill="#48EDDD"/>
                            <circle cx="583" cy="360" r="1" fill="#48EDDD"/>
                            <circle cx="583" cy="400" r="1" fill="#48EDDD"/>
                            <circle cx="583" cy="430" r="1" fill="#48EDDD"/>
                            <circle cx="623" cy="330" r="1" fill="#48EDDD"/>
                            <circle cx="623" cy="370" r="1" fill="#48EDDD"/>
                            <circle cx="623" cy="350" r="1" fill="#48EDDD"/>
                            <circle cx="623" cy="390" r="1" fill="#48EDDD"/>
                            <circle cx="623" cy="420" r="1" fill="#48EDDD"/>
                            <circle cx="623" cy="340" r="1" fill="#48EDDD"/>
                            <circle cx="623" cy="380" r="1" fill="#48EDDD"/>
                            <circle cx="623" cy="410" r="1" fill="#48EDDD"/>
                            <circle cx="623" cy="360" r="1" fill="#48EDDD"/>
                            <circle cx="623" cy="400" r="1" fill="#48EDDD"/>
                            <circle cx="623" cy="430" r="1" fill="#48EDDD"/>
                            <circle cx="563" cy="330" r="1" fill="#48EDDD"/>
                            <circle cx="563" cy="370" r="1" fill="#48EDDD"/>
                            <circle cx="563" cy="350" r="1" fill="#48EDDD"/>
                            <circle cx="563" cy="390" r="1" fill="#48EDDD"/>
                            <circle cx="563" cy="420" r="1" fill="#48EDDD"/>
                            <circle cx="563" cy="340" r="1" fill="#48EDDD"/>
                            <circle cx="563" cy="380" r="1" fill="#48EDDD"/>
                            <circle cx="563" cy="410" r="1" fill="#48EDDD"/>
                            <circle cx="563" cy="360" r="1" fill="#48EDDD"/>
                            <circle cx="563" cy="400" r="1" fill="#48EDDD"/>
                            <circle cx="563" cy="430" r="1" fill="#48EDDD"/>
                            <circle cx="603" cy="330" r="1" fill="#48EDDD"/>
                            <circle cx="603" cy="370" r="1" fill="#48EDDD"/>
                            <circle cx="603" cy="350" r="1" fill="#48EDDD"/>
                            <circle cx="603" cy="390" r="1" fill="#48EDDD"/>
                            <circle cx="603" cy="420" r="1" fill="#48EDDD"/>
                            <circle cx="603" cy="340" r="1" fill="#48EDDD"/>
                            <circle cx="603" cy="380" r="1" fill="#48EDDD"/>
                            <circle cx="603" cy="410" r="1" fill="#48EDDD"/>
                            <circle cx="603" cy="360" r="1" fill="#48EDDD"/>
                            <circle cx="603" cy="400" r="1" fill="#48EDDD"/>
                            <circle cx="603" cy="430" r="1" fill="#48EDDD"/>
                            <circle cx="643" cy="330" r="1" fill="#48EDDD"/>
                            <circle cx="643" cy="370" r="1" fill="#48EDDD"/>
                            <circle cx="643" cy="350" r="1" fill="#48EDDD"/>
                            <circle cx="643" cy="390" r="1" fill="#48EDDD"/>
                            <circle cx="643" cy="420" r="1" fill="#48EDDD"/>
                            <circle cx="643" cy="340" r="1" fill="#48EDDD"/>
                            <circle cx="643" cy="380" r="1" fill="#48EDDD"/>
                            <circle cx="643" cy="410" r="1" fill="#48EDDD"/>
                            <circle cx="643" cy="360" r="1" fill="#48EDDD"/>
                            <circle cx="643" cy="400" r="1" fill="#48EDDD"/>
                            <circle cx="643" cy="430" r="1" fill="#48EDDD"/>
                            </svg>
                            <span className="photo" aria-label="Photo of Fabian" role="img"></span>
                        </figure>
                    </div>
            </section>
    )
}

export default HomeSection;