import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'high-contrast-toggle',
  styleUrl: 'high-contrast-toggle.css',
  shadow: true,
})
export class HighContrastToggle {
  @State() highContrastMode: boolean = false;

  toggleHighContrast() {
    this.highContrastMode = !this.highContrastMode;

    if (this.highContrastMode) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }

  render() {
    return (
      <div class="toggle-container">
        <label>
          High Contrast Mode
          <input type="checkbox" checked={this.highContrastMode} onChange={() => this.toggleHighContrast()}></input>
          <span class="slider round"></span>
        </label>
      </div>
    );
  }
}
