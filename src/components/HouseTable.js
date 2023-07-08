import { HouseDetailRow } from "./HouseDetailRow.js";
import { HouseHeaderRow } from "./HouseHeaderRow.js";

export const HouseTable = ({houses}) => {
    console.log("HouseTable component");
    
    const rows = [];
    let lastZip = null;

    houses.forEach((house) => {
        if (house.zip !== lastZip) {
            rows.push(
                <HouseHeaderRow 
                    zip = {house.zip}
                    key = {house.zip} />
            );
        }

        rows.push(
            <HouseDetailRow house={house} key={house.zip} />
        );
        lastZip = house.zip;
    });

    return (
        <table className="housetable">
            <thead>
                <tr>
                    <th>Address</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}
