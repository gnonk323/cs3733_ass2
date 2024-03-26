import Table from "./components/Nate/Table.tsx";
import Form from "./components/Nate/Form.tsx";
import Intro from "./components/Nate/Intro.tsx";
import Title from "./components/Nate/Title.tsx";
import List from "./components/Nate/List.tsx";
import './style.css';

function Nate(){
    return(
        <div className="nateContainer">
            <Title />
            <hr />
            <Intro name={"Nate Schneider"} />
            <List />
            <Table />
            <br />
            <Form />
        </div>
    );
}

export default Nate;