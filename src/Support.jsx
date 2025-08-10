import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Support = () => {
  const [formFields, setFormFields] = useState({
    name: " ",
    email: "",
    message: "",
  });
  const [openItem, setOpenItem] = useState(null);
  const [error, setError] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };
  function handleChange(e, field) {
    const newValue = e.target.value;

    setFormFields({ ...formFields, [field]: newValue });

    if (!formFields.name || !formFields.email || !formFields.message) {
      setDisabled(false);
    }

    if (field === "name") {
      setError(!newValue.trim());
    }

    if (field === "email") {
      const isValidEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        newValue
      );
      setErrorEmail(!newValue.trim() || !isValidEmail);
    }

    if (field === "message") {
      setErrorMessage(!newValue.trim());
    }

    console.log(newValue);
  }

  function handleFormSubmit() {
    if (!formFields.name || !formFields.email || !formFields.message) {
      setError(true);
      setErrorEmail(true);
      setErrorMessage(true);
    } else {
      console.log("sent");
    }
    setFormFields({
      name: " ",
      email: "",
      message: "",
    });
    setDisabled(true);
  }

  const faqData = [
    {
      question: "How do I list a phone for sale?",
      answer:
        "If your case is not urgent, we recommend you send an email to support@techcycle.com.gh",
    },
    {
      question: "How do I sell on TechCycle?",
      answer: (
        <div>
          <ol className="list-decimal list-inside space-y-1 mb-3">
            <li>Sign in to your profile on TechCycle;</li>
            <li>Click on the button "Sell";</li>
            <li>
              Complete all the information. Choose a proper category, upload the
              photos of your item, and write a clear title with a detailed
              description of what you're selling. After that, enter a fair price
              and double-check the information you've entered;
            </li>
            <li>If everything looks fine, click on the "Post" button;</li>
          </ol>
          <p>
            As soon as you're done with all these steps, your product goes for a
            review. We check it to ensure that it's in line with our rules and
            that all the information is correct. Once your advert is live, you
            will receive a notification email. If there's something wrong, we'll
            specify all the edits you should make. That's all you need to do!
            Welcome to our great TechCycle Fam!
          </p>
        </div>
      ),
    },
    {
      question: "Do you have any Stores?",
      answer:
        "No, as we are not a shop. TechCycle is the marketplace — here you can sell your stuff, buy goods from real people, find a job or services you need. Any deal you make, you make with people. And we exist just to help you find each other.",
    },
  ];

  return (
    <div className="w-full">
      <div className="w-[80%] m-auto">
        <h1 className="text-2xl font-bold mt-2.5 mb-4">FAQs</h1>

        {/* FAQs */}
        <div className="space-y-3">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="w-[70%] border border-gray-300 rounded-lg overflow-hidden"
            >
              <div
                className="flex justify-between items-center cursor-pointer p-4 hover:bg-gray-50 transition-colors"
                onClick={() => toggleItem(index)}
              >
                <p className="font-medium">{faq.question}</p>
                {openItem === index ? (
                  <IoIosArrowDown className="w-5 h-5 text-gray-600" />
                ) : (
                  <IoIosArrowUp className="w-5 h-5 text-gray-600" />
                )}
              </div>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openItem === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="p-4 text-gray-700">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>

        {/* COntact Us */}

        <h1 className="text-2xl font-bold mt-8">Contact Us</h1>
        <div>
          <form className=" flex flex-col gap-5">
            <div className=" flex flex-col gap-2 ">
              <label htmlFor="name">Your name</label>
              <input
                className=" border border-background-secondary rounded-lg w-[50%] px-1.5 py-2"
                type="text"
                id="name"
                value={formFields.name}
                onChange={(e) => handleChange(e, "name")}
              />
              <div
                className={`${
                  !error ? "hidden" : "block"
                } text-red-600 text-sm`}
              >
                Enter your name
              </div>
            </div>
            <div className=" flex flex-col gap-2 ">
              <label htmlFor="email">Email Address</label>
              <input
                className=" border border-background-secondary rounded-lg w-[50%] px-1.5 py-2"
                type="email"
                name="email"
                id="email"
                value={formFields.email}
                onChange={(e) => handleChange(e, "email")}
                required
              />
              <div
                className={`${
                  !errorEmail ? "hidden" : "block"
                } text-red-600 text-sm`}
              >
                Enter a correct email
              </div>
            </div>
            <div className=" flex flex-col gap-2 ">
              <label htmlFor="message">Message</label>
              <textarea
                className=" border border-background-secondary rounded-lg w-[50%] min-h-30"
                name="message"
                id="message"
                placeholder=" We'd love to hear from you..."
                value={formFields.message}
                onChange={(e) => handleChange(e, "message")}
              />
              <div
                className={`${
                  !errorMessage ? "hidden" : "block"
                } text-red-600 text-sm`}
              >
                Enter a message
              </div>
            </div>
            <div className="flex justify-end">
              <button
                disabled={disabled}
                onClick={handleFormSubmit}
                className=" w-30 bg-background-secondary text-black hover:bg-background-primary hover:text-white "
                type="button"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Support;
