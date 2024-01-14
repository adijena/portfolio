const EducationCard = ({ name, title, score, stype, year }) => {
  return (
    <div className="p-6 rounded-2xl bg-[#353839] flex justify-between m-6">
      <div>
        <p className="font-bold text-lg">{name}</p>
        <p className="italic text-xs">{title}</p>
      </div>
      <div className="flex flex-col items-end justify-center">
        <p className="font-medium text-sm">
          {stype} of {score}
        </p>
        <p className="font-thin text-sm">{year}</p>
      </div>
    </div>
  );
};
export default EducationCard;
