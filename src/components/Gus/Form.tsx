import '../../App.css'

function Form() {
    return (
        <>
            <form>
                <label htmlFor="fname">First Name:</label><br/>
                <input type="text" id="fname"/><br/>
                <label htmlFor="lname">Last Name:</label><br/>
                <input type="text" id="lname"/><br/>

                <br/>

                <input type="checkbox" id="ski" name="ski" value="SKI"/>
                <label htmlFor="ski">I like to ski</label><br/>
                <input type="checkbox" id="code" name="code" value="CODE"/>
                <label htmlFor="code">I like to code</label><br/>

                <br/>

                <label>Favorite programming language:</label><br/>
                <input type="radio" id="java" name="fav_language" value="JAVA"/>
                <label htmlFor="java">Java</label><br/>
                <input type="radio" id="python" name="fav_language" value="PYTHON"/>
                <label htmlFor="python">Python</label><br/>
                <input type="radio" id="c/c++" name="fav_language" value="C/C++"/>
                <label htmlFor="c/c++">C/C++</label><br/>

                <br/>

                <input type="submit"/>
            </form>
        </>
    );
}

export default Form