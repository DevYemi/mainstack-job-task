import React, {
  ComponentPropsWithRef,
  MutableRefObject,
  ReactNode,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useState,
} from "react";
import {
  Icon,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  chakra,
  useMultiStyleConfig,
} from "@chakra-ui/react";
import ReadOnlyInput from "../ReadOnlyInput";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { useDisclosure, useTheme } from "@chakra-ui/react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { createDebounceFunc } from "@/utils/createDebounceFunc";

interface propTypes extends ComponentPropsWithRef<typeof ReadOnlyInput> {
  label?: ReactNode;
  matchWidthRef?: MutableRefObject<HTMLElement | undefined>;
  onDateChange?: (date: Date) => void;
  defaultValue?: Date | null;
}

/* 
Used type "Any" here cause passing `DayPicker` component to chakara causes `DayPicker` to lose some certain props
Making Typescript complain
*/
const NineTailsDayPicker: any = chakra(DayPicker);

/**
 * @description A CalendarInput picker using `react-day-picker` internally and chakra-ui `Popover` component
 *
 * @props
 * @param label Any ReactNode can be passed.
 * @param matchWidthRef Ref element you want the dropdown popover width to match
 * @param onDateChange callback func with new date picked by user
 * @param defaultValue default value passed to the date picker
 * */
function CalendaDateInput({
  label,
  defaultValue = null,
  onDateChange,
  matchWidthRef,
  ...props
}: propTypes) {
  const [selected, setSelected] = React.useState<Date | null>(defaultValue);
  const daypickerStyles = useMultiStyleConfig("ReactDayPicker");
  const { isOpen, onClose, onOpen } = useDisclosure();
  const theme = useTheme();
  const htmlId = useId();
  const [popOverContentWidth, setPopOverContentWidth] = useState("inherit");

  const inputValue = useMemo(
    () => (selected ? format(selected, "PP") : ""),
    [selected],
  );

  const handleOnSelect = useCallback(
    (date: Date) => {
      setSelected(date);
      if (onDateChange) {
        onDateChange(date);
      }
    },
    [onDateChange],
  );

  useEffect(() => {
    const element = matchWidthRef?.current;
    const calculatePopoverContent = createDebounceFunc(() => {
      if (!element) return;
      setPopOverContentWidth(`${element.offsetWidth / 10}rem`);
    }, 500);

    calculatePopoverContent();

    window.addEventListener("resize", calculatePopoverContent);

    return () => {
      window.removeEventListener("resize", calculatePopoverContent);
    };
  }, [matchWidthRef]);

  return (
    <Popover onClose={onClose} onOpen={onOpen} placement="bottom-start">
      <PopoverTrigger>
        <chakra.div
          data-testid="calendaDateInputWrapper"
          w={"100%"}
          onClick={onOpen}
          display={"flex"}
          flexDirection={"column"}
          gap={"1.2rem"}
        >
          {label && (
            <chakra.label htmlFor={htmlId} layerStyle={"base-text"}>
              {label}
            </chakra.label>
          )}

          <ReadOnlyInput
            {...props}
            isOpen={isOpen}
            inputProps={{
              ...props.inputProps,
              id: htmlId,
              placeholder: props.inputProps?.placeholder || "Pick a date",
              value: inputValue,
              "data-testid": "calendaDateInputReadOnlyInput",
            }}
          />
        </chakra.div>
      </PopoverTrigger>
      <PopoverContent
        border={"none"}
        rounded={"1.685rem"}
        shadow={"md"}
        w={popOverContentWidth}
      >
        <PopoverBody p={"3.4rem"}>
          <NineTailsDayPicker
            data-testid="nineTailsDayPicker"
            mode="single"
            selected={selected}
            sx={daypickerStyles}
            onSelect={handleOnSelect}
            defaultMonth={selected}
            components={{
              IconLeft: ({ ...props }) => (
                <Icon w={"1.4rem"} h={"1.4rem"} as={IoIosArrowBack} />
              ),
              IconRight: ({ ...props }) => (
                <Icon w={"1.4rem"} h={"1.4rem"} as={IoIosArrowForward} />
              ),
            }}
            modifiersStyles={{
              selected: {
                backgroundColor: theme.colors.primary["300"],
                borderRadius: "100%",
                color: "white",
              },
            }}
          />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default CalendaDateInput;
