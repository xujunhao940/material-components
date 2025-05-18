import {css} from "lit"
export const style = css`
    :host {
        display: block;
    }

    .button {
        display: flex;
        align-items: center;
        transition: 200ms;
        position: relative;
        cursor: pointer;
        min-height: 0;
        height: 40px;
        padding-inline: 12px;
        outline: none;
        border: none;

        &[disabled] {
            cursor: default;
        }

        &[size=extraSmall] {
            font-size: 14px;
            height: 32px;
            padding-inline: 12px;
            border-radius: 16px;
            gap: 4px;

            &[selected] {
                border-radius: 8px;
            }
        }

        &[size=small] {
            font-size: 14px;
            height: 40px;
            padding-inline: 16px;
            border-radius: 20px;
            gap: 8px;

            &[selected] {
                border-radius: 8px;
            }
        }

        &[size=medium] {
            font-size: 16px;
            height: 56px;
            padding-inline: 24px;
            border-radius: 28px;
            gap: 8px;

            &[selected] {
                border-radius: 12px;
            }
        }

        &[size=large] {
            font-size: 24px;
            height: 96px;
            padding-inline: 48px;
            border-radius: 48px;
            gap: 12px;

            &[selected] {
                border-radius: 16px;
            }
        }

        &[size=extraLarge] {
            font-size: 36px;
            height: 136px;
            padding-inline: 64px;
            border-radius: 68px;
            gap: 16px;

            &[selected] {
                border-radius: 16px;
            }
        }

        &[variant=elevated] {
            background: rgb(var(--md-sys-color-surface-variant));
            color: rgb(var(--md-sys-color-primary));
            box-shadow: var(--md-sys-elevation-level1);

            &:hover {
                background: color-mix(in srgb, rgb(var(--md-sys-color-surface-variant)), rgb(var(--md-sys-color-primary)) 8%);
                box-shadow: var(--md-sys-elevation-level3);
            }

            &[toggle] {
                background: rgb(var(--md-sys-color-surface-container-low));
                color: rgb(var(--md-sys-color-primary));
            }

            &[selected] {
                background: rgb(var(--md-sys-color-primary));
                color: rgb(var(--md-sys-color-on-primary));
            }

            &[disabled] {
                background: rgba(var(--md-sys-color-on-surface), 10%);
                color: rgba(var(--md-sys-color-on-surface), .38);
                box-shadow: none;
            }
        }

        &[variant=filled] {
            background: rgb(var(--md-sys-color-primary));
            color: rgb(var(--md-sys-color-on-primary));

            &:hover {
                background: color-mix(in srgb-linear, rgb(var(--md-sys-color-primary)), rgb(var(--md-sys-color-on-primary)) 8%);
                box-shadow: var(--md-sys-elevation-level1);
            }

            &[toggle] {
                background: rgb(var(--md-sys-color-surface-container));
                color: rgb(var(--md-sys-color-on-surface-variant));
            }

            &[selected] {
                background: rgb(var(--md-sys-color-primary));
                color: rgb(var(--md-sys-color-on-primary));
            }

            &[disabled] {
                background: rgba(var(--md-sys-color-on-surface), 10%);
                color: rgba(var(--md-sys-color-on-surface), .38);
                box-shadow: none;
            }
        }

        &[variant=tonal] {
            background: rgb(var(--md-sys-color-secondary-container));
            color: rgb(var(--md-sys-color-on-secondary-container));

            &:hover {
                background: color-mix(in srgb, rgb(var(--md-sys-color-secondary-container)), rgb(var(--md-sys-color-on-secondary-container)) 8%);
                box-shadow: var(--md-sys-elevation-level1);
            }

            &[toggle] {
                background: rgb(var(--md-sys-color-secondary-container));
                color: rgb(var(--md-sys-color-on-secondary-container));
            }

            &[selected] {
                background: rgb(var(--md-sys-color-secondary));
                color: rgb(var(--md-sys-color-on-secondary));
            }

            &[disabled] {
                background: rgba(var(--md-sys-color-on-surface), 10%);
                color: rgba(var(--md-sys-color-on-surface), .38);
                box-shadow: none;
            }
        }

        &[variant=outlined] {
            border: 1px solid rgb(var(--md-sys-color-outline));
            background: transparent;
            color: rgb(var(--md-sys-color-on-surface-variant));

            &:hover {
                background: rgba(var(--md-sys-color-on-surface-variant), .08);
            }


            &[selected] {
                background: rgb(var(--md-sys-color-inverse-surface));
                color: rgb(var(--md-sys-color-inverse-on-surface));
            }

            &[disabled] {
                background: transparent;
                color: rgba(var(--md-sys-color-on-surface), .38);
                box-shadow: none;
            }
        }

        &[variant=standard] {
            background: transparent;
            color: rgb(var(--md-sys-color-primary));

            &:hover {
                background: rgba(var(--md-sys-color-primary), .08);
            }

            &[disabled] {
                background: transparent;
                color: rgba(var(--md-sys-color-on-surface), .38);
                box-shadow: none;
            }
        }
    }
`;