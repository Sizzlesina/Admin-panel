import { AiOutlineExpand, AiOutlineCompress } from "react-icons/ai";
function FullScreen() {
  return (
    <span className="cursor-pointer p-1 mr-10 md:inline hidden">
      <AiOutlineCompress className="cursor-pointer hidden select-none" />
      <AiOutlineExpand className="inline cursor-pointer select-none" />
    </span>
  );
}

export default FullScreen;
