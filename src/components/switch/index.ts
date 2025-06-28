import {LitElement, html} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {style} from './style.js'

@customElement('mc-switch')
export class Switch extends LitElement {
    static styles = style

    @property({type: String})
    public icon: string = "check"
    @property({type: String})
    public mode: "never" | "onChecked" | "always" = "onChecked"
    @property({type: Boolean})
    public disabled: boolean = false
    @property({type: Boolean, reflect: true})
    public checked: boolean = false

    private _handleClick() {
        if (this.disabled) return;
        this.checked = !this.checked;
    }


    render() {
        return html`
            <div class="container" ?disabled=${this.disabled} mode=${this.mode}
                 @keydown=${(e: KeyboardEvent) => {
                     if (e.key === 'Enter' || e.key === ' ') {
                         this._handleClick()
                         e.preventDefault()
                     }
                 }} ?checked=${this.checked} @click=${this._handleClick}>
                <div>
                    <mc-icon size="16" class="thumb" name=${this.mode==="always"||(this.mode==="onChecked"&&this.checked)?this.icon:""}></mc-icon>
                </div>
            </div>
        `
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'css-switch': Switch
    }
}
