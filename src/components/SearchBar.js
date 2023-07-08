
export const SearchBar = () => {
    console.log("SearchBar component");

    return (
        <form>
            <input type="text" placeholder="Search..." />
            <label>
                <input type="checkbox" />
                {' '}
                Only show houses on market
            </label>
        </form>
    );
}