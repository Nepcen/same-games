import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({ weight: ["400", "700"], subsets: ["latin"] });

export default function InputArea({nick1, setNick1, nick2, setNick2, handleClick}) {
  return (
    <div className={`topDiv ${comfortaa.className}`}>
        <span>Steam Game Comparison</span>
        <div className="inputDiv">
          <input
            type="text"
            value={nick1}
            placeholder="a username"
            onChange={(e) => setNick1(e.target.value)}
          />
          <input
            type="text"
            value={nick2}
            placeholder="another username"
            onChange={(e) => setNick2(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Find</button>
        <span className="!text-[14px] opacity-90 text-gray-800">Do not use the Steam profile name. The Steam API works with usernames that appear in the account's URL.</span>
      </div>
  )
}