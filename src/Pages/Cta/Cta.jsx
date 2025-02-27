import React, { useState } from "react";
import axios from "axios";
import Guy from "../../assets/Images/contactusimage.webp";
import "./Cta.css";

const Cta = () => {
  const defaultCountryCode = "+998 ";
  const [formData, setFormData] = useState({
    name: "",
    number: defaultCountryCode,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Prevent clearing the country code
    if (name === "number" && !value.startsWith("+998")) {
      return;
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const telegramBotToken = "7224247467:AAHYQJKqFRNUYuRN8i5lFQfcaG51GwLVYfA"; // Replace with your bot token
    const chatId = "1907166652"; // Replace with your chat ID

    const message = `📢 Yangi murojaat:\n\n👤 Ismi: ${formData.name}\n📞 Raqami: ${formData.number}`;
    const telegramApiUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    try {
      await axios.get(telegramApiUrl);
      alert("✅ So‘rovingiz yuborildi! Tez orada bog‘lanamiz.");
      setFormData({ name: "", number: defaultCountryCode }); // Reset form
    } catch (error) {
      console.error("❌ Telegram API xatosi:", error);
      alert("⚠️ Xatolik yuz berdi. Iltimos, keyinroq urinib ko‘ring.");
    }
  };

  return (
    <section className="cta" id="contact">
      <div className="container">
        <div className="cta-mainwrapper">
          <div className="cta-wrapper">
            <h2 className="cta-title">Bepul Konsultatsiya</h2>

            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                className="contact-input name-input"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ismingiz"
                required
              />

              <input
                className="contact-input"
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="+998"
                required
              />

              <button type="submit" className="contact-btn">
                Yuborish
              </button>
            </form>
          </div>

          <div className="cta-image-wrapper">
            <img className="cta-img" src={Guy} alt="guy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;