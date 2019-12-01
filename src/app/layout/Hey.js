import React, { Component } from "react";

class Hey extends Component {
  render() {
    return (
      <div>
        <div>
          <Grid>
            <Grid.Column width={10}>
              <h2>Left Column</h2>
            </Grid.Column>
            <Grid.Column width={6}>
              <h2>Right Column</h2>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Hey;
