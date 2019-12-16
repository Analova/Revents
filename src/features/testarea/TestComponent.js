import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementAsync, decrementAsync } from "./testActions";
import { Button } from "semantic-ui-react";
import { openModal } from "../modals/modalActions";

class TestComponent extends Component {
  render() {
    const {
      data,
      incrementAsync,
      decrementAsync,
      openModal,
      loading
    } = this.props;
    return (
      <div>
        <h1>Test Component </h1>
        <h3>The answer is :{data}</h3>
        <Button
          loading={loading}
          onClick={incrementAsync}
          positive
          content="Increment"
        />
        <Button
          loading={loading}
          onClick={decrementAsync}
          negative
          content="Decrement"
        />
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
  data: state.test.data,
  loading: state.async.loading
});

const actions = {
  incrementAsync,
  decrementAsync,
  openModal
};

export default connect(mapStateToProps, actions)(TestComponent);
