import {LitElement, html} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {style} from "./style"

@customElement('mc-button')
export class Button extends LitElement {
    @property({type: Boolean})
    disabled = false
    @property({type: Boolean})
    toggle = false
    @property({type: Boolean})
    selected = false
    @property()
    variant: 'elevated' | 'filled' | 'tonal' | 'outlined' | 'standard' = 'filled'
    @property()
    size: 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge' = 'small'

    rippleColor = {
        filled: "on-primary",
        elevated: "primary",
        tonal: "on-secondary-container",
        outlined: "on-surface-variant",
        standard: "on-background"
    }

    clickHandler() {
        if (this.toggle) {
            this.selected = !this.selected
        }
    }


    render() {
        return html`
            <button type="button" class="button" variant=${this.variant} size=${this.size} ?toggle=${this.toggle}
                    ?selected=${this.selected}
                    ?disabled=${this.disabled} @click=${this.clickHandler}>
                <slot class="icon" name="icon"></slot>
                <slot></slot>
                <mc-ripple color=${this.rippleColor[this.variant]} ?disabled=${this.disabled}></mc-ripple>
            </button>
        `;
    }


    static styles = style
}

@customElement('mc-toggle-button')
export class ToggleButton extends Button {
    constructor() {
        super()
        this.toggle = true
    }

    render() {
        return html`
            <button type="button" class="button" variant=${this.variant} size=${this.size} ?toggle=${this.toggle}
                    ?selected=${this.selected}
                    ?disabled=${this.disabled} @click=${this.clickHandler}>
                ${this.selected ? html`
                    <slot class="icon" name="selected_icon"></slot>
                    <slot name="selected_text"></slot>` : html`
                    <slot class="icon" name="icon"></slot>
                    <slot></slot>
                `}
                <mc-ripple color=${this.rippleColor[this.variant]} ?disabled=${this.disabled}></mc-ripple>
            </button>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'mc-button': Button
    }
}
