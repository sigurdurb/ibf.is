import React from "react";
import PropTypes from "prop-types";
import styles from "./Hero.module.scss";
import { H1 } from "../Typography";
import ChapterLegend from "../ChapterLegend";

const Hero = ({ heading }) => (
  <div className={styles.root}>
    <ChapterLegend number="01" text="Icelandic Blockchain Foundation" />
    <H1 top="xlarge" bottom="xlarge">
      {heading}
    </H1>
  </div>
);

Hero.propTypes = {
  heading: PropTypes.node.isRequired,
};

export default Hero;