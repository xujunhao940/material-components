import {css} from "lit";

export const style = css`
    .container {
        display: inline-flex;
        position: relative;
        border-radius: 16px;
        height: 32px;
        width: 52px;
        transition: 150ms;
        background: rgb(var(--md-sys-color-surface-container-highest));
        box-sizing: border-box;
        border: 2px solid rgb(var(--md-sys-color-outline));

        .input {
            display: none;
        }

        .thumb {
            transition: 150ms;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            border-radius: 8px;
            width: 16px;
            height: 16px;
            background: rgb(var(--md-sys-color-outline));
            color: rgb(var(--md-sys-color-surface-container-highest));
            left: 5px;

            display: flex;
            justify-content: center;
            align-items: center;
            line-height: 0px;
        }
        
        &[mode="always"] {
            .thumb {
                border-radius: 12px;
                left: 2px;
                width: 24px;
                height: 24px;
            }
        }

        &:active .thumb {
            width: 28px;
            height: 28px;
            border-radius: 14px;
            left: 0px;
        }

        &:hover {
            .thumb {
                background: rgb(var(--md-sys-color-on-surface-variant));
            }
        }

        &[disabled] {
            touch-action: none;
            pointer-events: none;
            border-color: rgb(var(--md-sys-color-surface-container-highest));
            background: transparent;

            .thumb {
                color: rgba(var(--md-sys-color-surface-container-highest), .38);
                background: rgba(var(--md-sys-color-on-surface), .38);
            }
        }


        &[checked] {
            background: rgb(var(--md-sys-color-primary));
            border: 2px solid rgb(var(--md-sys-color-primary));

            .thumb {
                border-radius: 12px;
                left: 22px;
                width: 24px;
                height: 24px;
                background: rgb(var(--md-sys-color-on-primary));
                color: rgb(var(--md-sys-color-on-primary-container));
            }

            &:active .thumb {
                width: 28px;
                height: 28px;
                border-radius: 14px;
                left: 20px;
            }

            &:hover {
                .thumb {
                    background: rgb(var(--md-sys-color-primary-container));
                }
            }

            &[disabled] {
                border: transparent;
                background: rgb(var(--md-sys-color-on-surface), .12);

                .thumb {
                    color: rgba(var(--md-sys-color-on-surface), .38);
                    background: rgb(var(--md-sys-color-surface));
                }
            }
        }
    }
`