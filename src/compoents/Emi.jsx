import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Emi = () => {
  const navigate = useNavigate();

 
  const validationSchema = Yup.object({
    cardnumber: Yup.string()
      .matches(/^\d{16}$/, "Card number must be 16 digits")
      .required("Card number is required"),
    cardholder: Yup.string().required("Cardholder name is required"),
    expirydate: Yup.string()
      .matches(
        /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
        "Enter valid expiry date (MM/YY)"
      )
      .required("Expiry date is required"),
    ccv: Yup.string()
      .matches(/^\d{3}$/, "CCV must be 3 digits")
      .required("CCV is required"),
  });

  
  const initialValues = {
    cardnumber: "",
    cardholder: "",
    expirydate: "",
    ccv: "",
  };

  return (
    <div className="p-8">
      <h2 className="text-center text-2xl font-bold text-blue-900">
        EMI Payment
      </h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form className="mt-6 space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold">
                Card Number
              </label>
              <Field
                type="text"
                name="cardnumber"
                placeholder="Enter 16-digit card number"
                className={`w-full p-2 border rounded ${
                  errors.cardnumber && touched.cardnumber
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              <ErrorMessage
                name="cardnumber"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

          
            <div>
              <label className="block text-gray-700 font-semibold">
                Cardholder Name
              </label>
              <Field
                type="text"
                name="cardholder"
                placeholder="Enter cardholder name"
                className={`w-full p-2 border rounded ${
                  errors.cardholder && touched.cardholder
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              <ErrorMessage
                name="cardholder"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

         
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-gray-700 font-semibold">
                  Expiry Date (MM/YY)
                </label>
                <Field
                  type="text"
                  name="expirydate"
                  placeholder="MM/YY"
                  className={`w-full p-2 border rounded ${
                    errors.expirydate && touched.expirydate
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                <ErrorMessage
                  name="expirydate"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="w-1/3">
                <label className="block text-gray-700 font-semibold">CCV</label>
                <Field
                  type="text"
                  name="ccv"
                  placeholder="123"
                  className={`w-full p-2 border rounded ${
                    errors.ccv && touched.ccv
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
                
                <ErrorMessage
                  name="ccv"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>

            
            <div className="flex justify-between mt-6">
              <button
                type="submit"
                className="w-1/2 bg-indigo-900 text-white py-2 rounded hover:bg-indigo-700"
              >
                Save
              </button>
              <button
                type="button"
                className="w-1/2 bg-gray-500 text-white py-2 rounded hover:bg-gray-700 ml-2"
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Emi;

