import React from "react";
import { Faq } from "../styles";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How Do I Start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id,
            aliquam aliquid quod excepturi exercitationem eligendi, officiis
            fugiat provident corrupti, consectetur deserunt. Voluptatibus
            inventore quasi veritatis aliquid dolorum non, architecto ipsum?
          </p>
        </div>
      </div>
      <div className="faq-line"></div>
      <div className="question">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id,
            aliquam aliquid quod excepturi exercitationem eligendi, officiis
            fugiat provident corrupti, consectetur deserunt. Voluptatibus
            inventore quasi veritatis aliquid dolorum non, architecto ipsum?
          </p>
        </div>
      </div>
      <div className="faq-line"></div>
      <div className="question">
        <h4>Different Payment Methods</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id,
            aliquam aliquid quod excepturi exercitationem eligendi, officiis
            fugiat provident corrupti, consectetur deserunt. Voluptatibus
            inventore quasi veritatis aliquid dolorum non, architecto ipsum?
          </p>
        </div>
      </div>
      <div className="faq-line"></div>
      <div className="question">
        <h4>What Products do you offer.</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id,
            aliquam aliquid quod excepturi exercitationem eligendi, officiis
            fugiat provident corrupti, consectetur deserunt. Voluptatibus
            inventore quasi veritatis aliquid dolorum non, architecto ipsum?
          </p>
        </div>
      </div>
      <div className="faq-line"></div>
    </Faq>
  );
};

export default FaqSection;
