import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const outline = defineStyle({
    border: '1px solid #EFF1F6',
    color: "primary.300",
    bg: "transparent",
    _hover: {
        bg: "gray.50",
    },
    _disabled: {
        bg: "#DBDEE5"
    }
});
const solid = defineStyle({
    border: 'none',
    bg: "primary.300",
    color: "white",
    _hover: {
        bg: "primary.300",
    },
    _active: {
        bg: "primary.300",
    }
});
const gray = defineStyle({
    border: 'none',
    bg: "gray.50",
    color: "primary.300",
});
const ghost = defineStyle({
    border: 'none',
    bg: "transparent",
    color: "primary.300",
});

const _md = defineStyle({
    layerStyle: "base-text",
    py: '1.2rem',
})
const _lg = defineStyle({
    layerStyle: "base-text",
    py: '1.4rem',
})
const _sm = defineStyle({
    layerStyle: "base-text",
    py: '0.8rem',
})

export const buttonTheme = defineStyleConfig({
    baseStyle: {
        borderRadius: "10rem",
        height: "auto",
        minWidth: "auto",
        width: "auto",
        px: "2.4rem"
    },
    variants: { outline, solid, gray, ghost },
    sizes: { _md, _lg, _sm }
})