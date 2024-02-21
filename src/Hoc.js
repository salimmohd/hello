import React from "react";

import ContactUs from "./practice/ContactUs";

const Hoc = (Component) => {
  return class extends React.Component {
    state = {
      auth: true,
    };
    render() {
      return <div>{this.state.auth ? <Component /> : <ContactUs />}</div>;
    }
  };
};

export default Hoc;
