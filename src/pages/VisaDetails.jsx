import { useLoaderData } from "react-router-dom";

const VisaDetails = () => {
  const visa = useLoaderData();
  const {
    countryImg,
    countryName,
    visaType,
    processingTime,
    ageRestriction,
    fee,
    validity,
    applicationMethod,
    description,
    required_docs,
  } = visa;

  // Array of field labels and corresponding values
  const visaDetails = [
    { label: "Country Name", value: countryName },
    { label: "Visa Type", value: visaType },
    { label: "Processing Time", value: processingTime },
    { label: "Age Restriction", value: ageRestriction },
    { label: "Fee", value: `${fee}$` },
    { label: "Validity", value: validity },
    { label: "Application Method", value: applicationMethod },
  ];

  return (
    <div className="md:w-4/5 w-11/12 mx-auto">
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure className="lg:flex-1 lg:p-6 p-3">
          <img className="w-full" src={countryImg} alt="Album" />
        </figure>
        <div className="card-body lg:flex-1  lg:p-6 p-3">
          {/* best practice for cleaner code */}
          {visaDetails.map((item, index) => (
            <h4 key={index} className="text-xl text-gray-600">
              <span className="mr-5 font-light">{item.label}:</span>
              <span className="font-medium text-gray-600">{item.value}</span>
            </h4>
          ))}

          {/* required docs */}
          <h4 className="text-xl text-gray-600">
            <span className="mr-5  font-light">Required Document :</span>{" "}
            <span>
              {" "}
              <ul className="text-sm text-gray-900 list-decimal ml-6">
                {required_docs.map((doc, idx) => (
                  <li key={idx}>{doc}</li>
                ))}
              </ul>
            </span>
          </h4>

          {/* desctiption */}

          <p>
            <span className="text-lg text-gray-600 font-light">
              Description:{" "}
            </span>
            <span className="text-gray-900 text-lg">{description}</span>
          </p>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaDetails;
