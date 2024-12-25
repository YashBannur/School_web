import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "558c7797-5956-4629-90b1-73f7d6aea834");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className='contact' id='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores nemo sequi obcaecati, eius sapiente architecto!</p>
            <ul>
                <li> <img src={mail_icon} alt="" />Contact@Yash Bannur</li>
                <li> <img src={phone_icon} alt="" />+918446900603</li>
                <li> <img src={location_icon} alt="" />1st main,1st cross Vijayanagra<br /> bangalore-560062</li>
            </ul>
        </div>

        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter Your Name....' required/>

                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter ypur mobile number....' required/>

                <label>Write your messages here</label>
                <textarea name="message" rows="6" cols="30" placeholder='Enter your message....' required></textarea>

                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>

    </div>
  )
}

export default Contact