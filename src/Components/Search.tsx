import { ChangeEvent, useState } from "react"
import emojiList from '../emojisList.json'

function Search() {
    const [input, setInput] = useState("")

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

  return (
    <div className="flex justify-center items-center font-serif font-normal tracking-normal">
        <input className='rounded border-black mt-4' type="search" placeholder="smiley face" value={input} onChange={handleChange} />
        <button>Search</button>
    </div>
  )
}

export default Search