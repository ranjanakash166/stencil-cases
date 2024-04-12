import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'high-contrast-toggle',
  styleUrl: 'high-contrast-toggle.css',
  shadow: true,
})
export class HighContrastToggle {
  @State() highContrastMode: boolean = false;
  @State() divColor: string = 'blue';

  toggleHighContrast() {
    this.highContrastMode = !this.highContrastMode;

    if (this.highContrastMode) {
      document.body.classList.add('high-contrast');
      this.divColor = 'yellow'; 
    } else {
      document.body.classList.remove('high-contrast');
      this.divColor = 'blue'; 
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
        <div class="color-changing-div" style={{ backgroundColor: this.divColor }}>
          This div changes color in high contrast mode
        </div>
      </div>
    );
  }
}
