import Title from "../home/Title";
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <div>
      <EducationCard name="Veer Surendra Sai University Of Technology" title="Bachelor of Technology, Computer Science and Engineering" score="8.01" stype="CGPA" year="2023"/>
      <EducationCard name="Mahaprabhu Jagannath +2 Science Residential College" title="Intermediate" score="78" stype="Percentage" year="2018"/>
      <EducationCard name="Chilkarani English Medium School" title="Matriculation" score="9.4" stype="CGPA" year="2016"/>
    </div>
  );
};
export default Education;
