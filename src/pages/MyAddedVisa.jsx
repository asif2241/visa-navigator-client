import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyAddedVisa = () => {
  const data = useLoaderData();
  const [visas, setVisas] = useState(data);
  // console.log(data);

  const handleDelete = (_id) => {
    // console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform delete operation only if confirmed
        fetch(`https://visa-navigator-server-one.vercel.app/all-visa/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your visa has been deleted.",
                icon: "success",
              });

              // Remove visa from the state
              const remaining = visas.filter((visa) => visa._id !== _id);
              setVisas(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-4/5 mx-auto my-10">
      {visas.map((visa) => (
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
              <Link
                to={`/update_visa/${visa._id}`}
                className="btn btn-primary font-light"
              >
                Update
              </Link>
              <Link
                onClick={() => handleDelete(visa._id)}
                className="btn btn-primary font-light"
              >
                Delete
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyAddedVisa;
