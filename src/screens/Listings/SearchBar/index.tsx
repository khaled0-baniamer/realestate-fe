import SearchBarDesktop from "./SearchBarDesktop";
import SearchBarMobile from "./SearchBarMobile";

const SearchBar: React.FC = () => {
  return (
    <div className=" items-center gap-2 flex flex-wrap ">
      <SearchBarDesktop />
      <SearchBarMobile />
    </div>
  );
};

export default SearchBar;
