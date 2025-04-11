const Contact = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      <div className="flex flex-col items-start w-[700px] h-[480px] bg-gray-200 rounded-2xl shadow-[0_0_35px_rgba(0,0,0,0.2)] py-6 px-10">
        <div className="flex flex-col items-start gap-2">
          <h1 className="ubuntu-font text-4xl font-semibold">CONTACT US</h1>
          <p className="ubuntu-font text-md text-gray-500">
            It would be great to get to know you more!
          </p>
        </div>
        <form action="" className="flex flex-col items-start mt-6">
          <div className="flex flex-row items-start gap-4">
            <div className="flex flex-col items-start">
              <label
                htmlFor="fname"
                className="ubuntu-font text-md font-semibold">
                First Name
              </label>
              <input
                type="text"
                id="fname"
                placeholder="Enter your first name.."
                className="w-[300px] h-[40px] rounded-md border-2 border-gray-400 px-2 focus:outline-none focus:border-blue-500 ubuntu-font text-sm"
              />
            </div>
            <div className="flex flex-col items-start">
              <label
                htmlFor="lname"
                className="ubuntu-font text-md font-semibold">
                Last Name
              </label>
              <input
                type="text"
                id="lname"
                placeholder="Enter your last name.."
                className="w-[300px] h-[40px] rounded-md border-2 border-gray-400 px-2 focus:outline-none focus:border-blue-500 ubuntu-font text-sm"
              />
            </div>
          </div>
          <div className="my-3">
            <label
              htmlFor="email"
              className="ubuntu-font text-md font-semibold">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email.."
              className="w-[616px] h-[40px] rounded-md border-2 border-gray-400 px-2 focus:outline-none focus:border-blue-500 ubuntu-font text-sm"
              autoComplete="on"
            />
          </div>
          <div className="mb-3 flex flex-col items-start">
            <label
              htmlFor="message"
              className="ubuntu-font text-md font-semibold">
              Message
            </label>
            <textarea
              name=""
              id=""
              className="w-[616px] h-[100px] border-2 border-gray-400 rounded-md focus:outline-none focus:border-blue-500 ubuntu-font text-sm custom-scrollbar resize-none p-2"
              placeholder="Enter your message.."
            />
          </div>

          <div className="mx-auto my-1">
            <button
              type="submit"
              className="w-[616px] border rounded-md bg-blue-500 text-white font-semibold px-4 py-2 hover:bg-blue-600 transition duration-200 ease-in-out focus:outline-none ubuntu-font text-md cursor-pointer">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
