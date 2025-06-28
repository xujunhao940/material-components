import {html, LitElement} from "lit";
import {customElement, property} from "lit/decorators.js";
import {style, styleItem} from "./style.ts";


@customElement("mc-menu")
export class Menu extends LitElement {
    @property()
    selects: "none" | "single" | "multiple" = "none";
    @property({reflect: true})
    value: string = "";
    @property({
        converter: {
            fromAttribute: (value: string) => value.split(" "),
            toAttribute: (value: string[]) => value.join(" ")
        },
        reflect: true
    })
    values: string[] = [];
    @property({type: Boolean})
    dense = false;

    static styles = style

    setSelected() {
        const menuItems = this.querySelectorAll("mc-menu-item");
        menuItems.forEach(element => {
            if (this.selects === "single") {
                element.selected = element.value === this.value;
            } else if (this.selects === "multiple") {
                element.selected = this.values.includes(element.value);
            }
        });
    }

    onslotchange = () => {
        const menuItems = this.querySelectorAll("mc-menu-item");
        menuItems.forEach(element => {
            element.onclick = () => {
                if (this.selects === "single") {
                    if (this.value === element.value) {
                        this.value = ""
                    } else {
                        this.value = element.value
                    }
                } else if (this.selects === "multiple") {
                    if (this.values.includes(element.value)) {
                        this.values = this.values.filter(item => item !== element.value);
                    } else {
                        this.values = [...this.values, element.value];
                    }
                }
                this.setSelected();
            }
        });
    }

    updated(changedProperties: Map<string, any>) {
        super.updated(changedProperties);

        if (changedProperties.has('value') || changedProperties.has('values')) {
            this.setSelected();
        }
    }

    firstUpdated() {
        this.setSelected();
        this.onslotchange()
    }

    render() {
        return html`
            <div class="container">
                <div class="menu">
                    <slot></slot>
                </div>
            </div>
        `;
    }
}

@customElement("mc-menu-item")
export class MenuItem extends LitElement {
    @property()
    value: string = "";
    @property({type: Boolean})
    disabled = false;
    @property({type: Boolean, reflect: true})
    selected = false;

    render() {
        return html`
            <button class="container" ?selected=${this.selected} ?disabled=${this.disabled} @click=${()=>{}}>
                ${this.selected ? html`
                    <mc-icon class="head" name="check"></mc-icon>` : html`
                    <slot class="head" name="head"></slot>
                `}
                <span><slot></slot></span>
                <slot class="bottom" name="bottom"></slot>
                <mc-ripple color="on-surface" ?disabled=${this.disabled}></mc-ripple>
            </button>
        `;
    }

    static styles = styleItem
}

@customElement("mc-dropdown")
export class Dropdown extends LitElement {
    @property({reflect: true})
    open = false;
    @property()
    trigger: "click" | "hover" | "contextmenu" = "click";

    render() {
        return html`
            <div class="dropdown">
                <slot name="trigger"></slot>
                <slot></slot>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "mc-menu": Menu;
        "mc-menu-item": MenuItem;
        "mc-dropdown": Dropdown;
    }
}