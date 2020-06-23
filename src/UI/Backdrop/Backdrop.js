import React from "react";
import styles from "./Backdrop.module.css";

export default props => {
  return (
    <div>
      {props.show ? (
        <div className={styles.Backdrop} onClick={props.clicked} />
      ) : null}
    </div>
  );
};
