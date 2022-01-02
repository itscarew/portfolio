import React, { useState } from "react";
import Layout from "@components/Layout";
import { Switch } from "@headlessui/react";
import { GiNightSleep } from "react-icons/gi";
import { IoIosSunny } from "react-icons/io";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

import Social from "@components/Social";
import Jobs from "@components/Jobs";

const Index = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <Layout
      className={`${
        enabled ? "bg-black text-gray-100  " : ""
      } transition ease-in-out duration-200 `}
    >
      <div>
        <div className="relative w-full flex items-center justify-between">
          {" "}
          <span className="text-5xl">
            {" "}
            Hi{" "}
            <span role={"img"} aria-label="hi">
              👋
            </span>{" "}
            !{" "}
          </span>
          <div className="flex items-center">
            <div className="mr-2">
              {" "}
              <IoIosSunny size="2rem" />{" "}
            </div>
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={`${
                enabled ? "bg-purple-600" : "bg-gray-200"
              } relative inline-flex items-center h-7 rounded-full w-16`}
            >
              <span className="sr-only">Enable notifications</span>
              <span
                className={`${
                  enabled ? "translate-x-10" : "translate-x-1"
                } inline-block w-5 h-5 transform bg-white rounded-full transition ease-in-out duration-200`}
              />
            </Switch>
            <div className="ml-2">
              <GiNightSleep size="2rem" />
            </div>
          </div>
        </div>
        <div className="mt-8">
          I am <span className="font-black"> Olaonipekun Carew </span> . Ola for
          simplicity 😊 , I write things that work on the internet.{" "}
        </div>
        <div className="mt-2">
          I’m an innovative{" "}
          <span className="font-black"> fullstack developer </span> with 5 years
          experience in building pixel-perfect and customer-focused websites,
          UIs and server-side applications, deploying robust and secure APIs,
          meeting high standards web design, user experience, best practices,
          and speed. I aim to make a difference through my creative solution.
        </div>

        <div className="flex lg:flex-row flex-col-reverse items-start">
          <div className="lg:w-1/2 w-full lg:pt-16 pt-4">
            <div
              className={`w-full lg:p-1 p-2 mx-auto rounded-2xl ${
                enabled ? "bg-gray-900" : ""
              } `}
            >
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white   bg-sky-900 bg-opacity-75 rounded-lg hover:bg-sky-700 focus:outline-none focus-visible:ring focus-visible:ring-sky-700 focus-visible:ring-opacity-75">
                      <span className="text-base">Skill</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-5 h-5 text-sky-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel
                      className={`px-4 pt-4 pb-2 text-base font-black ${
                        enabled ? "" : "text-gray-900"
                      } `}
                    >
                      HTML, CSS, JavaScript, Typescript, React, Redux, SASS,
                      Nodejs , Nextjs , Redis, Express, NestJS
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white   bg-sky-900 bg-opacity-75 rounded-lg hover:bg-sky-700 focus:outline-none focus-visible:ring focus-visible:ring-sky-700 focus-visible:ring-opacity-75">
                      <span className="text-base">Education </span>
                      <ChevronUpIcon
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-5 h-5 text-sky-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel
                      className={`px-4 pt-4 pb-2 text-base ${
                        enabled ? "" : "text-gray-900"
                      } `}
                    >
                      <ol className="list-disc text-base">
                        <li> Yaba college of technology </li>
                        <li> NIIT - Mastermind Series, Honours Diploma </li>
                      </ol>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
            <Social enabled={enabled} />
          </div>

          <div className="lg:w-1/2 w-full">
            <Jobs enable={enabled} />
          </div>
        </div>

        <footer> &copy; {new Date().getFullYear()} Me </footer>
      </div>
    </Layout>
  );
};

export default Index;
