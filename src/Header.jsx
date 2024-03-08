import './App.css'

const Header = () => {
    return (
            <header>
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
                    <div className='flex gap-10 place-items-center'>
                        <a href=""><span className="text-secondaryColor glow-effect">01. </span>About</a>
                        <a href=""><span className="text-secondaryColor glow-effect">02. </span>Skills</a>
                        <a href=""><span className="text-secondaryColor glow-effect">03. </span>Projects</a>
                        <a href=""><span className="text-secondaryColor glow-effect">04. </span>Contact</a>
                    </div>
                </nav>
            </header>
    )
}

export default Header;