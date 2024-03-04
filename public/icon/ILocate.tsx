

interface props{
    width:string,
    height:string
}
const ILocate = ({height,width}:props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
             contentScriptType="text/ecmascript" contentStyleType="text/css" enableBackground="new 0 0 2048 2048"
             height={height} id="Layer_1" preserveAspectRatio="xMidYMid meet" version="1.1" viewBox="0.0 0 1024.0 2048"
             width={width} xmlSpace="preserve" zoomAndPan="magnify"><path d="M768,768c0-70.667-25-131-75-181s-110.333-75-181-75s-131,25-181,75s-75,110.333-75,181s25,131,75,181s110.333,75,181,75  s131-25,181-75S768,838.667,768,768z M1024,768c0,72.667-11,132.333-33,179l-364,774c-10.667,22-26.5,39.333-47.5,52  s-43.5,19-67.5,19s-46.5-6.333-67.5-19s-36.5-30-46.5-52L33,947C11,900.333,0,840.667,0,768c0-141.333,50-262,150-362  s220.667-150,362-150s262,50,362,150S1024,626.667,1024,768z"/></svg>
    );
};

export default ILocate;
