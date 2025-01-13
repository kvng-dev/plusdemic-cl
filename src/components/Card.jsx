const Card = ({ icon, heading, text }) => {
  return (
    <div className="p-6 text-center bg-white rounded-lg border-[1px] border-gray-300 py-12">
      <div className="bg-brandWhite p-4 w-fit mx-auto rounded-full">
        <img src={icon} alt="" className="w-12" />
      </div>
      <h4 className="my-6 text-lg font-bold">{heading}</h4>
      <p className="text-gray-400 text-sm">{text}</p>
    </div>
  );
};
export default Card;
