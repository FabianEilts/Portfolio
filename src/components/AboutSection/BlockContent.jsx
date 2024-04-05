import '../../styles/components/AboutSection/BlockContent.css'

function BlockContent(props) {
    return ( 
        <div className='blockContent'>
            <p className='text-5xl text-darkGray'>{props.contentHeading}</p>
            <p className='text-2xl mt-3 text-secondaryColor'>
                {props.period}
            </p>
            <p className='text-3xl mt-10 text-gray'>
                {props.content}
            </p>
        </div>
    );
}

export default BlockContent;