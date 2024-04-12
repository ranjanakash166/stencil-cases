import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'multi-selection-list',
  styleUrl: 'multi-selection-list.css',
  shadow: true
})
export class MultiSelectionList {
  @State() selectedItems: string[] = [];

  @Prop() options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  toggleItemSelection(option: string) {
    const index = this.selectedItems.indexOf(option);
    if (index > -1) {
      this.selectedItems.splice(index, 1);
    } else {
      this.selectedItems.push(option);
    }
    this.selectedItems = [...this.selectedItems];
  }

  render() {
    return (
      <div>
        <ul>
          {this.options.map(option => (
            <li 
              class={this.selectedItems.includes(option) ? 'selected' : ''}
              onClick={() => this.toggleItemSelection(option)}
            >
              <input 
                type="checkbox" 
                checked={this.selectedItems.includes(option)} 
                onChange={() => this.toggleItemSelection(option)}
              />
              {option}
            </li>
          ))}
        </ul>
        <div class="selected-item">Selected Items: {this.selectedItems.join(', ')}</div>
      </div>
    );
  }
}
