// import React, { useState } from 'react';
import { useFormik } from "formik";
import * as Yup from 'yup';
import "./Signup.css";

export default function Signup(){
    // const [firstName,setFirstName]=useState('');
    // const [lastName,setLastName]=useState('');
    // const [email,setEmail]=useState('');


    // console.log(firstName);
    // console.log(lastName);
    // console.log(email); 

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
            .max(15,"Exceeds character limit")
            .required("Required First Name"),

            lastName: Yup.string()
            .max(15,"Exceeds character limit")
            .required("Required Last Name"),

            email: Yup.string()
            .email("Invalid Email Adrress")
            .required("Required Email Address"),

        }),
        onSubmit: (values) => {
            alert("Fitrst Name= "+ formik.values.firstName + " Last Name= " + formik.values.lastName + " Email= " + formik.values.email)
            formik.handleReset('');

        }
    });

   // console.log(formik.values);
   console.log(formik.touched)


    return (
        <div>
    <h1>FORMIK FORM</h1>
    <p>FORMIK is an open source library that helps us to deal with form in React very easily and effectively.</p>
    

   <form onSubmit={formik.handleSubmit}>
       <div className='input-container'>
           <input
           id="firstName"
           name="firstName"
           type="text"
           placeholder='First Name'
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           value={formik.values.firstName}
           />
             {
               formik.touched.firstName && formik.errors.firstName ? 
               <p className="error">{formik.errors.firstName}</p> : null
           }
       </div>
       <div className='input-container'>
           <input
           id="lastName"
           name="lastName"
           type="text"
           placeholder='Last Name'
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           value={formik.values.lastName}
           />
           {
               formik.touched.lastName && formik.errors.firstName ? 
               <p className="error">{formik.errors.lastName}</p> : null
           }
         
       </div>
       <div className='input-container'>
           <input
           id="email"
           name="email"
           type="text"
           placeholder='Email'
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           value={formik.values.email}
           />
           {
               formik.touched.email && formik.errors.email ? 
               <p className="error">{formik.errors.email}</p> : null
           }
       </div>
       <div className="submit-btn">
           <button
           type="submit"
           
           >Submit</button>
       </div>

   </form>
   <footer>
       Demo Project For Formik Library. Simple Input, Validation and Error Management Through Formik.
   </footer>
   </div>
  )
}

