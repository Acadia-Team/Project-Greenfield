import React from "react";

export default class SocialLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <span>
        {" "}
        <i class="fa fa-facebook-square" style={{ "font-size": "60px" }}></i>
        <i class="fa fa-twitter-square" style={{ "font-size": "60px" }}></i>
        <i class="fa fa-instagram" style={{ "font-size": "60px" }}></i>
      </span>
    );
  }
}