import {LitElement, html} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {style} from "./style"

@customElement('mc-button')
export class Button extends LitElement {

    @property({type: Boolean, reflect: true})
    disabled = false
    @property({type: Boolean, reflect: true})
    toggle = false
    @property({type: Boolean, reflect: true})
    selected = false
    @property({type: Boolean, reflect: true})
    flex = false
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

    borderRadius = {
        full: {
            'extraSmall': '16px',
            'small': '20px',
            'medium': '28px',
            'large': '48px',
            'extraLarge': '68px'
        }
        ,
        square: {
            'extraSmall': '8px',
            'small': '8px',
            'medium': '12px',
            'large': '16px',
            'extraLarge': '16px'
        }
    }

    get buttonElement(): HTMLButtonElement | null {
        return this.shadowRoot?.querySelector('button');
    }

    onToggled() {

    }
    onUnToggled() {

    }

    clickHandler() {
        if (this.toggle) {
            this.selected = !this.selected
            if (this.selected) this.onToggled()
            if (!this.selected) this.onUnToggled()
        }
    }


    render() {
        return html`
            ${this.flex ? html`
                <style>:host {
                    flex: 1 1 auto
                }</style>` : html``}
            <button part="button" type="button" class="button" variant=${this.variant} size=${this.size}
                    ?toggle=${this.toggle}
                    ?selected=${this.selected}
                    ?disabled=${this.disabled} @mouseup=${this.clickHandler}>
                <div>
                    <slot class="icon" name="icon"></slot>
                    <slot></slot>
                </div>
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
            <button part="button" type="button" class="button" variant=${this.variant} size=${this.size}
                    ?toggle=${this.toggle}
                    ?selected=${this.selected}
                    ?disabled=${this.disabled} @click=${this.clickHandler}>
                <div>
                    ${this.selected ? html`
                        <slot class="icon" name="selected_icon"></slot>
                        <slot name="selected_text"></slot>` : html`
                        <slot class="icon" name="icon"></slot>
                        <slot></slot>
                    `}
                </div>
                <mc-ripple color=${this.rippleColor[this.variant]} ?disabled=${this.disabled}></mc-ripple>
            </button>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'mc-button': Button,
        'mc-toggle-button': ToggleButton,
    }
}
