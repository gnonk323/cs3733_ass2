import '../../style.css';
function Table() {
    return (
        <>
            <table>
                <tr>
                    <th>Continent</th>
                    <th>Country</th>
                    <th>State</th>
                    <th>City</th>
                </tr>
                <tr>
                    <td>North America</td>
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