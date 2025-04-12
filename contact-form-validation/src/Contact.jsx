import { useState } from "react";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    if (firstName.trim().length < 3) {
      newErrors.firstName = "First name must be at least 3 characters long.";
    }

    if (lastName.trim().length < 3) {
      newErrors.lastName = "Last name must be at least 3 characters long.";
    }

    if (email.trim() === "") {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Email is not valid.";
    }

    if (message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    if (!validateForm()) {
      e.preventDefault();
    } else {
      console.log("Form submitted successfully: ", {
        firstName,
        lastName,
        email,
        message,
      });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      <div className="flex flex-col items-start w-[700px] h-[500px] bg-gray-200 rounded-2xl shadow-[0_0_35px_rgba(0,0,0,0.2)] py-6 px-10">
        <div className="flex flex-col items-start gap-2">
          <h1 className="ubuntu-font text-4xl font-semibold">CONTACT US</h1>
          <p className="ubuntu-font text-md text-gray-500">
            It would be great to get to know you more!
          </p>
        </div>
        <form
          action="https://formsubmit.co/egipsinargo123@gmail.com"
          method="POST"
          className="flex flex-col items-start mt-6"
          onSubmit={handleSubmit}>
          {/* Hidden input */}
          {/* <input type="hidden" name="_captcha" value="false" /> */}
          <input
            type="hidden"
            name="_subject"
            value="New Contact Form Submission"
          />

          {/* Content Form */}
          <div className={`flex flex-row items-start gap-4`}>
            <div className="flex flex-col items-start h-[90px]">
              <label
                htmlFor="fname"
                className="ubuntu-font text-md font-semibold">
                First Name
              </label>
              <input
                type="text"
                id="fname"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter your first name.."
                className="w-[300px] h-[40px] rounded-md border-2 border-gray-400 px-2 focus:outline-none focus:border-blue-500 ubuntu-font text-sm"
              />

              <span className="text-red-600 text-sm h-[18px]">
                {error?.firstName || ""}
              </span>
            </div>
            <div className="flex flex-col items-start h-[90px]">
              <label
                htmlFor="lname"
                className="ubuntu-font text-md font-semibold">
                Last Name
              </label>
              <input
                type="text"
                id="lname"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter your last name.."
                className="w-[300px] h-[40px] rounded-md border-2 border-gray-400 px-2 focus:outline-none focus:border-blue-500 ubuntu-font text-sm"
              />

              <span className="text-red-600 text-sm h-[18px]">
                {error?.lastName || ""}
              </span>
            </div>
          </div>
          <div className=" h-[90px]">
            <label
              htmlFor="email"
              className="ubuntu-font text-md font-semibold">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email.."
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[616px] h-[40px] rounded-md border-2 border-gray-400 px-2 focus:outline-none focus:border-blue-500 ubuntu-font text-sm"
              autoComplete="on"
            />
            <span className="text-red-600 text-sm  h-[18px]">
              {error?.email || ""}
            </span>
          </div>
          <div className=" flex flex-col items-start h-[140px]">
            <label
              htmlFor="message"
              className="ubuntu-font text-md font-semibold">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-[616px] h-[100px] border-2 border-gray-400 rounded-md focus:outline-none focus:border-blue-500 ubuntu-font text-sm custom-scrollbar resize-none p-2"
              placeholder="Enter your message.."
            />
            <span className="text-red-600 text-sm h-[18px]">
              {error?.message || ""}
            </span>
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
