import React, { useState } from "react";
import Layout from "@components/Layout";
import { Switch } from "@headlessui/react";
import { GiNightSleep } from "react-icons/gi";
import { IoIosSunny } from "react-icons/io";

const Index = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <Layout
      className={`${
        !enabled ? "bg-black text-gray-100  " : ""
      } transition ease-in-out duration-200 `}
    >
      <div>
        <div className="relative w-full flex items-center justify-between">
          {" "}
          <span className="text-5xl"> Ẹ Ǹlẹ́ ! </span>
          <div className="flex items-center">
            <div className="mr-2">
              {" "}
              <GiNightSleep size="2rem" />
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
              <IoIosSunny size="2rem" />{" "}
            </div>
          </div>
        </div>
        <div className="mt-8">
          I am <span className="font-black"> Olaonipekun Carew </span>. I write
          things that work on the internet.{" "}
        </div>
        <div className="mt-2">
          Innovative <span className="font-black"> software developer </span>{" "}
          with 6 years experience in building pixel-perfect and customer-focused
          websites, UIs and server-side applications, deploying robust and
          secure APIs, meeting high standards web design, user experience, best
          practices, and speed. I aim to make a difference through my creative
          solution.
        </div>

        <div className="mt-4">
          I'm proficient in{" "}
          <span className="font-black">
            {" "}
            HTML, CSS, JavaScript, Typescript{" "}
          </span>{" "}
          and modern frameworks like{" "}
          <span className="font-black">
            {" "}
            React, Redux, SASS, Nodejs , Nextjs , Redis, Express, NestJS
          </span>
          and more{" "}
        </div>

        <div className="mt-4">
          I reside in Lagos, Nigeria. I'm currently working as a frontend
          developer in{" "}
          <span className="font-black">
            {" "}
            Radeus Business Tech Limited, Lagos, Nigeria.{" "}
          </span>{" "}
          I've worked as a frontend developer at{" "}
          <span className="font-black">
            {" "}
            Payday, Canada and Rwanda{" "}
          </span> and{" "}
          <span className="font-black"> Zijela ICT, Lagos, Nigeria </span>.
        </div>

        <div className="mt-4">
          I have a{" "}
          <span className="font-black">
            {" "}
            National Diploma in Computer Science{" "}
          </span>{" "}
          from Yaba college of technology, a{" "}
          <span className="font-black">
            {" "}
            Honours Diploma in Software Engineering
          </span>{" "}
          from NIIT and a{" "}
          <span className="font-black">
            {" "}
            Bachelors degree in Computer Science{" "}
          </span>{" "}
          from ESGT University.
        </div>

        <div className="mt-4">
          This is my{" "}
          <a
            href="https://github.com/itscarew?tab=repositories"
            target="/_blank"
            className="font-black"
          >
            github{" "}
          </a>{" "}
          repository . My{" "}
          <a
            href="https://www.linkedin.com/in/olaonipekun-carew/"
            target="/_blank"
            className="font-black"
          >
            linkedin
          </a>{" "}
          profile. And Here is my{" "}
          <a className="font-black" download href="/resume.pdf">
            {" "}
            resume{" "}
          </a>
          .{" "}
        </div>

        <div className="mt-4 mb-2">
          Outside of writing code, I love watching movies, especially sci-fi
          series . I also love to watch/play basketball and american football .
        </div>

        <footer> &copy; {new Date().getFullYear()} Me </footer>
      </div>
    </Layout>
  );
};

export default Index;
