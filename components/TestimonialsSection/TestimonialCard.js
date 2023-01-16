import style from "./TestimonialCard.module.css";

const TestimonialCard = ({ client }) => {
  return (
    <div key={client?.id} className={style.container}>

      <div className={style.innerContainer}>

        {/* Introductory Section */}
        <div className={style.introductory}>
          <img src={client?.dp} className={style.dp} />
          <div>
            <p className={style.name}>{client?.name}</p>
            <p className={style.desig}>{client?.designation}</p>
          </div>
        </div>
        <div>
          <img src="/Images/clientsPictures/cottation.png" className="w-0 sm:w-16 h-12" />
        </div>
      </div>

      <p className=" text-lg ">{client?.comment}</p>
    </div>
  );
};
export default TestimonialCard;
