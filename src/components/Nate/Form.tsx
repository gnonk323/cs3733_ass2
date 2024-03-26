import 'react';
import '../../style.css';
function Form() {
    return (
        <>
            <form>
                <label id="fname">First name:</label>
                <input type="text" id="fname" name="fname" /><br/>
                <label id="lname">Last name:</label>
                <input type="text" id="lname" name="lname"/><br/>
                <input type="checkbox" id="drive" value="I like to drive"/>
                <label id="drive"> I like to drive</label>
                <input type="checkbox" id="sail" value="I like to sail"/>
                <label id="sail"> I like to sail</label><br/>
                <input type="radio" id="colorB" name="favColor" value="Blue"/>
                <label id="colorB">Blue</label>
                <input type="radio" id="colorG" name="favColor" value="Green"/>
                <label id="colorG">Green</label>
                <input type="radio" id="colorP" name="favColor" value="Purple"/>
                <label id="colorP">Purple</label><br/>
                <input type="submit" value="Submit"/>
            </form>
        </>
    );
}

export default Form