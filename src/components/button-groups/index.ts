import {css, html, LitElement} from "lit";
import {customElement} from "lit/decorators.js";
import {type Button} from "../button";
import {map} from "jquery";

@customElement("mc-button-group")
export class ButtonGroups extends LitElement {
    static styles = [
        css`
            .container {
                display: flex;
                align-items: center;
                gap: 8px;
            }
        `,
    ];


    handleSlotChange = (event?: Event) => {
        const slot = event
            ? (event.target as HTMLSlotElement)
            : (this.renderRoot.querySelector("slot") as HTMLSlotElement);

        const assignedNodes = slot.assignedElements({flatten: true});

        assignedNodes.forEach((element: Element) => {
            if (element instanceof HTMLElement) {
                element.addEventListener("mousedown", () => {
                    element.shadowRoot.querySelector<HTMLDivElement>("button div").style.paddingInline = "1rem";
                });

                element.addEventListener("mouseup", () => {
                    element.shadowRoot.querySelector<HTMLDivElement>("button div").style.paddingInline = "0";
                });
            }
        });
    };

    firstUpdated() {
        this.handleSlotChange();
    }


    render() {
        return html`
            <div class="container" part="container">
                <slot></slot>
            </div>
        `;
    }
}

@customElement('mc-connected-button-group')
export class ConnectedButtonGroup extends ButtonGroups {

    static styles = [
        css`
            .container {
                display: flex;
                align-items: center;
                gap: 2px;
            }
        `,
    ];

    resetRadius() {
        for (let i = 0; i < this.children.length; i++) {
            const child = this.children[i] as Button;
            const childButton = child.buttonElement;
            childButton.style.borderRadius = child["borderRadius"]["square"][child.size];
            if (i === 0) {
                childButton.style.borderTopLeftRadius = child["borderRadius"]["full"][child.size];
                childButton.style.borderBottomLeftRadius = child["borderRadius"]["full"][child.size];
            }
            if (i === this.children.length - 1) {
                childButton.style.borderTopRightRadius = child["borderRadius"]["full"][child.size];
                childButton.style.borderBottomRightRadius = child["borderRadius"]["full"][child.size];
            }
        }
    }

    onslotchange = () => {
        (async () => {
            await this.updateComplete;
            this.resetRadius()
            for (let i = 0; i < this.children.length; i++) {
                const child = this.children[i] as Button;
                const childButton = child.buttonElement;

                child.onUnToggled = () => {
                    console.log("untoggled")
                    this.resetRadius()
                }

                child.onToggled = () => {
                    console.log("toggled")
                    this.resetRadius()
                    map(this.children, (child: Button) => {
                        child.selected = false
                    });
                    child.selected = true
                    childButton.style.borderRadius = child["borderRadius"]["full"][child.size];
                }
            }
        })()
        this.handleSlotChange()
    };


    firstUpdated() {
        this.onslotchange()
    }

    constructor() {
        super();
    }
}


declare global {
    interface HTMLElementTagNameMap {
        "mc-button-group": ButtonGroups,
        "mc-connected-button-group": ConnectedButtonGroup,
    }
}