import "./card.css"

const Card = (prop) => {
  return (
    <div className="hover:cursor-pointer mx-20 md:mx-40 lg:mx-60 my-6 pressedEffect bg-white ">
      <a href={prop.link} target="_blank" rel="noreferrer">
        <p className="font-mono bg-white hover:bg-slate-200 rounded-2xl p-4 border-2 border-black">{prop.text}</p>
      </a>
    </div>
  );
};

export default Card;
