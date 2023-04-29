import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({ weight: ["400", "700"], subsets: ["latin"] });

const TopDiv = ({nick1, setNick1, nick2, setNick2, handleClick}) => {
  return (
    <div className={`topDiv ${comfortaa.className}`}>
        <span>Steam Oyun Karşılaştırma</span>
        <div className="inputDiv">
          <input
            type="text"
            value={nick1}
            onChange={(e) => setNick1(e.target.value)}
          />
          <input
            type="text"
            value={nick2}
            onChange={(e) => setNick2(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Getir</button>
      </div>
  )
}

export default TopDiv