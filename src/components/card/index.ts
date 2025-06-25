import {css, html, LitElement} from "lit";
import {customElement, property} from "lit/decorators.js";

@customElement("mc-card")
export class Card extends LitElement {
    @property({type: String})
    variant: "filled" | "outlined" | "elevated" = "elevated";

    static styles = css`
        .container {
            display: flex;
            box-sizing: border-box;
            height: 100%;
            border-radius: 12px;
            transition: 200ms;
        }

        .container[variant=elevated] {
            background: rgb(var(--md-sys-color-surface-container-low));
            box-shadow: var(--md-sys-elevation-level1);

            &:hover {
                background: color-mix(in srgb, rgb(var(--md-sys-color-surface-container-low)), rgb(var(--md-sys-color-on-primary)) 8%);
                box-shadow: var(--md-sys-elevation-level2);
            }
        }

        .container[variant=filled] {
            background: rgb(var(--md-sys-color-surface-container-highest));
            box-shadow: var(--md-sys-elevation-level0);

            &:hover {
                background: color-mix(in srgb, rgb(var(--md-sys-color-surface-container-highest)), rgb(var(--md-sys-color-on-primary)) 8%);
                box-shadow: var(--md-sys-elevation-level1);
            }
        }

        .container[variant=outlined] {
            background: rgb(var(--md-sys-color-surface));
            border: 1px solid rgb(var(--md-sys-color-outline-variant));
            box-shadow: var(--md-sys-elevation-level0);

            &:hover {
                background: color-mix(in srgb, rgb(var(--md-sys-color-surface)), rgb(var(--md-sys-color-on-primary)) 8%);
                box-shadow: var(--md-sys-elevation-level1);
            }
        }
    `

    render() {
        return html`
            <div class="container" variant=${this.variant}>
                <slot></slot>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "mc-card": Card;
    }
}