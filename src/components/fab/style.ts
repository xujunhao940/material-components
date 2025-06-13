import {css} from "lit";

export const style = css`
    :host {
        display: inline-block;
        vertical-align: middle;
        min-width: 0;
        transition: 200ms;
    }

    .button {
        width: 100%;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 200ms;
        position: relative;
        cursor: pointer;
        min-height: 0;
        outline: none;
        border: none;
        box-shadow: var(--md-sys-elevation-level3);

        &[disabled] {
            cursor: default;
            background: transparent!important;
            color: rgba(var(--md-sys-color-on-surface), .38)!important;
            box-shadow: none!important;
        }
        
        &:hover{
            box-shadow: var(--md-sys-elevation-level4);
        }
    }

`

export const menuStyle = css`
    :host {
        max-height: 50vh;
        position: relative;
        display: inline-block;
        vertical-align: middle;
        min-width: 0;
        transition: 200ms ease-in-out;
        overflow: hidden;
        display: flex;
        interpolate-size: allow-keywords;
    }

    .container {
        height: auto;
        max-height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 8px;
        overflow: visible;
    }

    .fabs {
        opacity: .4;
        overflow: scroll;
        transition: 200ms ease-in-out;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 4px;
        height: 0;
        interpolate-size: allow-keywords;
        padding: 0;


        &[open=true] {
            padding: 1rem;
            padding-bottom: 80px;
            opacity: 1;
            height: auto;
        }
    }

    .close-button {
        position: absolute;
        right: 1rem;
        bottom: 1rem;
    }
`