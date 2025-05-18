import {argbFromHex, themeFromSourceColor} from "../material-color-utilities-updated"
import $ from "jquery"

function setTheme(color:string = "#6750A4") {
    const theme = themeFromSourceColor(argbFromHex(color));
    let lightString = ''
    for (const [key, value] of Object.entries(theme.schemes.light.toJSON())) {
        const token = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        lightString = lightString + `--md-sys-color-${token}:${value >> 16 & 255},${value >> 8 & 255},${value & 255};`
    }
    let darkString = ''
    for (const [key, value] of Object.entries(theme.schemes.dark.toJSON())) {
        const token = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        darkString = darkString + `--md-sys-color-${token}:${value >> 16 & 255},${value >> 8 & 255},${value & 255};`
    }

    $(".colorTheme").remove()
    $(document.head).append(`
        <style class="colorTheme">
            :root {
                ${lightString}
            }
            @media (prefers-color-scheme: dark) {
                :root {
                    ${darkString}
                }
            }
        </style>
    `)
}

setTheme()