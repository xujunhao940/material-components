import {LitElement, html} from 'lit'
import {customElement, property} from 'lit/decorators.js'
import {itemStyle, style} from "./style.ts";

@customElement('mc-list')
export class List extends LitElement {
    render() {
        return html`
            <div class="container" part="container">
                <slot></slot>
            </div>
        `
    }

    static styles = style
}

@customElement('mc-list-item')
export class ListItem extends LitElement {
    @property({type: String})
    text = '';
    @property({type: String})
    description = '';
    @property({type: String})
    headType: 'icon' | 'image' | 'video' = 'icon';
    @property({type: Boolean})
    selected = false;
    @property({type: Boolean})
    disabled = false;
    @property({type: Number})
    lines: 0 | 1 | 2 = 0;

    render() {
        return html`
            <div class="container" part="container" ?selected=${this.selected} ?disabled=${this.disabled}
                 lines=${{0: 'a', 1: 'b', 2: 'c'}[this.lines]} headtype=${this.headType}>
                <slot class="head" name="head"></slot>
                <div class="body">
                    <span class="text">${this.text}</span>
                    <span class="description">${this.description}</span>
                </div>
                <slot class="bottom" name="bottom"></slot>
            </div>
        `
    }

    static styles = itemStyle
}