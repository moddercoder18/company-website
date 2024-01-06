"use client";
import { useState } from "react";
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formValue, setFormValue] = useState({
    name: '', email: '', subject: ''
  });
  const setFormKeyValue = (key: string, value: string) => {
    setFormValue({
      ...formValue,
      [key]: value
    })
  }
  const sendMsg = async (e) => {
    e.preventDefault();
    const accessToken = '198ikew10grvrosm4j680g2t'
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    var urlencoded = new URLSearchParams();
    urlencoded.append("access_token", accessToken);
    urlencoded.append("subject", `${formValue.name}: ${formValue.email} trying to connect with us`);
    urlencoded.append("text", `${formValue.subject}`);
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded
    };
    try {
      const req = await fetch("https://postmail.invotes.com/send", requestOptions);
      setFormValue({
        name: '', email: '', subject: ''
      });
      // toast.success("We will connect with you shortly!");
    } catch (error) {
      console.error(`Error =====>`, error);
      // toast.error("Unable to connect!");
    }
  };
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp mb-12 rounded-sm bg-white px-8 py-11 shadow-three sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px] dark:bg-gray-dark"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black sm:text-3xl lg:text-2xl xl:text-3xl dark:text-white">
                Need Help? Open a Ticket
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              <form onSubmit={sendMsg}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formValue.name}
                        onChange={(e) => setFormKeyValue(e.target.name, e.target.value)}
                        placeholder="Enter your name"
                        className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formValue.email}
                        onChange={(e) => setFormKeyValue(e.target.name, e.target.value)}
                        placeholder="Enter your email"
                        className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        rows={5}
                        name="subject"
                        required
                        minLength={3}
                        value={formValue.subject}
                        onChange={(e) => setFormKeyValue(e.target.name, e.target.value)}
                        placeholder="Enter your Message"
                        className="w-full resize-none rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                    >
                      Submit Ticket
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div> */}
        </div>portfolio
      </div>
      {/* <ToastContainer /> */}
    </section>
  );
};

export default Contact;
