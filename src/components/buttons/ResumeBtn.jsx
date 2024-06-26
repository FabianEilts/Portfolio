const ResumeBtn = () => {
    const handleResumeClick = () => {
        alert("ResumeBtn");
    }
    
    return (  
        <button id="resumeBtn" onClick={handleResumeClick} className="bg-white text-black h-8 w-36 flex justify-center rounded-lg mt-5 leading-8 items-center">
            Resume
            <svg className="ml-2" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.4800000000000001"></g>
                <g id="SVGRepo_iconCarrier"> 
                <path d="M3 15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15" stroke="#000000" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="#000000" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path> </g>
            </svg>
        </button>
    );
}

export default ResumeBtn;