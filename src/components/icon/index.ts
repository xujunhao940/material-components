import {css, html, LitElement} from "lit";
import {customElement, property} from "lit/decorators.js";

@customElement("mc-icon")
export class Icon extends LitElement {
    @property()
    name: string
    @property({type: Number})
    size: 20 | 24 | 32 | 40 | 48 = 24

    static styles = css`
        :host,
                * {
                    -webkit-tap-highlight-color: transparent;
                    user-select: none;
                    -webkit-user-select: none;
                    -webkit-user-drag: none;
                    -webkit-touch-callout: none;
                }

                .icon {
                    font-family: "Material Symbols Outlined";
                    -webkit-user-select: none;
                    user-select: none;
                }
    `

    render() {
        return html`
            <style>
                :host {
                    width: ${this.size}px;
                    height: ${this.size}px;
                }

                .icon {
                    font-size: ${this.size}px;
                    line-height: ${this.size}px;
                }
            </style>
            <span class="icon">${this.name?this.name:html`<slot></slot>`}</span>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "mc-icon": Icon;
    }
}