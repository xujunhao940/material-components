import {LitElement, html} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {getAbbreviation} from "../../utils/utils";

@customElement('mc-avatar')
export class Avatar extends LitElement {
    @property({type: Number})
    public size: 40 | 48 = 40

    render() {
        return html`
            <style>
                .container {
                    background: rgba(var(--md-sys-color-primary-container));
                    color: rgba(var(--md-sys-color-on-primary-container));
                    width: ${this.size}px;
                    height: ${this.size}px;
                    -webkit-user-select: none;
                    user-select: none;
                    border-radius: 50%;
                    overflow: hidden;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                ::slotted(*) {
                    width: 100%;
                    height: 100%;
                }
            </style>
            <span class="container"><slot></slot></span>
        `
    }
}

@customElement('mc-avatar-text')
export class AvatarText extends LitElement {
    @property({type: String})
    text: string = ''

    render() {
        return html`
            <style>
                span {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                }
            </style>
            <span>${getAbbreviation(this.text)}</span>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'mc-avatar': Avatar
        'mc-avatar-text': AvatarText
    }
}
