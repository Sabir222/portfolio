import Contact from "./Contact";

const HomeContact = () => {
  return (
    <div className="duration-700 dark:bg-zinc-800 bg-[#EEEEEE]">
      <div className=" px-[32px] max-w-[1400px] mx-auto ">
        <div className="pt-20 pb-10 text-3xl font-semibold text-gray-800 dark:text-white md:pb-0">
          <p>Contact Me</p>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-[50%] flex justify-center text-center items-center ">
            <p>
              Interested in hiring a skilled web developer for your company?
              Contact me to explore how I can contribute to your team&apos;s
              success.<br></br> Email: mrsabir4@gmail.com
            </p>
          </div>
          <div className="flex-1">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
