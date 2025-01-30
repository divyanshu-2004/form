
import {useState} from 'react'
import './Form.css'
const Form = () => {
  const [email, setEmail] = useState("");
      const [phone, setPhone] = useState("");
      const [password, setPassword] = useState("");
      const [errors, setErrors] = useState([]);
  
      const validateEmail = (email) => {
          const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          return pattern.test(email);
      };
      
      const handleSubmit = (e) => {
          e.preventDefault();
          let validationErrors = [];
  
          if (!email) validationErrors.push("Email not filled.");
          else if (!validateEmail(email)) validationErrors.push("Email is not valid.");
  
          if (!phone) validationErrors.push("Phone number not filled.");
          else if (!/^[0-9]+$/.test(phone) || phone.length!==10) validationErrors.push("Phone number is not valid.");
  
          if (!password) validationErrors.push("Password not filled.");

          
          setErrors(validationErrors);
          if(validationErrors.length == 0){
            alert("Successfully Submitted");
          }
      };
  
      return (
          <div className="wrapper">
              <h2>Form Validation</h2>
              <form onSubmit={handleSubmit}>
                  <div className="form-element">
                      <label>Email:</label>
                      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="form-element">
                      <label>Phone:</label>
                      <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </div>
                  <div className="form-element">
                      <label>Password:</label>
                      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <button type="submit" >Submit</button>
              </form>
              {errors.length > 0 && (
                  <div className="errors">
                      {errors.map((err, index) => (
                          <p key={index} style={{ color: "red" }}>{err}</p>
                      ))}
                  </div>
              )}
          </div>
      );
}

export default Form
