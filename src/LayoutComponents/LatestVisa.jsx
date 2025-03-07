import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

{
  /* <div className="card bg-base-100 shadow-sm">
<figure className="pt-5">
    <img 
     className="lg:w-96 md:w-80 h-80 md:h-72 object-cover rounded-xl"
        src={cardImg1}
        alt="Shoes" />
</figure>
<div className="card-body">
    <h2 className="card-title">Study In Japan</h2>
    <p>Gain access to world-class universities and scholarships while immersing yourself in Japanese culture.</p>
    <div className="card-actions justify-end">
       
    </div>
</div>
</div> */
}

const LatestVisa = () => {
  const [visas, setVisas] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/latest-visas`)
      .then((res) => res.json())
      .then((data) => {
        setVisas(data);
      });
  }, []);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
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
            <h2 className="card-title font-medium">Fee: {visa.fee}</h2>
            <h2 className="card-title font-medium">
              Processing Time: {visa.processingTime}
            </h2>
            <h2 className="card-title font-medium">
              Appication Method: {visa.applicationMethod}
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

export default LatestVisa;
