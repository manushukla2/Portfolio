import React from "react";
import { certifications } from "../constants";
import { BsLink45Deg } from "react-icons/bs";
import { motion } from "framer-motion";

const CertificationItem = (props) => {
  return (
    <motion.div
      whileInView={{ y: [-20, 0], opacity: [0, 1] }}
      transition={{ duration: 0.7 }}
      className="mb-14"
    >
      <div className="flex flex-row items-center mb-4">
        {/* Removed the border from the image */}
        <img
          src={props.image}
          alt={props.issuedBy}
          className="w-[90px] h-[90px] rounded-full z-[2]"
        />
        <h4 className="font-poppins font-semibold text-[20px] text-[#00cea8] leading-[32px] ml-4">
          {props.title}
        </h4>
      </div>
      
      <div className="relative border-l border-gray-700 ml-6 pl-6">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 top-0 border border-gray-900 bg-gray-700"></div>
        
        <p className="font-poppins font-normal text-[16px] text-dimWhite mt-2">
          {props.description}
        </p>
        
        {/* Tech stack with reduced gap */}
        <div className="flex flex-row flex-wrap mt-4 gap-x-8 gap-y-2">
          {props.stack && props.stack.map((tech, index) => (
            <div 
              key={`tech-${index}`}
              className="flex flex-col items-center"
            >
              <span className="text-white text-[24px] hover:text-teal-200">
                {React.createElement(tech.icon)}
              </span>
              <p className="font-poppins text-dimWhite text-[12px] mt-1">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
        
        {/* Credential link */}
        {props.credentialLink && (
          <a 
            href={props.credentialLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-dimWhite hover:text-teal-200 mt-4"
          >
            <BsLink45Deg size="1.2rem" />
            <span>View Credential</span>
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Certification = () => {
  return (
    <section id="certifications" className="mb-20">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px] mb-6">
        Certifications
      </h1>
      
      <div>
        {certifications.map((certification, index) => (
          <CertificationItem 
            key={certification.id || index} 
            {...certification} 
          />
        ))}
      </div>
    </section>
  );
};

export default Certification;