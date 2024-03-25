import '../../App.css'

function Table() {
    return (
        <>
            <table>
                <tr>
                    <th>Mountain Name</th>
                    <th>State</th>
                    <th>Vertical Drop</th>
                    <th>Peak Elevation</th>
                </tr>
                <tr>
                    <td>Mount Sunapee</td>
                    <td>New Hampshire</td>
                    <td>1,515 ft</td>
                    <td>2,743 ft</td>
                </tr>
                <tr>
                    <td>Okemo</td>
                    <td>Vermont</td>
                    <td>2,200 ft</td>
                    <td>3,344 ft</td>
                </tr>
                <tr>
                    <td>Stowe</td>
                    <td>Vermont</td>
                    <td>2,360 ft</td>
                    <td>3,719 ft</td>
                </tr>
                <tr>
                    <td>Mount Snow</td>
                    <td>Vermont</td>
                    <td>1,700 ft</td>
                    <td>3,586 ft</td>
                </tr>
                <tr>
                    <td>Grand Targhee</td>
                    <td>Wyoming</td>
                    <td>2,270 ft</td>
                    <td>9,862 ft</td>
                </tr>
                <tr>
                    <td>Park City</td>
                    <td>Utah</td>
                    <td>3,200 ft</td>
                    <td>10,026 ft</td>
                </tr>
            </table>
        </>
    );
}

export default Table