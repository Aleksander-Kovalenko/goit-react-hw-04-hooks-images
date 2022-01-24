import { Component } from "react";

import {
  Header,
  SearchForm,
  FormButton,
  FormButtonLabel,
  FormInput,
} from "./Gallery.styled";

export class SearchBar extends Component {
  state = {
    imageName: "",
  };

  handleInput = (e) => {
    const { value } = e.target;

    this.setState({ imageName: value });
  };

  handleForm = (e) => {
    e.preventDefault();

    this.props.submitForm(this.state.imageName);
    this.setState({ imageName: "" });
  };

  render() {
    const { imageName } = this.state;
    return (
      <Header>
        <SearchForm onSubmit={this.handleForm}>
          <FormButton type="submit">
            <FormButtonLabel>Search</FormButtonLabel>
          </FormButton>

          <FormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInput}
            value={imageName}
          />
        </SearchForm>
      </Header>
    );
  }
}
