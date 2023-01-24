import React from "react";
import Image from "next/image";
import Link from "next/link";
const Template = ({ title, description, link, img, features }) => {
  return (
    <div
      className="bg-primary text-white p-6 rounded-lg shadow-lg grid grid-cols-1 gap-8
     2xl:grid-cols-2 2xl:grid ">
      <h3 className="text-xl font-bold 2xl:order-1">{title}</h3>
      <Image
        src={img}
        width={600}
        height="2"
        className="2xl:order-5 rounded-lg"></Image>
      <Link
        href={link}
        target={"_blank"}
        className="bg-white text-primary
        p-2 rounded-md w-fit h-fit 2xl:order-2 2xl:justify-self-end">
        Zum Template
      </Link>
      <div className="2xl:order-4 2xl:flex flex-col gap-4 ">
        <p>{description}</p>

        <div>
          <h4 className="text-lg font-bold">Features</h4>
          {features.map((feature) => (
            <li>{feature}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Template;
