import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('mc-ripple')
export class Ripple extends LitElement {
    @property()
    color: string = 'primary';
    @property()
    opacity: number = .2;
    @property({type: Boolean})
    disabled: boolean = false;

    static styles = css`
        :host {
            position: absolute;
            inset: 0;
            border-radius: inherit;
            overflow: hidden;
            display: block;
        }

        .ripple {
            position: absolute;
            border-radius: 50%;
            transform: scale(0);
            transition: 600ms ease-out;

            &.active {
                transform: scale(4);
                opacity: 1;
            }
        }
    `;

    render() {
        return html``;
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('mousedown', this._onMouseDown);
        this.addEventListener('mouseup', this._onMouseUp);
        this.addEventListener('mouseleave', this._onMouseUp);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('mousedown', this._onMouseDown);
        this.removeEventListener('mouseup', this._onMouseUp);
    }

    private currentRipple: HTMLElement | null = null;

    private _onMouseDown = (event: MouseEvent) => {
        if (this.disabled) return;
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;

        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.style.backgroundColor = `rgb(var(--md-sys-color-${this.color}))`;
        ripple.style.boxShadow = `0 0 12px 8px rgb(var(--md-sys-color-${this.color}))`;
        ripple.style.opacity = `${this.opacity}`;

        this.shadowRoot?.appendChild(ripple);
        requestAnimationFrame(() => {
            ripple.classList.add('active');
        });
        this.currentRipple = ripple;
    };

    private _onMouseUp = () => {
        if (!this.currentRipple) return;
        const ripple = this.currentRipple;
        ripple.style.opacity = '0';

        ripple.addEventListener('transitionend', () => {
            ripple.remove();
            if (this.currentRipple === ripple) this.currentRipple = null;
        }, {once: true});
    };
}

declare global {
    interface HTMLElementTagNameMap {
        'mc-ripple': Ripple
    }
}
