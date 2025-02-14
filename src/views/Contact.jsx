import React from "react";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out with any questions or suggestions.</p>
      </div>

      <div className="contact-container">
        {/* Contact Information */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>📍 Address: 456 Culinary Avenue, Vienna, Austria</p>
          <p>📧 Email: support@dishdelights.com</p>
          <p>📞 Phone: +43 123 456 789</p>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Type your message here..." required></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
