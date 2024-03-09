import './App.css'
import "./styles/Header.css"
import HireMeBtn from './components/buttons/HireMeBtn'

const Header = () => {
    const scrolled = () => {
        window.addEventListener('scroll', function () {
            let header = document.getElementById('header');
            if(window.scrollY > 50){
                header.classList.add('scrolled');
            }else{
                header.classList.remove('scrolled');
            }
        });
    }
    return (
        <header id='header' className='header fixed w-full top-0'>
                <script>{scrolled()}</script>
                <nav className='flex justify-between mx-12 my-5'>
                    <div id="logo">
                    <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="58" height="58" fill="#333333"/>
                        <rect x="33" y="10" width="25" height="7" rx="1" fill="#E9B171"/>
                        <rect y="10" width="25" height="7" rx="1" fill="#E9B171"/>
                        <rect x="3" y="25" width="22" height="7" rx="1" fill="#E9B171"/>
                        <rect y="47" width="19" height="7" rx="1" transform="rotate(-90 0 47)" fill="#E9B171"/>
                        <rect x="33" y="25" width="25" height="7" rx="1" fill="#E9B171"/>
                        <rect x="33" y="40" width="25" height="7" rx="1" fill="#E9B171"/>
                        <rect y="25" width="8" height="8" rx="4" fill="#E9B171"/>
                    </svg>
                    </div>
                    <div className='flex gap-14 place-items-center mr-16'>
                        <a className='text-xl' href="#">About</a>
                        <a className='text-xl' href="#">Skills</a>
                        <a className='text-xl' href="#">Projects</a>
                        <a className='text-xl' href="#">Contact</a>
                        <HireMeBtn />
                    </div>
                </nav>
            </header>
    )
}

export default Header;