import Image from "next/image";
import "./style.css";
import WhiteCard from "./whiteCard/WhiteCard";

const EventOfTheMonth = () => {
  return (
    <div className="monthContainer">
      <div className="titleCard">
        <h1>
          Event of <br />
          the month
        </h1>
        <Image src="/badge.png" alt="" height={70} width={70} />
      </div>
      <WhiteCard />
    </div>
  );
};

export default EventOfTheMonth;
