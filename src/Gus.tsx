import Title from "./components/Gus/Title.tsx";
import Intro from "./components/Gus/Intro.tsx";
import List from "./components/Gus/List.tsx";
import Table from "./components/Gus/Table.tsx";
import Form from "./components/Gus/Form.tsx";

function Gus() {
    return (
        <div className={"gusContainer"}>
            <Title />
            <Intro name={"Gus"}/>
            <List />
            <Table />
            <hr/>
            <Form />
        </div>
    );
}

export default Gus