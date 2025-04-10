import { useState } from 'react';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/mjkbnokj", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      toast.success("Message sent successfully!")
    } else {
      console.log(response.json)
      toast.error("Error sending message")
    }
  };

  return (
    <form className="flex-shrink" onSubmit={handleSubmit}>
      <div className="flex-col gap-7 items-center">
        <h3 className="text-white text-shadow text-[2rem] font-bold">Let's Connect</h3>
        <div className="flex gap-6">
          <input 
            type="text" 
            name="firstName"
            className="input input-bordered flex-1" 
            placeholder="First Name" 
            value={formData.firstName}
            onChange={handleChange}
          />
          <input 
            type="text" 
            name="lastName"
            className="input input-bordered flex-1" 
            placeholder="Last Name" 
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <input 
          type="email" 
          name="email"
          className="input input-bordered w-full" 
          placeholder="Email" 
          value={formData.email}
          onChange={handleChange}
        />
        <textarea 
          name="message"
          className="textarea textarea-bordered w-full" 
          placeholder="Message" 
          value={formData.message}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="btn btn-block bg-blue-500 hover:bg-blue-600 text-white text-lg"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
