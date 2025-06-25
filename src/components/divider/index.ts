import {LitElement, html} from 'lit'
import {customElement} from 'lit/decorators.js'

@customElement('mc-divider')
export class Divider extends LitElement {

    render() {
        return html`
            <style>
                .container {
                    width: 100%;
                    height: 1px;
                    background: rgba(var(--md-sys-color-outline-variant));
                }
            </style>
            <div class="container"></div>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'mc-divider': Divider
    }
}
