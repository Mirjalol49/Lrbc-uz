import React from 'react'
import Guy from "../../assets/Images/contactusimage.webp";
import './Cta.css'

import { useState } from "react";
import axios from "axios";

const Cta = () => {
    const defaultCountryCode = "+998";
    const [formData, setFormData] = useState({
      name: "",
      number: defaultCountryCode + "  ",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();

      // Telegram bot details
    const telegramBotToken = "YOUR_BOT_TOKEN";
    const chatId = "YOUR_CHAT_ID";

    try {
      // Send data to Telegram
      await axios.post(
        `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
        {
          chat_id: chatId,
          text: `Kursga yangi talaba yozildi:\n\nO'quvchining ismi: ${formData.name}\nTelefon raqami: ${formData.number}`,
        }
      );

      // Clear form after submission
      setFormData({ name: "", number: "" });

      // Optionally, you can add a success message or redirect to a thank-you page
      alert("Raxmat, tez orada bog'lanamiz!");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  
  return (
    <section className='cta'>
        <div className="container">
            <div className="cta-mainwrapper">
                <div className="cta-wrapper">
                    <h2 className='cta-title'>Bepul Konsultatsiya</h2>
                
                    <form className="contact-form" onSubmit={handleSubmit}>
                
                        <input
                            className="contact-input name-input"
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Ismingiz"
                            autoComplete="off"
                            required
                        />
                        
                        <input
                            className="contact-input"
                            type="tel"
                            id="number"
                            name="number"
                            value={formData.number}
                            onChange={handleChange}
                            placeholder="+998"
                            min={12}
                            autoComplete="off"
                            required
                        />
                        <button className="contact-btn">Yuborish</button>
                    </form>
                </div>
                <div className="cta-image-wrapper">
                    <img className='cta-img' src={Guy} alt="guy" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Cta;