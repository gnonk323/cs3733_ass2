import '../../App.css'
function Table() {
    return (
        <>
            <table className="ntable">
                <tr>
                    <th className="nth">Continent</th>
                    <th className="nth">Country</th>
                    <th className="nth">State</th>
                    <th className="nth">City</th>
                </tr>
                <tr>
                    <td className="nth">North America</td>
                    <td>USA</td>
                    <td>Massachusetts</td>
                    <td>Boston</td>
                </tr>
                <tr>
                    <td>South America</td>
                    <td>Brazil</td>
                    <td>Parana</td>
                    <td>Curitiba</td>
                </tr>
                <tr>
                    <td>North America</td>
                    <td>USA</td>
                    <td>Rhode Island</td>
                    <td>Bristol</td>
                </tr>
            </table>
        </>
    );
}

export default Table;