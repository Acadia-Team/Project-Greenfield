import React, { useState } from "react";

export default function StyleCircle(props) {
  const [hovered, setHover] = useState(false);

  return (
    <div class="square">
      <div class="imageHolder">
        <img
          className="rounded-circle"
          id="Matt"
          src={props.url}
          alt="mehh"
          onClick={() => {
            props.switchStyle(props.index);
          }}
          onMouseOver={() => {
            setHover(true);
          }}
          onMouseOut={() => {
            setHover(false);
          }}
        />
        {hovered && <div class="overlay">✓</div>}
      </div>
    </div>
  );
}
