import React from "react";
import Title from "../home/Title";
import { certImgOne, certImgTwo, certImgThree } from "../../assets";
import CertCard from "./CertCard";

const Cert = () => {
  return (
    <div>
      <Title title="Certificates" subTitle="" />
      <div className="mx-2 grid grid-cols-2 gap-6">
          <CertCard
            image={certImgThree}
            title="Programming Essentials in Python"
            subTitle="NetCard"
          />
          <CertCard
            image={certImgTwo}
            title="Android Kotlin Fundamentals"
            subTitle="Developer Student Club, VSSUT"
            category="Documentation"
          />
          <CertCard
            image={certImgOne}
            title="Support Engineer Intern"
            subTitle="Amazon"
          />
      </div>
    </div>
  );
};

export default Cert;
