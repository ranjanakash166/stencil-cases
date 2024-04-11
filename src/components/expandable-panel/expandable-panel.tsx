import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'expandable-panel',
  styleUrl: 'expandable-panel.css',
  shadow: true,
})
export class ExpandablePanel {
  @State() expanded: boolean = false;

  togglePanel() {
    this.expanded = !this.expanded;
  }

  render() {
    return (
      <div class={{ 'expandable-panel': true, 'expanded': this.expanded }}>
        <div class="panel-header" onClick={() => this.togglePanel()}>
          Panel Header
          <span class="toggle-icon">{this.expanded ? '-' : '+'}</span>
        </div>
        {this.expanded && (
          <div class="panel-content">
            <slot></slot>
          </div>
        )}
      </div>
    );
  }
}
