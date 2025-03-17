import React from 'react'
import { ToastContainer,toast } from 'react-toastify';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast.success("Wow so easy!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center '>Contact <span className='underline underline-offset-4 decoration-1 under font-light'>With Us </span></h1>
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Ready to Take Move up ? Lets Build Up Future Together..</p>
      <form onSubmit={onSubmit}>
        <div className='flex flex-wrap'>
            <div className='w-full md:w-1/2 text-left'>
            Your Name
            <input className='w-full border border-gray-300 rounded py-3 px-4  mt-2' placeholder='Your Name' type="text" required></input>

            </div>

            <div className='w-full md:w-1/2 text-left md:pl-4'>
            Your Email
            <input className='w-full border border-gray-300 rounded py-3 px-4  mt-2' placeholder='Your Email' type="email" required></input>

            </div>
            <div className='my-6 text-left'>
             Message
            <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none' placeholder='Your Email' type="email" required></textarea>

            </div>
            
        </div>
        <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded'>Send Message</button>
    
      </form>
    </div>
  )
}

export default Contact
