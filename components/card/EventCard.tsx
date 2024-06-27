import Image from "next/image";
import "./style.css";

const EventCard = () => {
  return (
    <>
      <div className="eventCard">
        <div className="top">
          <div className="topDesc">
            <h1>Web Development</h1>
            <div className="topDate">Thu 2 Nov 2023, 12:00am</div>
          </div>
          <div className="category">
            <span>Category: AI</span>
          </div>
        </div>

        <div className="mid">
          <h1>Description</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Massa fermentum suspendisse
            nec id turpis et. Diam lacus rutrum nec habitasse ridiculus
            malesuada amet. Consectetur ultrices netus sed et vitae euismod. Non
            volutpat justo morbi faucibus. Lectus pulvinar aliquet vel luctus
            lectus. Gravida ultricies est eget aliquet odio blandit eget.
            Viverra nunc est nunc quam tincidunt. Arcu duis cras in mollis et.
            At amet integer sit commodo elementum consequat facilisi nunc mi.
            Vitae ac et et vel.
          </p>
        </div>

        <div className="end">
          <Image src="/map.png" height={32} width={32} alt="" />
          <span>Bahria Intellectual Village</span>
        </div>
      </div>
    </>
  );
};

export default EventCard;
