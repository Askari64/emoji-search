import { ChangeEvent, useState } from "react";
import emojiList from "../emojisList.json";
import CardContainer from "./CardContainer";

function Search() {
  const [input, setInput] = useState("");
  const [searchResult, setSearchResult] = useState<
    { title: string; symbol: string }[]
  >([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const searchFunc = () => {
    let searchedItems = emojiList.filter((emoji) => {
      return emoji.keywords.includes(input.toLocaleLowerCase());
    });
    setSearchResult(searchedItems);
  };

  return (
    <div className="flex justify-center flex-col items-center font-serif font-normal tracking-normal">
      <div>
        <input
          className="rounded-lg border-2 border-gray-300 mt-4 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          type="search"
          placeholder="smiley face"
          value={input}
          onChange={handleChange}
        />
        <button
          className="bg-blue-600 text-white rounded-lg px-4 py-2 ml-2 hover:bg-blue-700 transition-colors duration-300"
          onClick={searchFunc}
        >
          Search
        </button>
      </div>
      <div className="justify-center items-center mt-3">
        {searchResult.map((emoji) => (
          <CardContainer
            key={emoji.title}
            title={emoji.title}
            symbol={emoji.symbol}
          />
        ))}
      </div>
    </div>
  );
}

export default Search;
