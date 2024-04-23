import React, { ComponentPropsWithRef, MutableRefObject, ReactNode, useEffect, useId, useMemo, useState } from 'react';
import { Icon, Popover, PopoverBody, PopoverContent, PopoverTrigger, chakra, useMultiStyleConfig } from '@chakra-ui/react';
import ReadOnlyInput from '../ReadOnlyInput';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { useDisclosure, useTheme } from '@chakra-ui/react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { createDebounceFunc } from '@/utils/createDebounceFunc';

interface propTypes extends ComponentPropsWithRef<typeof ReadOnlyInput> {
    label?: ReactNode,
    matchWidthRef?: MutableRefObject<HTMLElement | undefined>
}

/* 
Used type "Any" here cause passing `DayPicker` component to chakara causes `DayPicker` to lose some certain props
Making Typescript complain
*/
const NineTailsDayPicker: any = chakra(DayPicker)

function CalendaDateInput({ label, matchWidthRef, ...props }: propTypes) {
    const [selected, setSelected] = React.useState<Date>();
    const daypickerStyles = useMultiStyleConfig("ReactDayPicker")
    const { isOpen, onClose, onOpen } = useDisclosure();
    const theme = useTheme();
    const htmlId = useId();
    const [popOverContentWidth, setPopOverContentWidth] = useState("inherit");


    const inputValue = useMemo(() => selected ? format(selected, 'PP') : "", [selected]);



    useEffect(() => {
        const element = matchWidthRef?.current
        const calculatePopoverContent = createDebounceFunc(() => {
            if (!element) return;
            setPopOverContentWidth(`${element.offsetWidth / 10}rem`);
        }, 500)

        calculatePopoverContent()

        window.addEventListener("resize", calculatePopoverContent)


        return () => {
            window.removeEventListener("resize", calculatePopoverContent)
        }
    }, [matchWidthRef])

    return (
        <Popover
            onClose={onClose}
            onOpen={onOpen}
            placement="bottom-start"
        >
            <PopoverTrigger>
                <chakra.div
                    w={"100%"}
                    onClick={onOpen}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"1.2rem"}
                >
                    {label && <chakra.label htmlFor={htmlId} layerStyle={"base-text"}>{label}</chakra.label>}

                    <ReadOnlyInput
                        {...props}
                        isOpen={isOpen}
                        inputProps={{
                            ...props.inputProps,
                            id: htmlId,
                            placeholder: props.inputProps?.placeholder || "Pick a date",
                            value: inputValue,
                        }}
                    />
                </chakra.div>
            </PopoverTrigger>
            <PopoverContent border={"none"} rounded={'1.685rem'} shadow={"md"} w={popOverContentWidth}>
                <PopoverBody p={"3.4rem"} >
                    <NineTailsDayPicker
                        mode="single"
                        selected={selected}
                        sx={daypickerStyles}
                        onSelect={setSelected as any}
                        components={{
                            IconLeft: ({ ...props }) => <Icon w={"1.4rem"} h={"1.4rem"} as={IoIosArrowBack} />,
                            IconRight: ({ ...props }) => <Icon w={"1.4rem"} h={"1.4rem"} as={IoIosArrowForward} />
                        }}
                        modifiersStyles={{
                            selected: {
                                backgroundColor: theme.colors.primary["300"],
                                borderRadius: "100%",
                                color: "white"
                            }
                        }}

                    />
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}

export default CalendaDateInput