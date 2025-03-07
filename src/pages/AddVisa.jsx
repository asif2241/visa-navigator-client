import { useState } from "react";

const AddVisa = () => {
  const [requiredDocs, setRequiredDocs] = useState([]);
  const handleRequiredDocs = (e) => {
    // console.log(e.target.value, e.target.checked);
    if (e.target.checked) {
      setRequiredDocs([...requiredDocs, e.target.value]);
    } else {
      setRequiredDocs([
        ...requiredDocs.filter((item) => item !== e.target.value),
      ]);
    }
  };
  console.log(requiredDocs);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const countryImg = form.countryImg.value;
    const countryName = form.countryName.value;
    const visaType = form.visaType.value;
    const processingTime = form.processingTime.value;
    const ageRestriction = form.ageRestriction.value;
    const fee = form.fee.value;
    const validity = form.validity.value;
    const applicationMethod = form.applicationMethod.value;
    const description = form.description.value;
    const required_docs = requiredDocs;
    const addedVisa = {
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
    };
    console.log(addedVisa);

    fetch("http://localhost:5000/visa", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addedVisa),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <div>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-5 w-4/5 mx-auto"
        >
          <input
            type="text"
            name="countryImg"
            placeholder="Country Image"
            className="input input-xl w-full"
          />
          <input
            type="text"
            name="countryName"
            placeholder="Country Name"
            className="input input-xl w-full"
          />
          <select
            name="visaType"
            className="input input-xl w-full text-gray-400"
          >
            <option value="">Visa Type...</option> {/* Acts as a placeholder */}
            <option value="Tourist">Tourist</option>
            <option value="Student">Student</option>
            <option value="Official">Officiaa</option>
            <option value="Buisness">Buisness</option>
            <option value="Working">Working</option>
            <option value="Medical">Medical</option>
          </select>
          <input
            type="text"
            name="processingTime"
            placeholder="Processing Time"
            className="input input-xl w-full"
          />
          <input
            type="text"
            name="ageRestriction"
            placeholder="Age Restriction"
            className="input input-xl w-full"
          />
          <input
            name="fee"
            type="number"
            placeholder="Fee"
            className="input input-xl w-full"
          />
          <input
            name="validity"
            type="text"
            placeholder="Validity"
            className="input input-xl w-full"
          />
          <select
            name="applicationMethod"
            className="input input-xl w-full text-gray-400"
          >
            <option value="">Application Method...</option>{" "}
            {/* Acts as a placeholder */}
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
            <option value="Both Online And Offline">
              Both Online And Offline
            </option>
          </select>
          <textarea
            name="description"
            className="textarea col-span-2 w-full"
            placeholder="Description"
          ></textarea>

          <div className="text-gray-500">
            <p className="text-2xl  font-medium my-2 ">Required Documents</p>
            {[
              "Valid Passport",
              "Visa Application Form",
              "Recent Passport Size Photograph",
              "Medical Certificate",
              "Police Clearance Certificate",
              "Travel Insurance",
            ].map((doc, index) => (
              <div key={index} className="mb-2">
                <input
                  className="mr-1"
                  type="checkbox"
                  id={doc}
                  value={doc}
                  onChange={handleRequiredDocs}
                />
                <label htmlFor={doc}>{doc}</label>
              </div>
            ))}
          </div>
          <input
            className="btn w-full col-span-2"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddVisa;
