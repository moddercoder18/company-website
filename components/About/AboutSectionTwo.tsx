import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
                  Bug free code
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  At Modder Coder, we focus quality, ensuring that our code not
                  only meets but surpasses industry standards, producing
                  powerful and frictionless apps for your business.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
                  Premier support
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Modder Coder's amazing service will elevate your software experience above and beyond the usual. Our committed team provides unparalleled help, allowing you to focus on the success of your business.
                </p>
              </div>
              {/* <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
                  Tech Stack
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  At Modder Coder, we use cutting-edge technology to create
                  innovative solutions that are suited to your specific
                  requirements. Our expertise includes cutting-edge technology
                  such as:
                  <ol>
                    <li>
                      <p>
                        <strong>React.js:</strong> Building dynamic and
                        responsive user interfaces for seamless web
                        applications.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Node.js:</strong> Enabling scalable and
                        high-performance server-side applications.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Express.js:</strong> Streamlining the
                        development of robust and feature-rich web applications.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Vue.js:</strong> Creating intuitive and
                        interactive user interfaces for modern web experiences.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Next.js:</strong> Enhancing React applications
                        with server-side rendering and simplified development.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Angular:</strong> Powering dynamic and
                        feature-packed front-end applications.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>GraphQL:</strong> Optimizing data fetching for
                        efficient and flexible APIs.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>MongoDB:</strong> Leveraging a NoSQL database
                        for scalable and agile data management.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Firebase:</strong> Integrating real-time
                        database and authentication for dynamic applications.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Webpack:</strong> Bundling and optimizing
                        JavaScript, CSS, and other assets for efficient
                        deployment.
                      </p>
                    </li>
                  </ol>
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
