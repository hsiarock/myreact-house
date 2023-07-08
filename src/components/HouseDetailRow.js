
export const HouseDetailRow = ({house}) => {
    console.log("HouseDetailRow component");

    const address = house.onmarket ? house.address : 
        <span style={ { color: 'red'}}>
            {house.address}
        </span>;

    return (
        <tr>
            <td>{address}</td>
            <td>{house.price}</td>
        </tr>
    );
}