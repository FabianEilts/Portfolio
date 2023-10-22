import './App.css'
import './SocialMedia.css'

const SocialMedia = () => {
    return (
        <div className='absolute bottom-3 mx-14'>
            <ul className='text-center'>
                <li className='py-3'><a href="https://github.com/FabianEilts"><img className='w-7 h-7' src="/github.svg" /></a></li>
                <li className='py-3'><a href="https://www.instagram.com/fabi.eilts"><img className='w-7 h-7' src="/instagram.svg" /></a></li>
                <li className='py-3'><a href="#"><img className='w-7 h-7' src="/twitter.svg" /></a></li>
                <li id='strich'></li>
            </ul>
        </div>
    )
}

export default SocialMedia;