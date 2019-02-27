import React from "react";
import ReactDOM from "react-dom";
import StyledBtn from "./StyledBtn";

class App extends React.Component {
  render() {
    return (
      <div>
        <StyledBtn style={{ backgroundColor: "lightseagreen" }}>
          Click Me!
        </StyledBtn>
        <br />

        <StyledBtn style={{ backgroundColor: "red" }}>Not Me!</StyledBtn>
        <br />

        <StyledBtn style={{ backgroundColor: "lightseagreen" }}>
          Or Me!
        </StyledBtn>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
