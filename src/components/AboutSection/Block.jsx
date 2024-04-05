import '../../styles/components/AboutSection/Block.css'
import BlockBar from './BlockBar'
import BlockHeader from './BlockHeading'
import BlockContent from './BlockContent'

function Block(props) {
    return ( 
        <article className='block'>
            <BlockHeader headerText={props.headerText}/>
            <div className='flex justify-center'>
                <BlockBar />
                <BlockContent contentHeading={props.contentHeading} period={props.period} content={props.content}/>
            </div>
        </article>
    );
}

export default Block;