import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb} from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap justify-center gap-4 items-center">
        <div>
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="p-4">
          <TbBrandNextjs className="text-7xl " />
        </div>
        <div className="p-4">
          <SiMongodb className="text-7xl text-cyan-500" />
        </div>
        <div className="p-4">
        <SiTailwindcss className="text-7xl text-cyan-500"/>
        </div>
      </div>
    </div>
  );
};
export default Technologies;