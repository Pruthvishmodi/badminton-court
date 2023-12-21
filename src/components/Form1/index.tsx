"use client"
import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';
import Image1 from '../../../public/image/formimg.jpg';
import Title from '../title2';

const Form = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phone: Yup.number().typeError('Phone must be a number').required('Phone is required'),
    message: Yup.string().required('Message is required'),
  });

  return (
    <section
      className=' py-10 h-full w-full'
      style={{ backgroundImage: `url(${Image1.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
        <Title title='Request a free consultation' />
      <div className='px-4 md:px-4 lg:px-16 2xl:flex 2xl:justify-center'>
        <Formik
          initialValues={{
            name: '',
            email: '',
            phone: '',
            message: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(values);
              setSubmitting(false);
            }, 500);
          }}
        >
          {({ isSubmitting }) => (
            <form className='px-10 bg-white py-10 space-y-6 gap-4 lg:px-14 grid justify-center rounded-2xl'>
              <div className='lg:flex lg:space-x-5 grid justify-center'>
                <label htmlFor="name">
                  <Field
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className={`border ${isSubmitting ? 'border-green-400' : 'border-black'} mb-4 py-2 px-5 md:pr-[450px] lg:pr-11`}
                  />
                  <ErrorMessage name="name" component="div" className="text-red-500 relative bottom-3" />
                </label>

                <label htmlFor="email">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email (Optional)"
                    className={`border ${isSubmitting ? 'border-green-400' : 'border-black'} mb-4 py-2 px-5 md:pr-[450px] lg:pr-11`}
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 relative bottom-3" />
                </label>

                <label htmlFor="phone">
                  <Field
                    type="tel"
                    name="phone"
                    placeholder="Number"
                    className={`border ${isSubmitting ? 'border-green-400' : 'border-black'}  py-2 px-5 md:pr-[450px] lg:pr-11`}
                  />
                  <ErrorMessage name="phone" component="div" className="text-red-500 relative bottom-[-5px]" />
                </label>
              </div>

              <label htmlFor="message">
                <Field
                  as="textarea"
                  name="message"
                  cols="22"
                  rows="6"
                  placeholder="Enter The Message"
                  className={`border ${isSubmitting ? 'border-green-400' : 'border-black'} resize-none mb-4 md:pr-[445px] lg:pr-[550px] 2xl:pr-[535px] lg:p-4 p-3 `}
                />
                <ErrorMessage name="message" component="div" className="text-red-500 relative bottom-3" />
              </label>

              <div className='grid justify-center'>
                <button
                  type='submit'
                  className='bg-green-400 rounded-3xl px-6 py-3'
                  disabled={isSubmitting}
                >
                  Send Request
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Form;
