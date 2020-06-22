import React from "react";
import Auxi from "../../hoc/Auxi";

export default props => {
  return (
    <Auxi>
      <div>toolber,Slidebar,dropdown</div>
      <main>{props.children}</main>
    </Auxi>
  );
};
