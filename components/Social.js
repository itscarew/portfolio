import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Social({ enabled }) {
  return (
    <div className="w-full  px-2 py-4 sm:px-0">
      <Tab.Group>
        <Tab.List
          className="flex p-1 space-x-1  rounded-xl"
          style={{ background: "#2d6a4f" }}
        >
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full py-2.5 text-base leading-5 font-medium focus:text-green-700 rounded-lg",
                "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                selected
                  ? "bg-white shadow text-green-700 "
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            Get in touch
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full py-2.5 text-base leading-5 font-medium focus:text-green-700 rounded-lg",
                "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                selected
                  ? "bg-white shadow text-green-700 "
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            Resume
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full py-2.5 text-base leading-5 font-medium focus:text-green-700 rounded-lg",
                "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                selected
                  ? "bg-white shadow text-green-700"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            Hobby
          </Tab>
        </Tab.List>

        <Tab.Panels className="mt-2">
          <Tab.Panel
            className={`${
              enabled ? "bg-black" : ""
            } rounded-xl p-3 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 text-black`}
          >
            <p className={`${enabled ? "text-white" : ""}`}>
              Email address :{" "}
              <a
                href="mailto:itscarew@gmail.com"
                className="font-bold underline  text-green-700 "
              >
                itscarew@gmail.com
              </a>
              .
            </p>

            <p className={`${enabled ? "text-white" : ""}`}>
              My{" "}
              <a
                href="https://github.com/itscarew?tab=repositories"
                target="/_blank"
                className="font-bold underline text-green-700 "
              >
                github{" "}
              </a>{" "}
              repo .
            </p>

            <p className={`${enabled ? "text-white" : ""}`}>
              This is my{" "}
              <a
                href="https://www.linkedin.com/in/olaonipekun-carew/"
                target="/_blank"
                className="font-bold underline text-green-700  "
              >
                linkedin
              </a>{" "}
              profile.
            </p>
          </Tab.Panel>
          <Tab.Panel
            className={`${
              enabled ? "bg-black" : ""
            } rounded-xl p-3 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 text-black`}
          >
            <p className={`${enabled ? "text-white" : ""}`}>
              Here is my{" "}
              <a
                download
                href="/resume.pdf"
                className="font-bold underline text-green-700  "
              >
                {" "}
                resume{" "}
              </a>
              .{" "}
            </p>
          </Tab.Panel>
          <Tab.Panel
            className={`${
              enabled ? "bg-black" : ""
            } rounded-xl p-3 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60 text-black`}
          >
            <p className={`${enabled ? "text-white" : ""}`}>
              Outside of programming and work, I love watching movies,
              especially
              <b> sci-fi series </b>. I'm also a gamer and I play basketball 🏀.
              A big NBA fan here 😉.
            </p>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
