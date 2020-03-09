import React from "react";
import "./App.scss";

class App extends React.Component {
  state = {
    changeWidth: false
  };

  changeWidthFunction = () => {
    this.setState(preState => {
      return {
        changeWidth: !preState.changeWidth
      };
    });
  };
  render() {
    const { changeWidth } = this.state;
    return (
      <div className="appContainer">
        <div className="bgRed"></div>
        <div className="container changeOnMobile">
          <div className={`leftSide ${changeWidth ? "moved" : ""}`}>
            <p>pos hola no?</p>
          </div>
          <div className="rightSide">
            <button onClick={this.changeWidthFunction}>apachurrame</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
