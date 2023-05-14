import React from "react";

const DemoOutput = props => {
  console.log('DemoOutput');
  return <p>{props.show ? 'There is new text' : ''}</p>
};

export default React.memo(DemoOutput);