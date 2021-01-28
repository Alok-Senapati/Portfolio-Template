import React from "react";
import { Faq } from "../styles";
import Question from "./Question";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "../useScroll";
import { sectionAnim } from "../animation";

const FaqSection = () => {
  const [element, control] = useScroll();
  return (
    <Faq
      ref={element}
      variants={sectionAnim}
      animate={control}
      initial="hidden"
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Question title="How Do I Start?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id,
              aliquam aliquid quod excepturi exercitationem eligendi, officiis
              fugiat provident corrupti, consectetur deserunt. Voluptatibus
              inventore quasi veritatis aliquid dolorum non, architecto ipsum?
            </p>
          </div>
        </Question>
        <Question title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id,
              aliquam aliquid quod excepturi exercitationem eligendi, officiis
              fugiat provident corrupti, consectetur deserunt. Voluptatibus
              inventore quasi veritatis aliquid dolorum non, architecto ipsum?
            </p>
          </div>
        </Question>
        <Question title="Different Payment Methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id,
              aliquam aliquid quod excepturi exercitationem eligendi, officiis
              fugiat provident corrupti, consectetur deserunt. Voluptatibus
              inventore quasi veritatis aliquid dolorum non, architecto ipsum?
            </p>
          </div>
        </Question>
        <Question title="What Products do you offer.">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id,
              aliquam aliquid quod excepturi exercitationem eligendi, officiis
              fugiat provident corrupti, consectetur deserunt. Voluptatibus
              inventore quasi veritatis aliquid dolorum non, architecto ipsum?
            </p>
          </div>
        </Question>
      </AnimateSharedLayout>
    </Faq>
  );
};

export default FaqSection;
