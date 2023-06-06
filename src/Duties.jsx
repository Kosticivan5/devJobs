import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
const Duties = ({ duties }) => {
  return (
    <div>
      {duties.map((duty) => {
        const id = uuidv4();
        return (
          <div key={id} className="job-desc">
            <MdOutlineKeyboardDoubleArrowRight className="job-icon" />
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Duties;
