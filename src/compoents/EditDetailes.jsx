import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const EditDetailes = () => {
  const navigate = useNavigate();

  const initialValues = {
    fullName: '',
    position: '',
    status: '',
    email: '',
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required('Full Name is required'),
    position: Yup.string().required('Position is required'),
    status: Yup.string().required('Status is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    console.log('Form Submitted:', values);
    resetForm();
    navigate('/profile');
  };

  return (
    <div className="flex justify-center bg-blue-100 py-10 px-4 min-h-screen">
      <div className="w-full max-w-md p-6 sm:p-10 shadow-lg bg-white rounded-lg">
        <div className="text-center text-xl font-semibold mb-6">Edit Details</div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-4">
              <Field
                type="text"
                name="fullName"
                className="text-sm border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Full Name"
              />
              <ErrorMessage
                name="fullName"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <div className="mb-4">
              <Field
                type="text"
                name="position"
                className="text-sm border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Position"
              />
              <ErrorMessage
                name="position"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <div className="mb-4">
              <Field
                type="text"
                name="status"
                className="text-sm border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Status"
              />
              <ErrorMessage
                name="status"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <div className="mb-4">
              <Field
                type="email"
                name="email"
                className="text-sm border border-gray-300 rounded w-full py-2 px-3"
                placeholder="Email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <button
              type="submit"
              className="bg-stone-950 text-white rounded-full text-sm w-full py-2"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default EditDetailes;
