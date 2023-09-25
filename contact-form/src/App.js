import React, { useState } from 'react';
import './App.css';
import logo from "./call.png";
import logo1 from "./sms.jpeg";


function App() {
  const [formData, setFormData] = useState({
     name: '',
    email: '',
     mobile: '',
    message: '',
   
  });

  const handleChange = (e) => {
    const { name, value,  } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
  };

  return (

    <div className="App">
      <div className='h'><h1>Contact us for more information!</h1></div>
      <div className='h5'><h5>Do you have any queries? Reach out to us and we are happy to help you!</h5></div>
      <h3 className='call'>Call now </h3> 

      <div className='logo'>
      <img src= {logo} width='30px' /> 
      </div>

      <div className='logo1'>
      <img src= {logo1} width='30px' /> 
      </div>

    <h3 className='mob'>+91 999 275 4599</h3>
          <h3 className='email'> Email </h3>
   <h3 className='emailid'> tutors@baoiam.com</h3>
    
    <h1 className='submit'>Submit Your Details</h1>
      <form onSubmit={handleSubmit}>

        {/* name section */}
        <div className="form-group">
          <label htmlFor="name"></label> 
          <input
            type="text"
            id="name"
            name="name"
            placeholder='Your Name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* email id section */}
        <div className="form-group">
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='Your Email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

{/* mobile section */}
  <div className="form-group">
           <label htmlFor="mobile"></label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            placeholder='Phone No.'
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>

{/* select course section */}
    <div className="form-group">
      <label htmlFor="courseSelect"></label>
      <select id="courseSelect"
      placeholder='Select course'>
        <option value="html">Select course</option>
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="javascript">Java Script</option>
        
      </select>
    </div> <br></br>
{/* message section */}
        <div className="form-group">
          <label htmlFor="message"></label>
          <textarea
            id="message"
            name="message"
            placeholder='Message'
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div> <br></br>
        <input className="btn" type="submit" value="Submit"></input>
      </form>
    </div>



  );
}

export default App;
