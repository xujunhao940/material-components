import {css} from "lit";

export const style = css`
    .container{
        display: flex;
        flex-direction: column;
        padding: 8px;
        padding-inline: 0;
    }
`

export const itemStyle = css`
    :host {
        display: inline-block;
        vertical-align: middle;
        min-width: 0;
    }

    .container {
        transition: 200ms;
        display: flex;
        flex-direction: row;
        box-sizing: border-box;
        background: rgb(var(--md-sys-color-surface));
        gap: 16px;
        width: 100%;

        padding: 8px 16px;
        height: 72px;

        &:hover {
            background: color-mix(in srgb, rgb(var(--md-sys-color-surface)), rgb(var(--md-sys-color-on-surface)) 8%);
        }

        .body {
            width: 100%;
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }

        .text {
            font-size: 16px;
            color: rgb(var(--md-sys-color-on-surface));
        }

        .description {
            width: 100%;
            font-size: 14px;
            color: rgb(var(--md-sys-color-on-surface-variant));
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 0;
            overflow: hidden;
            text-overflow: ellipsis;
        }


        &[selected=true] {
            background: rgb(var(--md-sys-color-secondary-container));

            &:hover {
                background: color-mix(in srgb, rgb(var(--md-sys-color-secondary-container)), rgb(var(--md-sys-color-on-surface)) 8%);
            }

            .text {
                color: rgb(var(--md-sys-color-on-secondary-container));
            }

            .description {
                color: rgb(var(--md-sys-color-on-surface));
            }
        }

        &[lines=a] {
            align-items: center;
        }

        &[lines=b] {
            align-items: center;

            .description {
                -webkit-line-clamp: 1;
            }
        }

        &[lines=c] {
            padding: 12px 16px;
            height: 88px;
            
            
            .body{
                align-self: center;
            }
            
            .description {
                -webkit-line-clamp: 2;
            }
        }

        &[headtype=image] {
            .head::slotted(*) {
                width: 56px;
                height: 56px;
            }
        }

        &[headtype=video] {
            padding: 12px 16px;
            padding-left: 0;
            height: 88px;

            .head::slotted(*) {
                height: 64px;
            }
        }
    }
`