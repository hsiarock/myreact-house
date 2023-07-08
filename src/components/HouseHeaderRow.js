
export const HouseHeaderRow = ( {zip}) => {
    console.log("HouseHeaderRow component");

    return (
        <tr>
            <th colSpan="2">
                {zip}
            </th>
        </tr>
    );
}
