import React from "react";

const Contact = () => {
  return (
    <div name='Contact' className="p-4 text-white w-full h-screen bg-gradient-to-b from-black to-gray-800">
      <div className="flex flex-col justify-center p-4 mx-auto h-full max-w-screen-lg">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">Contact</p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/6d99834e-c520-4a44-a4d4-02d89692f157" method="POST" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="p-2 bg-transparent text-white border-2 rounded-md"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email"
              className="my-4 p-2 bg-transparent text-white border-2 rounded-md"
            />
            <textarea
                name="message"
                rows={10}
              className="p-2 bg-transparent text-white border-2 rounded-md"
            />
            <button className="px-6 py-3 text-white mx-auto my-6 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center rounded-md hover:scale-110 duration-300">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
