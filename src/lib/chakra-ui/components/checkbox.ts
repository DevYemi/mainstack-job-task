import { checkboxAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(checkboxAnatomy.keys)

const baseStyle = definePartsStyle({
    label: {
        "--chakra-fontSizes-md": "1.6rem",
        lineHeight: "2.4rem",
        fontWeight: 600,
        marginLeft: "1.2rem"
    },
    control: {
        w: "1.7rem",
        h: "1.7rem",
        rounded: "0.2rem",
        _checked: {
            background: "primary.300",
            borderColor: "primary.300",
            _hover: {
                background: "primary.300",
                borderColor: "primary.300",
            }
        },
        _focus: {
            outline: "none",
            _focusVisible: {
                outline: "none",
            }
        }
    },
    icon: {
        "--chakra-fontSizes-2xs": "1rem",
    },
    container: {
        px: "1.4rem",
        py: "1.6rem",
    }
})

export const checkboxTheme = defineMultiStyleConfig({ baseStyle })