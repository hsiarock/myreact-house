import { HouseTable } from "../components/HouseTable.js";
import { SearchBar } from "../components/SearchBar.js";

export const FilterHouseTable = ({houses}) => {
    console.log("FilterHouseTable component");
    return (
        <div>
            <SearchBar />
            <HouseTable className="housetable" houses = {houses} />
        </div>
    )
}