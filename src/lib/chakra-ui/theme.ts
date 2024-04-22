
import { extendTheme } from "@chakra-ui/react"

const chakraUiCustomTheme = extendTheme({
    styles: {
        global: {
            'html': {
                fontSize: "62.5%"
            },
            'body': {
                fontSize: "1.6rem"
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
        }
    },
    colors: {
        "white": "#FFFFFF",
        "primary": {
            300: "#131316"
        },
        "gray": {
            50: "#EFF1F6",
            400: "#56616B"
        }
    }
})

export { chakraUiCustomTheme }