import '../../styles/components/AboutSection/BlockHeading.css'

function BlockHeader(props) {
    return ( 
        <div className='blockHeader'>
            <span className='text-2'>{props.headerText}</span>
        </div>
    );
}

export default BlockHeader;