import { useSearchParams } from "react-router-dom";

const SearchParams = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const filterValue = searchParam.get("filter") === "true";
  console.log(filterValue);
  return (
    <>
      {filterValue && <h2 className="true">Filter is True</h2>}
      {!filterValue && <h2 className="false">Filter is False</h2>}
      <div className="search-container">
        <button onClick={() => setSearchParam({ filter: "true" })}>
          Apply filter
        </button>
        <button onClick={() => setSearchParam({ filter: "false" })}>
          Remove filter
        </button>
      </div>
    </>
  );
};
export default SearchParams;
