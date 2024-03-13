function Contact() {
  return (
    <div className="bg-light">
      {/* main heading */}
      <a href="./">
        <p className="text-dark leading-tight sm:leading-normal font-abc pt-[34%] sm:pt-[18%] lg:pt-[13%] pl-[6%] pr-[3%] text-5xl md:text-6xl lg:text-8xl text-left font-bold max-w-xl lg:max-w-5xl">
          Let&apos;s create one that stands
        </p>
      </a>
      {/* contact me */}
      <div>
        <div className="px-[8%] sm:px-[15%] pt-[8%] md:pt-[8%]">
          {/* contact me heading */}
          <p className="text-black pt-8 pb-3 md:pb-6 font-extrabold text-2xl lg:text-3xl">
            Contact Me
          </p>

          <p className=" text-extra text-base lg:text-lg">
            <span>
              Get ready to bring your ideas to life like never before! I&apos;m here to help turn your dreams into reality. Whether you&apos;re a big company, a startup, or just someone with a cool idea, let&apos;s work together to make amazing things happen.
            </span>
            <br/>
            <br/>
            <span>
              We can take your existing projects and make them even better, or we can start something brand new that could change the game. Whatever you&apos;ve got in mind, I&apos;m excited to dive in and make it happen.
            </span>
            <br/>
            <br/>
            <span>
              If you&apos;re ready to see your vision come to life, let&apos;s chat! Reach out using the contact info below, and let&apos;s start making magic together. I can&apos;t wait to hear about your projects and see how we can work together to make them a reality!
            </span>
          </p>
        </div>

        <div className="flex flex-rows justify-center">
          <div className="bg-background-image backdrop-blur-lg rounded-lg shadow-lg 
          my-[3rem] mx-[1rem] sm:m-[5rem]
          py-[3rem] px-[2.5rem] sm:p-[4rem] md:p-[4rem] 
          sm:rounded-none transition-all border border-light">
            <form action="https://formsubmit.co/malik16603@gmail.com" method="POST">
              <div className="flex flex-col sm:flex-row">
                <div className="p-3 sm:p-5">
                  <label>
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 text-white block text-sm sm:text-base font-medium">Full Name</span>
                    <input
                      type="text"
                      name="Name"
                      className="mt-1 px-2 py-1 sm:mt-2 sm:px-3 sm:py-2 bg-gray-100 text-extra border border-white bg-gray-200 placeholder-gray-400 focus:outline-none focus:bg-light block w-full rounded-md text-sm"
                      placeholder="Name"
                      required
                    />
                  </label>
                </div>
                <div className="p-3 sm:p-5">
                  <label>
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 text-white block text-sm sm:text-base font-medium">Email</span>
                    <input
                      type="email"
                      name="email"
                      className="mt-1 px-2 py-1 sm:mt-2 sm:px-3 sm:py-2 bg-gray-100 text-extra border border-white bg-gray-200 placeholder-gray-400 focus:outline-none focus:bg-light block w-full rounded-md text-sm"
                      placeholder="you@mail.com"
                      required
                    />
                  </label>
                </div>
              </div>
              <div className="p-3 sm:p-5">
                <label>
                  <span className="block text-sm sm:text-base text-white font-medium ">Subject</span>
                  <input
                    type="text"
                    name="subject"
                    className="mt-1 px-2 py-1 sm:mt-2 sm:px-3 sm:py-2 bg-gray-100 text-extra border border-white bg-gray-200 placeholder-gray-400 focus:outline-none focus:bg-light block w-full rounded-md text-sm"
                    placeholder=""
                  />
                </label>
              </div>
              <div className="p-3 sm:p-5">
                <label>
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm sm:text-base font-medium text-white">Message</span>
                  <textarea
                    name="message"
                    className="mt-1 px-2 py-1 sm:mt-2 sm:px-3 sm:py-2 bg-gray-100 text-extra border border-white bg-gray-200 placeholder-gray-400 focus:outline-none focus:bg-light block w-full rounded-md text-sm h-40"
                    placeholder=""
                    required
                  />
                </label>
              </div>
              <div className="flex justify-center p-3 sm:p-5">
                <button
                  type="submit"
                  className="bg-white border border-dark text-extra hover:bg-extra hover:text-white font-semibold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>


      </div>
    </div>

  );
}

export default Contact;
