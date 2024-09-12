function SingleTriangle(props) {
    return ( 
        <svg width="27" height="23" viewBox={props.viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
            <g transform={props.rotation}>
                <path d="M1.34806 22.4724L13.4724 1.47241L25.5968 22.4724L1.34806 22.4724Z" stroke="#C4421A"/>
            </g>
        </svg> 
    );
}

export default SingleTriangle;