import {css} from "lit"


export const style = css`
    :host {
        display: block;
        width: fit-content;
    }

    .container {
        width: 100%;
        position: relative;
    }

    .menu {
        display: flex;
        flex-direction: column;
        padding: 8px 0;
        border-radius: 4px;
        min-width: 7rem;
        max-width: 17.5rem;
        box-sizing: border-box;
        z-index: 99;
        transition: 200ms;
        width: 100%;
        background: rgb(var(--md-sys-color-surface-container));
        box-shadow: var(--md-sys-elevation-level2);
    }

    [position=top-left] {
        transform-origin: 0 0;
    }

    [position=top-right] {
        transform-origin: 100% 0;
    }

    [position=bottom-left] {
        transform-origin: 0 100%;
    }

    [position=bottom-right] {
        transform-origin: 100% 100%;
    }

    [closed] {
        opacity: .8;
    }

    ::slotted(mc-divider) {
        margin: 7.5px 0;
    }
`

export const styleItem = css`
    .container {
        position: relative;
        background: transparent;
        border: none;
        outline: none;
        box-sizing: border-box;
        text-align: left;
        display: flex;
        justify-items: center;
        align-items: center;
        color: rgb(var(--md-sys-color-on-surface));
        gap: 12px;
        width: 100%;
        font-size: 14px;
        padding-inline: 12px;
        transition: 200ms;
        height: 48px;
        overflow: hidden;

        &:hover {
            background: color-mix(in srgb, rgb(var(--md-sys-color-surface-container)), rgb(var(--md-sys-color-on-surface)) 8%);
        }

        &[selected] {
            background: rgb(var(--md-sys-color-secondary-container));
            color: rgb(var(--md-sys-color-on-secondary-container));
        }
        

        &[disabled] {
            background: transparent;
            color: rgba(var(--md-sys-color-on-surface), .38);
        }

        & > span {
            margin: auto;
            margin-left: 0;
            user-select: none;
        }

        .head {
            display: flex;
            margin-right: 8px;
        }

        .bottom {
            display: flex;
        }
    }
`