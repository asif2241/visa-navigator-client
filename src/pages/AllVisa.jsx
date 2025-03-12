import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllVisa = () => {
  const allVisa = useLoaderData();
  // console.log(allVisa);
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 md:w-4/5 w-11/12 mx-auto">
      {allVisa.map((visa) => (
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

            <div className="card-actions justify-end">
              <Link
                to={`/visa_details/${visa._id}`}
                className="btn btn-primary font-light"
              >
                See Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllVisa;
