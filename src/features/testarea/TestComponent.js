import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "./testActions";
import { Button } from "semantic-ui-react";
import { openModal } from "../modals/modalActions";

class TestComponent extends Component {
  render() {
    const { data, incrementCounter, decrementCounter, openModal } = this.props;
    return (
      <div>
        <h1>Test Component </h1>
        <h3>The answer is :{data}</h3>
        <Button onClick={incrementCounter} positive content="Increment" />
        <Button onClick={decrementCounter} negative content="Decrement" />
        <Button
          onClick={() => openModal("TestModal", { data: 42 })}
          color="teal"
          content="Open Model"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.test.data
});

const actions = {
  incrementCounter,
  decrementCounter,
  openModal
};

export default connect(mapStateToProps, actions)(TestComponent);
