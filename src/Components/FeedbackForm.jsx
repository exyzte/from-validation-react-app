import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
});
const handleChange = (event) => {
    const { name, value } = event.target;
            setFormData({
                ...formData,
                [name]: value
            });
        };

    const handleSubmit = (event) => {
        event.preventDefault();
        const confirmationMessage = `
        Name: ${formData.name}
        Email: ${formData.email}
        Feedback: ${formData.feedback}
        `;
        const isConfirmed = window.confirm(`Please confirm your details \n\n${confirmationMessage}`);
        if(isConfirmed){
            console.log('Submitting feedback: ', formData);
            setFormData({
                name: '',
                email: '',
                feedback: ''
            });
            alert('Thank you for your valuable feedback!');
        }
    };

  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
        />
        <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
        />
        <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            placeholder="Your Feedback"
        ></textarea>
        <button className="feedback-form" type="submit">Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;
