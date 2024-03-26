import 'react';
import '../../style.css';
function Intro(props: {name: string}){
    return(
        <>
            <p className="firstParagraph">Hello I am {props.name}! My favorite hobby is skateboarding. I enjoy being active
                and doing tricks. Here are some cool tricks:</p>
        </>
    );
}

export default Intro;