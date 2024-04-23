import React, { ComponentPropsWithRef } from 'react';
import { Icon, Input, InputGroup, InputRightElement, chakra } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";

interface propTypes {
    isOpen?: boolean,
    inputGroupProps?: ComponentPropsWithRef<typeof InputGroup>,
    inputProps?: ComponentPropsWithRef<typeof Input>,
    inputRightElement?: ComponentPropsWithRef<typeof InputRightElement>
}

function ReadOnlyInput({
    isOpen = false,
    inputGroupProps,
    inputProps,
    inputRightElement
}: propTypes) {

    return (
        <InputGroup {...inputGroupProps}>
            <Input
                border={"none"}
                pr='4.5rem'
                bg="gray.50"
                sx={{
                    outline: isOpen ? "3px  solid" : "none",
                    outlineOffset: 0,
                    backgroundColor: isOpen ? "white" : "gray.50"
                }}
                {...inputProps}
                readOnly

            />
            <InputRightElement
                top={"50%"}
                transition={"all 250ms"}
                transform={`translateY(-50%) rotate(${isOpen ? "180deg" : "0"})`}
                rotate={"180deg"}
                {...inputRightElement}>
                <Icon as={IoIosArrowDown} />
            </InputRightElement>
        </InputGroup>
    )
}

export default ReadOnlyInput