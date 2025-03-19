import { useState } from "react";
import cn from "../../lib/utils/cn";

const data = [
  {
    id: "faq_1",
    title: "What is react?",
    description:
      "ReactReact.js, commonly referred to as React, is an open-source JavaScript library used for building user interfaces, particularly for single-page applications (SPAs). It was developed by Facebook and is maintained by Facebook and a community of individual developers and companies.",
  },
  {
    id: "faq_2",
    title: "What is react?",
    description:
      "ReactReact.js, commonly referred to as React, is an open-source JavaScript library used for building user interfaces, particularly for single-page applications (SPAs). It was developed by Facebook and is maintained by Facebook and a community of individual developers and companies.",
  },
  {
    id: "faq_3",
    title: "What is react?",
    description:
      "ReactReact.js, commonly referred to as React, is an open-source JavaScript library used for building user interfaces, particularly for single-page applications (SPAs). It was developed by Facebook and is maintained by Facebook and a community of individual developers and companies.",
  },
  {
    id: "faq_4",
    title: "What is react?",
    description:
      "ReactReact.js, commonly referred to as React, is an open-source JavaScript library used for building user interfaces, particularly for single-page applications (SPAs). It was developed by Facebook and is maintained by Facebook and a community of individual developers and companies.",
  },
];

const Accordion = () => {
  const [activeIndex, set0penIndex] = useState(0);
  return (
    <section className="accodoion py-10">
      <div className="container">
        <div className="border border-gray-200 rounded-lg max-w-screen-sm mx-auto ">
          {data.length &&
            data.map((item, index) => (
              <div key={item.id}>
                <h3 className="w-full">
                  <button
                    className={cn(
                      "block w-full p-3 border-b border-gray-200 text-red-950 font-semibold text-start",
                      index === 0 && "rounded-t-lg",
                      index === data.length - 1 && "border-none rounded-b-lg"
                    )}
                    onClick={() =>
                      set0penIndex(index === activeIndex ? null : index)
                    }
                  >
                    {item.title}
                  </button>
                </h3>
                <div
                  className={`grid overflow-hidden transition-all duration-300 text-sm ${
                    activeIndex === index
                      ? "grid-rows-[1fr] opacity-100 h-full"
                      : "grid-rows-[0fr] opacity-0 h-0"
                  }`}
                >
                  <div className="p-5 overflow-hidden">{item.description}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Accordion;
