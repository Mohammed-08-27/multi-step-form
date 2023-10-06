import { useContext } from "react";
import { FormContext } from '../../context/stepContext'

useContext
export default function StepOne() {
  const { name, setName, phone, setPhone, email, setEmail, inputError } = useContext(FormContext)

  return (

    <form className='form-container' noValidate >
      <div className="form-header flex-col">
        <h1>Personal info</h1>
        <p>
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <label htmlFor="name" className="input-container">
        <p>Name</p>
        <p style={!inputError ? { display: 'none' } : { display: 'block' }}>This field is required</p>
        <input style={inputError ? { outline: '1px solid red' } : {}} type="text" name="name" id="name" value={name} placeholder="e.g Stephen King" required onChange={(e) => setName(e.target.value)} autoComplete="false" />
      </label>
      <label htmlFor="email" className="input-container">
        <p>Email Address</p>
        <p style={!inputError ? { display: 'none' } : { display: 'block' }}>This field is required</p>
        <input style={inputError ? { outline: '1px solid red' } : {}} type="email" name="email" id="email" value={email} placeholder="stephanKing@gmail.com" required onChange={(e) => setEmail(e.target.value)} autoComplete="false" />
      </label>

      <label htmlFor="phone" className="input-container">
        <p>Phone Number</p>
        <p style={!inputError ? { display: 'none' } : { display: 'block' }}>This field is required</p>
        <input style={inputError ? { outline: '1px solid red' } : {}} type="tel" name="phone" id="phone" value={phone} placeholder="e.g +1 123 456 789" required onChange={(e) => setPhone(e.target.value)} autoComplete="false" />
      </label>
    </form >
  )
}