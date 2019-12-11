import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Segment, Form, Button, Grid, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { createEvent, updateEvent } from "../eventActions";
import cuid from "cuid";
import TextInput from "../../../app/common/form/TextInput";
import TextArea from "../../../app/common/form/TextArea";
import SelectInput from "../../../app/common/form/SelectInput";

let category = [
  { key: "drinks", text: "Drinks", value: "drinks" },
  { key: "culture", text: "Culture", value: "culture" },
  { key: "film", text: "Film", value: "film" },
  { key: "food", text: "Food", value: "food" },
  { key: "music", text: "Music", value: "music" },
  { key: "travel", text: "Travel", value: "travel" }
];

class EventForm extends Component {
  onFormSubmit = values => {
    if (this.props.initialValues.id) {
      this.props.updateEvent(values);
      this.props.history.push(`/events/${this.props.initialValues.id}`);
    } else {
      const newEvent = {
        ...values,
        id: cuid(),
        hostPhotoURL: "/assets/user.png",
        hostedBy: "Bob"
      };
      this.props.createEvent(newEvent);
      this.props.history.push(`/events/${newEvent.id}`);
    }
  };

  render() {
    const { history, initialValues } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Header sub color="teal" content="Event Detail" />
            <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
              <Field
                name="title"
                component={TextInput}
                placeholder="Give your event a name"
                rows={3}
              />
              <Field
                name="category"
                component={SelectInput}
                placeholder="What is your event about"
                options={category}
              />
              <Field
                name="description"
                component={TextArea}
                placeholder="Tell us about your event"
              />
              <Header sub color="teal" content="Event Location Details" />
              <Field name="city" component={TextInput} placeholder=" City" />
              <Field name="venue" component={TextInput} placeholder=" Venue" />
              <Field
                name="date"
                component={TextInput}
                placeholder="Event date"
              />
              <Button positive type="submit">
                Submit
              </Button>
              <Button
                type="button"
                onClick={
                  initialValues.id
                    ? () => history.push(`/events/${initialValues.id}`)
                    : () => history.push("/events")
                }
              >
                Cancel
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {};

  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }

  return {
    initialValues: event
  };
};

const actions = {
  createEvent,
  updateEvent
};

export default connect(
  mapStateToProps,
  actions
)(reduxForm({ form: "eventForm" })(EventForm));
