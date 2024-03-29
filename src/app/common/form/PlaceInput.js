import React from "react";
import PlacesAutoComplete from "react-places-autocomplete";
import { Form, Label, Segment, List } from "semantic-ui-react";

const PlaceInput = ({
  input: { value, onChange, onBlur },
  width,
  options,
  placeholder,
  meta: { touched, error }
}) => {
  return (
    <PlacesAutoComplete
      value={value}
      onChange={onChange}
      searchOptions={options}
    >
      {}
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <Form.Field error={touched && !!error}>
          <input
            placeholder={placeholder}
            {...getInputProps({ placeholder, onBlur })}
          />
          {touched && error && (
            <Label basic color="red">
              {error}
            </Label>
          )}
          {suggestions.length > 0 && (
            <Segment>
              {loading && <div>Loading ...</div>}
              <List selection>
                {suggestions.map(suggestion => (
                  <List.Item {...getSuggestionItemProps(suggestions)}>
                    <List.Header>
                      {suggestion.formattedSuggestion.mainText}
                    </List.Header>
                    <List.Description>
                      {suggestion.formattedSuggestion.secondoryText}
                    </List.Description>
                  </List.Item>
                ))}
              </List>
            </Segment>
          )}
        </Form.Field>
      )}
    </PlacesAutoComplete>
  );
};

export default PlaceInput;
