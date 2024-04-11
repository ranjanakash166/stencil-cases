import {Component, h} from "@stencil/core";

@Component({
    tag:"notes-card",
    styleUrl:"card.css",
    shadow:true
})

export class card {
    render() {
        return (
            <div class="card-wrapper">This is my card component.</div>
        );
    }
}