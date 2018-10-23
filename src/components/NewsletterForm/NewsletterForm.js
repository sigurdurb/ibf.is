import React from "react";
import styles from "./NewsletterForm.module.scss";
import { Body3 } from "../Typography";

const SubmitArrow = () => (
  <svg
    viewBox="0 0 20 12"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.submitArrow}
  >
    <path
      d="M13.6 0L12.19 1.385l3.695 3.533H0v1.986h15.886l-3.695 3.533 1.409 1.385 6.119-5.911z"
      fill="#FFF"
      fillRule="evenodd"
    />
  </svg>
);

const NewsletterForm = ({ placeholder, onSubmit }) => (
  <>
    <form onSubmit={() => {}} className={styles.root}>
      <div className={styles.inputWrap}>
        <input className={styles.input} placeholder={placeholder} />
      </div>
      <button className={styles.submit} type="submit">
        <SubmitArrow />
      </button>
    </form>
    <Body3 className={styles.fineprint} light bottom="large">Monthly updates and news, never spam</Body3>
  </>
);

export default NewsletterForm;