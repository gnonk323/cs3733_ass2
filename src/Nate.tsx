import Table from "./Components/Table.tsx";
import Form from "./Components/Form.tsx";
import Intro from "./Components/Intro.tsx";
import Title from "./Components/Title.tsx";
import List from "./Components/List.tsx";
import './Components/style.css';

function Nate(){
    return(
        <div className="nateContainer">
            <Title />
            <hr />
            <Intro />
            <List />
            <Table />
            <br />
            <Form />
        </div>
    );
}

export default Nate;