interface props {
    width: string,
    height: string
}

const ICalendar = ({width,height}:props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 64 64" id="calendar">
            <rect width="60" height="52" x="2" y="9" fill="none" stroke="#010101" strokeMiterlimit="10"
                  strokeWidth="4"/>
            <line x1="2" x2="62" y1="21.06" y2="21.06" fill="none" stroke="#010101" strokeMiterlimit="10"
                  strokeWidth="4"/>
            <line x1="24" x2="28" y1="29" y2="29" fill="none" stroke="#010101" strokeMiterlimit="10" strokeWidth="4"/>
            <line x1="36" x2="40" y1="29" y2="29" fill="none" stroke="#010101" strokeMiterlimit="10" strokeWidth="4"/>
            <line x1="48" x2="52" y1="29" y2="29" fill="none" stroke="#010101" strokeMiterlimit="10" strokeWidth="4"/>
            <line x1="48" x2="52" y1="37" y2="37" fill="none" stroke="#010101" strokeMiterlimit="10" strokeWidth="4"/>
            <line x1="36" x2="40" y1="37" y2="37" fill="none" stroke="#010101" strokeMiterlimit="10" strokeWidth="4"/>
            <line x1="24" x2="28" y1="37" y2="37" fill="none" stroke="#010101" strokeMiterlimit="10" strokeWidth="4"/>
            <line x1="12" x2="16" y1="37" y2="37" fill="none" stroke="#010101" strokeMiterlimit="10" strokeWidth="4"/>
            <line x1="12" x2="16" y1="45" y2="45" fill="none" stroke="#010101" strokeMiterlimit="10" strokeWidth="4"/>
            <line x1="24" x2="28" y1="45" y2="45" fill="none" stroke="#010101" strokeMiterlimit="10" strokeWidth="4"/>
            <line x1="36" x2="40" y1="45" y2="45" fill="none" stroke="#010101" strokeMiterlimit="10" strokeWidth="4"/>
            <line x1="48" x2="52" y1="45" y2="45" fill="none" stroke="#010101" strokeMiterlimit="10" strokeWidth="4"/>
            <line x1="12" x2="16" y1="53" y2="53" fill="none" stroke="#010101" strokeMiterlimit="10" strokeWidth="4"/>
            <line x1="24" x2="28" y1="53" y2="53" fill="none" stroke="#010101" strokeMiterlimit="10" strokeWidth="4"/>
            <line x1="36" x2="40" y1="53" y2="53" fill="none" stroke="#010101" strokeMiterlimit="10" strokeWidth="4"/>
            <line x1="14" x2="14" y1="3" y2="15" fill="none" stroke="#010101" strokeMiterlimit="10" strokeWidth="4"/>
            <line x1="50" x2="50" y1="3" y2="15" fill="none" stroke="#010101" strokeMiterlimit="10" strokeWidth="4"/>
        </svg>
    );
};

export default ICalendar;
