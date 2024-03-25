import '../../App.css'

function Intro(props: {name: string}) {
    return (
        <>
            <p>My name is {props.name}, I am a junior computer science major and data science minor.</p>
            <p>I have been skiing since I was a little kid.</p>
        </>
    );
}

export default Intro