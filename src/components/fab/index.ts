import {customElement, property} from "lit/decorators.js";
import {html, LitElement} from "lit";
import {style, menuStyle} from "./style.ts";
import {createRef, ref} from "lit/directives/ref.js"

@customElement('mc-fab')
export class Fab extends LitElement {
    @property()
    size: 'small' | 'medium' | 'large' = 'medium'
    @property()
    color: 'p' | 's' | 't' | 'pc' | 'sc' | 'tc' = 'pc'
    @property({type: Boolean})
    disabled = false

    iconSize = {
        small: 24,
        medium: 28,
        large: 36
    }

    height = {
        small: 56,
        medium: 80,
        large: 96
    }

    borderRadius = {
        small: 16,
        medium: 20,
        large: 28
    }

    backgroundColor = {
        p: "primary",
        s: "secondary",
        t: "tertiary",
        pc: "primary-container",
        sc: "secondary-container",
        tc: "tertiary-container"
    }

    get buttonElement(): HTMLButtonElement | null {
        return this.shadowRoot?.querySelector('button');
    }

    render() {
        return html`
            <style>
                .button {
                    width: ${this.height[this.size]}px !important;
                    height: ${this.height[this.size]}px !important;
                    background: rgba(var(--md-sys-color-${this.backgroundColor[this.color]}));
                    color: rgba(var(--md-sys-color-on-${this.backgroundColor[this.color]}));
                    border-radius: ${this.borderRadius[this.size]}px;

                    &:hover {
                        background: color-mix(in srgb, rgba(var(--md-sys-color-${this.backgroundColor[this.color]})), rgba(var(--md-sys-color-on-${this.backgroundColor[this.color]})) 8%);
                        box-shadow: var(--md-sys-elevation-level4);
                    }
                }
            </style>
            <button part="button" type="button" class="button" color=${this.color} size=${this.size}
                    ?disabled=${this.disabled}>
                <mc-icon size=${this.iconSize[this.size]}>
                    <slot></slot>
                </mc-icon>
                <mc-ripple color=${`on-${this.backgroundColor[this.color]}`} ?disabled=${this.disabled}></mc-ripple>
            </button>
        `
    }

    static styles = style
}

@customElement('mc-extended-fab')
export class ExtendedFab extends Fab {
    constructor() {
        super();
    }

    @property()
    icon: string = ''

    fontSize = {
        small: 16,
        medium: 22,
        large: 24
    }

    lineHeight = {
        small: 24,
        medium: 28,
        large: 32
    }

    padding = {
        small: [16, 8],
        medium: [26, 12],
        large: [28, 16]
    }

    render() {
        return html`
            <style>
                .button {
                    height: ${this.height[this.size]}px;
                    width: auto;
                    background: rgba(var(--md-sys-color-${this.backgroundColor[this.color]}));
                    color: rgba(var(--md-sys-color-on-${this.backgroundColor[this.color]}));
                    border-radius: ${this.borderRadius[this.size]}px;
                    font-size: ${this.fontSize[this.size]}px;
                    line-height: ${this.lineHeight[this.size]}px;
                    
                    &:hover {
                        background: color-mix(in srgb, rgba(var(--md-sys-color-${this.backgroundColor[this.color]})), rgba(var(--md-sys-color-on-${this.backgroundColor[this.color]})) 8%);
                        box-shadow: var(--md-sys-elevation-level4);
                    }
                }

                .icon {
                    padding-left: ${this.padding[this.size][0]}px;
                    padding-right: ${this.padding[this.size][1]}px;
                }

                .label {
                    padding-right: ${this.borderRadius[this.size]}px
                }
            </style>
            <button part="button" type="button" class="button" color=${this.color} size=${this.size}
                    ?disabled=${this.disabled}>
                <mc-icon class="icon" size=${this.iconSize[this.size]} name=${this.icon}></mc-icon>
                <span class="label">
                        <slot></slot>
                    </span>
                <mc-ripple color=${`on-${this.backgroundColor[this.color]}`} ?disabled=${this.disabled}></mc-ripple>
            </button>
        `
    }
}

@customElement('mc-fab-menu')
export class FabMenu extends LitElement {
    @property()
    icon: string = ''
    @property()
    color: 'p' | 's' | 't' = 'p'
    @property()
    size: 'small' | 'medium' | 'large' = 'medium'

    @property()
    open = false

    height = {
        small: 56,
        medium: 80,
        large: 96
    }

    closeButtonRef = createRef<Fab>()

    static styles = menuStyle

    onslotchange = () => {
        (async () => {
            await this.updateComplete;
            for (let i = 0; i < this.children.length; i++) {
                const child = this.children[i] as Fab;
                const childButton = child.buttonElement;
                child.color = `${this.color}c`
                childButton.style.borderRadius = `${child["height"][child.size] / 2}px`
                child.style.width = `80%`

                child.onclick = () => {
                    this.clickHandler()
                }
            }
        })()
    }

    firstUpdated() {
        this.onslotchange()
    }

    clickHandler() {
        this.open = !this.open

        for (let i = this.children.length - 1; i >= 0; i--) {
            const child = this.children[i] as Fab;
            const delay = (this.children.length - i) * 20 + 20;

            setTimeout(() => {
                if (this.open) {
                    child.style.width = `100%`;
                } else {
                    child.style.width = `60%`;
                }
            }, delay);
        }

        if (this.open) {
            this.closeButtonRef.value.buttonElement.style.borderRadius = "28px"
        } else {
            this.closeButtonRef.value.buttonElement.style.borderRadius = null
        }
    }

    render() {
        return html`
            <style>
                :host {
                    height: ${this.open ? 'unset' : `${this.height[this.size] + 32}px`};
                }

                .fabs {
                    width: ${this.open ? 'unset' : `${this.height[this.size] + 32}px`};
                }
            </style>
            <div class="container">
                <div class="fabs" open=${this.open}>
                    <slot></slot>
                </div>
                <mc-fab class="close-button" size=${this.open ? "small" : this.size} color=${this.color}
                        @mouseup=${this.clickHandler} ${ref(this.closeButtonRef)}>
                    ${this.open ? "close" : this.icon}
                </mc-fab>
            </div>
        `
    }
}


declare global {
    interface HTMLElementTagNameMap {
        'mc-fab': Fab,
        'mc-extended-fab': ExtendedFab,
        'mc-fab-menu': FabMenu
    }
}