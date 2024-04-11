import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'multi-selection-list',
  styleUrl: 'multi-selection-list.css',
  shadow: true
})
export class MultiSelectionList {
  @State() selectedItems: string[] = [];
  @State() options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  toggleItemSelection(event: Event) {
    const selectedOption = (event.target as HTMLSelectElement).value;
    const index = this.selectedItems.indexOf(selectedOption);
    if (index > -1) {
      // Item already selected, remove it
      this.selectedItems.splice(index, 1);
    } else {
      // Item not selected, add it
      this.selectedItems.push(selectedOption);
    }
    // Update selected items state
    this.selectedItems = [...this.selectedItems];
  }

  render() {
    return (
      <div>
        <h3>Multi-selection List</h3>
        <select multiple onChange={(event) => this.toggleItemSelection(event)}>
          {this.options.map(option => (
            <option value={option} selected={this.selectedItems.includes(option)}>
              {option}
            </option>
          ))}
        </select>
        <div>Selected Items: {this.selectedItems.join(', ')}</div>
      </div>
    );
  }
}
