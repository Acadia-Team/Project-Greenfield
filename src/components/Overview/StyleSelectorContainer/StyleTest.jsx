import React from "react";

export default class StyleTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p>${this.props.price}</p>
        {this.props.salePrice && <p>SALE ${this.props.salePrice}</p>}
        <h3>STYLE > SELECTED STYLE</h3>
        <div class="styleSquareBox containerOverview">
          {this.props.styleData.results &&
            this.props.styleData.results.map((style, index) => {
              return (
                <div class="square">
                  <img
                    className="rounded-circle"
                    id="Matt"
                    src={style.photos[0].url}
                    alt="mehh"
                    onClick={() => {
                      this.props.switchStyle(index);
                    }}
                  />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
