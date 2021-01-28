import React from "react";
import clock from "../img/clock.svg";
import teamwork from "../img/teamwork.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import home2 from "../img/home2.png";
import { Services, Description, Image, Cards, Card } from "../styles";
import { motion } from "framer-motion";
import { sectionAnim, cardContainer, cardAnim, imageAnim } from "../animation";
import { useScroll } from "../useScroll";

function ServicesSection() {
  const [element, control] = useScroll(0.2);
  return (
    <Services
      ref={element}
      variants={sectionAnim}
      animate={control}
      initial="hidden"
    >
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards variants={cardContainer}>
          <Card variants={cardAnim}>
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card variants={cardAnim}>
            <div className="icon">
              <img src={teamwork} alt="teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card variants={cardAnim}>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card variants={cardAnim}>
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <motion.img variants={imageAnim} src={home2} alt="Camera" />
      </Image>
    </Services>
  );
}

export default ServicesSection;
