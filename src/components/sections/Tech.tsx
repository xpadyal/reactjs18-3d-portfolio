import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";

const Tech = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="flex flex-col items-center h-28 w-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <span className="mt-2 text-white text-center">{technology.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
