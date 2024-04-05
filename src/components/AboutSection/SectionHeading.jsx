function Heading (props) {
    return (
        <article className='sectionHeading'>
            <div id="aboutSection">
                <p className='text-5xl text-gray'>{props.heading}</p>
                <hr className='mt-4' />
            </div>
        </article>
    )
}

export default Heading;