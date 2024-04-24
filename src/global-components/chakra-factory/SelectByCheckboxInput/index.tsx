import React, {
  ChangeEvent,
  ComponentPropsWithRef,
  ReactNode,
  useCallback,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Checkbox,
  CheckboxGroup,
  Icon,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
  chakra,
  useOutsideClick,
} from "@chakra-ui/react";
import ReadOnlyInput from "../ReadOnlyInput";
import { useDisclosure } from "@chakra-ui/react";

interface propTypes extends ComponentPropsWithRef<typeof ReadOnlyInput> {
  label?: ReactNode;
  checkLists: Array<{ value: string; defaultValue?: boolean; id: string }>;
}

function SelectByCheckboxInput({ label, checkLists, ...props }: propTypes) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const htmlId = useId();

  const [checkedListValues, setCheckedListValues] = useState(() => {
    const store = [];

    for (let i = 0; i < checkLists.length; i++) {
      const item = checkLists[i];
      if (item.defaultValue) {
        store.push(item.value);
      }
    }

    return store;
  });

  const handleCheckToggle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const element = e.currentTarget;

    setCheckedListValues((prev) => {
      let oldList = [...prev];
      if (element?.checked) {
        oldList.push(element?.value);
        return oldList;
      } else {
        return oldList.filter((item) => item !== element?.value);
      }
    });
  }, []);

  return (
    <Popover
      placement="bottom-start"
      // isOpen={isOpen}
      onClose={onClose}
      onOpen={onOpen}
      matchWidth
      strategy="fixed"
    >
      <PopoverTrigger>
        <chakra.div
          data-testid="selectByCheckboxInputWrapper"
          w={"100%"}
          // onClick={onOpen}
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
              placeholder: props.inputProps?.placeholder || "Select a value",
              value: checkedListValues.join(", "),
              "data-testid": "selectByCheckboxInputReadOnlyInput",
            }}
          />
        </chakra.div>
      </PopoverTrigger>
      <PopoverContent
        // ref={popoverRef}
        role="combobox"
        width={"inherit"}
        border={"none"}
        rounded={"1.685rem"}
        shadow={"md"}
        sx={{
          outline: "none",
        }}
      >
        <PopoverBody
          p={"0.8rem"}
          sx={{
            outline: "none",
            shadow: "none",
          }}
          data-testid="checkboxGroupWrapper"
        >
          <CheckboxGroup defaultValue={checkedListValues}>
            <Stack spacing={"0"} direction={"column"}>
              {checkLists.map((item, i) => (
                <Checkbox
                  key={item.id}
                  value={item.value}
                  onChange={handleCheckToggle}
                >
                  {item.value}
                </Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default SelectByCheckboxInput;
