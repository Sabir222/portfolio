const Timeline = () => {
  return (
    <section className="duration-700 ease-in-out dark:bg-black">
      <div className="max-w-[1400px] mx-auto dark:text-white p-[32px] text-gray-700 ">
        <div className="md:w-[700px] lg:w-[1000px]">
          <h1 className="inline-block w-auto text-3xl underline-title">
            Experience
          </h1>
          <ul className="mt-6 mb-10">
            <li className="relative flex items-baseline gap-6 pb-10 ">
              <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  className="bi bi-circle-fill fill-gray-400"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
              </div>
              <div className="text-md">
                <p>April 2023 - present</p>
                <p className="mt-2">
                  I&apos;m learning software engineering at ALX and teaching
                  myself how to build full-stack websites.
                </p>
              </div>
            </li>{" "}
            <li className="relative flex items-baseline gap-6 pb-10 ">
              <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  className="bi bi-circle-fill fill-gray-400"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
              </div>
              <div className="text-md">
                <p>jul 2019 - march 2023</p>
                <p className="mt-2">
                  As a Financial Operations Coordinator at CIH Bank, I oversaw
                  and coordinated financial operations, ensuring compliance with
                  banking regulations. Managed transactions like deposits and
                  withdrawals with a focus on accuracy. Collaborated with teams
                  to optimize processes and addressed customer inquiries
                  promptly
                </p>
              </div>
            </li>
            <li className="relative flex items-baseline gap-6 pb-10 ">
              <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  className="bi bi-circle-fill fill-gray-400"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
              </div>
              <div className="text-md">
                <p>2018 (6 months)</p>
                <p className="mt-2">
                  Interned at Mogador Accounting, gained practical experience in
                  accounting and financial analysis. Responsibilities included
                  data entry,reconciliation, and assisting in financial report
                  preparation. Collaborated with senior accountants to support
                  clients in managing financial records.
                </p>
              </div>
            </li>
            <li className="relative flex items-baseline gap-6 pb-10 ">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  className="bi bi-circle-fill fill-gray-400"
                  viewBox="0 0 16 16"
                >
                  <circle cx="8" cy="8" r="8" />
                </svg>
              </div>
              <div className="text-md">
                <p>2014 {"-"} 2017</p>
                <p className="mt-2">
                  Earned a Financial Computing and Banking bachelor&apos;s
                  degree from Cadi Ayyad University. Proficient in management
                  accounting, computer science, and applied mathematics, I apply
                  technology and quantitative analysis to drive effective
                  financial solutions.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
