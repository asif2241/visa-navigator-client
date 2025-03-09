import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Components/Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateVisa = () => {
  const data = useLoaderData();
  console.log(data);
  const { user, loading } = useContext(AuthContext);
  //  Private route e loading set korar age korechi tai evbabe korlam, loading set korar por korle evabe korar drkar hoitw na
  const [name, setName] = useState("");
  useEffect(() => {
    if (!loading) {
      const name = user?.displayName;
      setName(name);
    }
  }, [loading, name, user]);
  //   console.log(name);

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
  //   console.log(requiredDocs);

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
    const updatedVisa = {
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
      name,
    };
    // console.log(addedVisa);

    fetch(`http://localhost:5000/all-visa/${data._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedVisa),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "top",
            icon: "success",
            title: "Visa Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
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
            defaultValue={data.countryImg}
            name="countryImg"
            placeholder="Country Image"
            className="input input-xl w-full"
          />
          <input
            type="text"
            defaultValue={data.countryName}
            name="countryName"
            placeholder="Country Name"
            className="input input-xl w-full"
          />
          <select
            name="visaType"
            defaultValue={data.visaType}
            className="input input-xl w-full text-gray-400"
          >
            <option value="" disabled>
              Visa Type...
            </option>{" "}
            {/* Acts as a placeholder */}
            <option value="Tourist">Tourist</option>
            <option value="Student">Student</option>
            <option value="Official">Officiaa</option>
            <option value="Buisness">Buisness</option>
            <option value="Working">Working</option>
            <option value="Medical">Medical</option>
          </select>
          <input
            type="text"
            defaultValue={data.processingTime}
            name="processingTime"
            placeholder="Processing Time"
            className="input input-xl w-full"
          />
          <input
            type="text"
            defaultValue={data.ageRestriction}
            name="ageRestriction"
            placeholder="Age Restriction"
            className="input input-xl w-full"
          />
          <input
            name="fee"
            defaultValue={data.fee}
            type="number"
            placeholder="Fee"
            className="input input-xl w-full"
          />
          <input
            defaultValue={data.validity}
            name="validity"
            type="text"
            placeholder="Validity"
            className="input input-xl w-full"
          />
          <select
            defaultValue={data.applicationMethod}
            name="applicationMethod"
            className="input input-xl w-full text-gray-400"
          >
            <option value="" disabled>
              Application Method...
            </option>{" "}
            {/* Acts as a placeholder */}
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
            <option value="Both Online And Offline">
              Both Online And Offline
            </option>
          </select>
          <textarea
            defaultValue={data.description}
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

export default UpdateVisa;
