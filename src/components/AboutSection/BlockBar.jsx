function BlockBar() {
    const aboutBar = () => (
        <svg width="18" height="330" viewBox="0 0 18 330" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="9" cy="9" r="8.5" stroke="#C4421A"/>
            <circle cx="9" cy="321" r="8.5" stroke="#C4421A"/>
            <line x1="9" y1="17" x2="9" y2="313" stroke="#555555" stroke-width="2"/>
        </svg>
    )
    
    return ( 
        <div id="blockBar" className='flex mt-32 mr-5 items-center'>
            {aboutBar()}
        </div>
    );
}

export default BlockBar;