import './App.css'

const Header = () => {
    return (
            <header>
                <nav className='flex justify-between mx-12 my-5'>
                    <div id="logo">
                        <img className='w-14 h-14' src="/ExampleLogo.jpg" />
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