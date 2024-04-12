import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'mandatory-input',
  styleUrl: 'mandatory-input.css',
  shadow: true,
})
export class MandatoryInput {
  @State() value: string = '';
  @State() isMandatory: boolean = true;

  handleChange(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    this.isMandatory = this.value.trim() === '';
  }

  render() {
    return (
      <form onSubmit={event => event.preventDefault()}>
        <label>
          Mandatory Input Field
          {this.isMandatory && <span class="mandatory-indicator">*</span>}
          <input
            type="text"
            value={this.value}
            onInput={event => this.handleChange(event)}
            class={this.isMandatory ? 'input-error' : ''}
          ></input>
          {this.isMandatory && <div class="error-message">This field is mandatory</div>}
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
