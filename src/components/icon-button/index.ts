import {html} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {style} from "./style"
import {Button} from "../button";

@customElement('mc-icon-button')
export class IconButton extends Button {
    @property({type: Boolean})
    disabled = false
    @property({type: Boolean})
    toggle = false
    @property({type: Boolean})
    selected = false
    @property()
    shape: 'default' | 'narrow' | 'wide' = 'default'
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

    iconSize = {
        extraSmall: 20,
        small: 24,
        medium: 24,
        large: 32,
        extraLarge: 40
    }

    get buttonElement(): HTMLButtonElement | null {
        return this.shadowRoot?.querySelector('button');
    }

    render() {
        return html`
            <button part="button" type="button" class="button" variant=${this.variant} size=${this.size}
                    ?toggle=${this.toggle}
                    ?selected=${this.selected} shape=${this.shape}
                    ?disabled=${this.disabled} @mouseup=${this.clickHandler}>
                <div>
                    <mc-icon size=${this.iconSize[this.size]}>
                        <slot></slot>
                    </mc-icon>
                </div>
                <mc-ripple color=${this.rippleColor[this.variant]} ?disabled=${this.disabled}></mc-ripple>
            </button>
        `;
    }


    static styles = style
}

@customElement('mc-toggle-icon-button')
export class ToggleIconButton extends IconButton {
    constructor() {
        super()
        this.toggle = true
    }

    render() {
        return html`
            <button part="button" type="button" class="button" variant=${this.variant} size=${this.size}
                    ?toggle=${this.toggle}
                    ?selected=${this.selected} shape=${this.shape}
                    ?disabled=${this.disabled} @mouseup=${this.clickHandler}>
                <div>
                    ${this.selected ? html`
                        <mc-icon size=${this.iconSize[this.size]}>
                            <slot class="icon" name="selected"></slot>
                        </mc-icon>` : html`
                        <mc-icon size=${this.iconSize[this.size]}>
                            <slot></slot>
                        </mc-icon>
                    `}
                </div>
                <mc-ripple color=${this.rippleColor[this.variant]} ?disabled=${this.disabled}></mc-ripple>
            </button>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'mc-icon-button': IconButton,
        'mc-toggle-icon-button': ToggleIconButton,
    }
}
