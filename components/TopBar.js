import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="w-[90%] flex flex-row-reverse py-6 gap-4">
      <a
        href="https://github.com/Nepcen/same-games"
        className="flex flex-row items-center justify-center gap-2 text-[#171515] text-[18px] cursor-pointer p-[2px] bg-white border-2 border-black shadow-def m-[3.5px"
      >
        <FaGithubSquare className="w-[36px] h-[36px]" />
      </a>
      <a
        href="https://www.linkedin.com/in/yusufabacik/"
        className="flex flex-row items-center justify-center gap-2 text-[#0e76a8] text-[18px] cursor-pointer p-[2px] bg-white border-2 border-black shadow-def m-[3.5px"
      >
        <FaLinkedin className="w-[36px] h-[36px]" />
      </a>
    </div>
  );
};

export default TopBar;
