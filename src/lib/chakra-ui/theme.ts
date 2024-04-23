
import { extendTheme, position } from "@chakra-ui/react"
import { buttonTheme } from "./components/button"
import { inputTheme } from "./components/input"
import { reactDayPickerTheme } from "./components/reactDayPicker"
import { checkboxTheme } from "./components/checkbox"

const chakraUiCustomTheme = extendTheme({
    components: {
        Button: buttonTheme,
        Input: inputTheme,
        Checkbox: checkboxTheme,
        ReactDayPicker: reactDayPickerTheme
    },
    styles: {
        global: {
            'html': {
                fontSize: "62.5%"
            },
            'body': {
                "--chakra-shadows-outline": "#131316",
                fontSize: "1.6rem",
            }
        },
    },
    layerStyles: {
        "base-text": {
            fontWeight: 600,
            fontSize: "1.6rem",
            lineHeight: "2.4rem",
        },
        "xxs-text": {
            fontWeight: 500,
            fontSize: "1.4rem",
            lineHeight: "1.6rem",
        },
        "lg-text": {
            fontWeight: 700,
            fontSize: "2.4rem",
            lineHeight: "3.2rem",
        },
        "xl-text": {
            fontWeight: 700,
            fontSize: "2.8rem",
            lineHeight: "3.8rem",
        },
        "2xl-text": {
            fontWeight: 700,
            fontSize: "3.6rem",
            lineHeight: "4.8rem",
        }
    },
    colors: {
        "white": "#FFFFFF",
        "primary": {
            300: "#131316"
        },
        "gray": {
            50: "#EFF1F6",
            300: "#888F95",
            400: "#56616B"
        }
    }
})

export { chakraUiCustomTheme }