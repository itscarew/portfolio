import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

const plans = [
  {
    name: "Radeus Business Tech Limited",
    role: "Frontend developer",
    location: "Lagos, Nigeria",
    href: null,
  },
  {
    name: "Zijela ICT",
    role: "Frontend developer",
    location: "Lagos, Nigeria",
    href: "https://zijela.com",
  },
  {
    name: "TalentMatch",
    role: "Frontend developer",
    location: "Canada",
    href: "https://talentmatch.africa",
  },
  {
    name: "Salarify",
    role: "Backend developer",
    location: "Lagos, Nigeria",
    href: null,
  },
];

export default function Jobs({ enanled }) {
  const [selected, setSelected] = useState(plans[0]);

  return (
    <div className="w-full lg:px-4 px-0 py-16">
      <p className="mb-2 font-black text-base">Experience / Jobs</p>
      <div className="w-full  mx-auto">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            {plans.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) =>
                  `${
                    active
                      ? "ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60"
                      : ""
                  }
                  ${
                    checked ? "bg-sky-900 bg-opacity-75 text-white" : "bg-white"
                  }
                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium text-base  ${
                              checked ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {plan.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? "text-sky-100" : "text-gray-500"
                            }`}
                          >
                            <span>{plan.role}</span>{" "}
                            <span aria-hidden="true">&middot;</span>{" "}
                            <span>{plan.location}</span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <a
                          href={plan?.href}
                          target="_blank"
                          className="flex-shrink-0 text-white"
                        >
                          <CheckIcon className="w-6 h-6" />
                        </a>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
}
