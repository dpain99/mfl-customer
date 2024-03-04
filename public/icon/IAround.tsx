interface props{
    width:string,
    height:string
}

const IAround = ({width,height}:props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width={width} height={height} viewBox="0 0 24.00 24.00"
             id="turn-around-left-top-direction-square-2" data-name="Flat Line" className="icon2 flat-line">

            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>

            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC"
               strokeWidth="2"/>

            <g id="SVGRepo_iconCarrier">

                <rect id="secondary" x="3" y="3" width="18" height="18" rx="1" transform="translate(24) rotate(90)"
                      style={{fill: "#ffffff", strokeWidth:1}}/>

                <polyline id="primary" points="9 12 7 10 9 8"
                          style={{fill: "none", stroke: "#000000", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth:1}}/>

                <path id="primary-2" data-name="primary" d="M7,10h7a3,3,0,0,1,3,3h0a3,3,0,0,1-3,3H13"
                      style={{fill: "none", stroke: "#000000", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth:1}}/>

                <rect id="primary-3" data-name="primary" x="3" y="3" width="18" height="18" rx="1"
                      transform="translate(24) rotate(90)"
                      style={{fill: "none", stroke: "#000000", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth:1}}></rect>

            </g>

        </svg>
    );
};


export default IAround;
