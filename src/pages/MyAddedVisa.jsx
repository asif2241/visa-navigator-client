import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const MyAddedVisa = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-4/5 mx-auto my-10">
      {data.map((visa) => (
        <div
          key={visa._id}
          className="card bg-base-100 shadow-sm max-w-[490px]"
        >
          <figure className="p-5">
            <img
              className="w-full  object-cover rounded-xl"
              src={visa.countryImg}
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-gray-500">
            <h2 className="card-title font-medium">
              Country Name: {visa.countryName}
            </h2>
            <h2 className="card-title font-medium">
              Visa Type: {visa.visaType}
            </h2>
            <h2 className="card-title font-medium">
              Validity: {visa.validity}
            </h2>
            <h2 className="card-title font-medium">Fee: {visa.fee}$</h2>
            <h2 className="card-title font-medium">
              Processing Time: {visa.processingTime}
            </h2>
            <h2 className="card-title font-medium">
              Appication Method: {visa.applicationMethod}
            </h2>

            <div className="card-actions justify-end "></div>
            <div className="flex justify-between">
              <Link className="btn btn-primary font-light">Update</Link>
              <Link className="btn btn-primary font-light">Delete</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyAddedVisa;
