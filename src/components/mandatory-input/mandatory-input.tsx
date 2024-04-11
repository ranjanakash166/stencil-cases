import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'mandatory-input',
  styleUrl: 'mandatory-input.css',
  shadow: true,
})
export class MandatoryInput {
  @State() value: string = '';
  @State() showError: boolean = false;
  @State() isMandatory: boolean = true;

  handleChange(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    this.showError = false;
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    if (this.isMandatory && this.value.trim() === '') {
      this.showError = true;
    } else {
      console.log('Form Submitted with Input value:', this.value);
    }
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <label>
          Mandatory Input Field
          {this.isMandatory && <span class="mandatory-indicator">*</span>}
          <input type="text" value={this.value} onInput={event => this.handleChange(event)}></input>
          {this.showError && <div class="error-message">This field is mandatory</div>}
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
