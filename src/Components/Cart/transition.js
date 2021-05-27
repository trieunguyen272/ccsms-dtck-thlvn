import React from "react";
import { InputGroup } from "react-bootstrap";

export default function Transition() {
  return (
    <div>
      <h4>Phí ship: </h4>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Radio aria-label="Radio button for following text input" />
        </InputGroup.Prepend>
      </InputGroup>
    </div>
  );
}
