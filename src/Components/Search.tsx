import { ChangeEvent, useState } from "react";
import emojiList from "../emojisList.json";
import CardContainer from "./CardContainer";

function Search() {
  const [input, setInput] = useState("");
  const [searchResult, setSearchResult] = useState<{ title: string; symbol: string }[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const searchFunc = () => {
    let searchedItems = emojiList.filter((emoji) => {
      return emoji.keywords.includes(input);
    });
    setSearchResult(searchedItems);
  };
  

  return (
    <div className="flex justify-center flex-col items-center font-serif font-normal tracking-normal">
      <div>
        <input
          className="rounded border-black mt-4"
          type="search"
          placeholder="smiley face"
          value={input}
          onChange={handleChange}
        />
        <button onClick={searchFunc}>Search</button>
      </div>
      <div>
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
