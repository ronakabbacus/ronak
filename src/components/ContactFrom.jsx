import React, { useState } from 'react';
import axios from 'axios';
import CloseIcon from '../assets/images/close-icon.svg';
import contactImg from "../assets/images/contact-form-img.svg";

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({
    firstName: false,
    lastName: false,
    mobile: false,
    email: false,
    message: false,
    isChecked: false
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = {};

    if (firstName.length === 0) {
      errors.firstName = true;
    }

    if (lastName.length === 0) {
      errors.lastName = true;
    }

    if (mobile.length === 0) {
      errors.mobile = true;
    }

    if (email.length === 0) {
      errors.email = true;
    }

    if (message.length === 0) {
      errors.message = true;
    }

    if (!isChecked) {
      errors.isChecked = true;
    }

    setFieldErrors(errors);

    if (Object.keys(errors).length === 0) {
      const url = 'http://localhost/api/enquiry.php';
      let formData = new FormData();
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);
      formData.append('mobile', mobile);
      formData.append('email', email);
      formData.append('message', message);

      axios
        .post(url, formData)
        .then((response) => {
          showSuccessPopup();
          setFirstName('');
          setLastName('');
          setMobile('');
          setEmail('');
          setMessage('');
          setIsChecked(false);
        })
        .catch((error) => alert(error));
    }
  };

  // Function to show custom success popup
  const showSuccessPopup = () => {
    const popupContainer = document.getElementsByClassName('form-submitted-popup')[0];
    popupContainer.classList.add('show-popup');
  };

  const hidePopup = () => {
    const popupContainer = document.getElementsByClassName('form-submitted-popup')[0];
    popupContainer.classList.remove('show-popup');
  };

  return (
    <>
      <section className="contact-form">
        <div className="container">
          <h2>Contact Us</h2>
          <div className="row">
            <div className="left-col">
              <form onSubmit={handleSubmit}>
                <div className="form-main">
                  <div className="form-group">
                    <div className="form-col">
                      <label htmlFor="firstName">First Name</label>
                      <input type="text" className={fieldErrors.firstName ? 'empty-field' : ''} name="firstName" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                      {fieldErrors.firstName && <span className="error">Fill This Field</span>}
                    </div>
                    <div className="form-col">
                      <label htmlFor="lastName">Last Name</label>
                      <input type="text" className={fieldErrors.lastName ? 'empty-field' : ''} name="lastName" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                      {fieldErrors.lastName && <span className="error">Fill This Field</span>}
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="form-col">
                      <label htmlFor="mobile">Mobile</label>
                      <input type="text" className={fieldErrors.mobile ? 'empty-field' : ''} name="mobile" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                      {fieldErrors.mobile && <span className="error">Fill This Field</span>}
                    </div>
                    <div className="form-col">
                      <label htmlFor="email">Email</label>
                      <input type="email" className={fieldErrors.email ? 'empty-field' : ''} name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                      {fieldErrors.email && <span className="error">Fill This Field</span>}
                    </div>
                  </div>

                  <div className="form-group textarea">
                    <div className="form-col">
                      <label htmlFor="message">Write Message</label>
                      <textarea name="message" className={fieldErrors.message ? 'empty-field' : ''} id="message" value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
                      {fieldErrors.message && <span className="error">Fill This Field</span>}
                    </div>
                  </div>

                  <div className="checkbox-wrp">
                    <input type="checkbox" name="checkbox" onChange={(e) => setIsChecked(e.target.checked)} checked={isChecked} id="checkbox" required />
                    <label htmlFor="checkbox"></label>
                    <p>Yes, I would like to receive the latest content from apply</p>
                    {fieldErrors.isChecked && <span className="error">You must agree to receive content</span>}
                  </div>

                  <div className="form-group">
                    <input type="submit" className="btn-primary" name="submit" id="submit" value="Submit" />
                  </div>
                </div>
              </form>
            </div>
            <div className="right-col">
              <img src={contactImg} alt="Contact_Img" />
            </div>
          </div>
        </div>

        <div className="form-submitted-popup">
          <div className="modal-heading">
            <button onClick={hidePopup}>
              <img src={CloseIcon} alt="Close_Icon" />
            </button>
          </div>
          <div className="modal-content">
            <h3>Your form is submitted</h3>
          </div>
          <div className="modal-footer">
            
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
