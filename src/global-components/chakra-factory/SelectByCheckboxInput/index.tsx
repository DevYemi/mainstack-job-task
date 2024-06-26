import React, {
  ChangeEvent,
  ComponentPropsWithRef,
  ReactNode,
  useCallback,
  useId,
  useState,
} from "react";
import {
  Checkbox,
  CheckboxGroup,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
  chakra,
} from "@chakra-ui/react";
import ReadOnlyInput from "../ReadOnlyInput";
import { useDisclosure } from "@chakra-ui/react";

interface propTypes extends ComponentPropsWithRef<typeof ReadOnlyInput> {
  label?: ReactNode;
  checkLists: Array<{ value: string; defaultValue?: boolean; id: string }>;
  onSelectChange?: (value: Array<string> | null) => void;
}

/**
 * @description A combobox thats meant to act as a checkbox selectors.
 *
 * @props
 * @param label Any ReactNode value can be passed
 * @param checkLists Array of checkbox data to be displayed in the dropdown menu `Popover`
 * @param onSelectChange callback func with value when value changes
 * */
function SelectByCheckboxInput({
  label,
  onSelectChange,
  checkLists,
  ...props
}: propTypes) {
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

  const handleCheckToggle = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const element = e.currentTarget;

      setCheckedListValues((prev) => {
        let newList = [...prev];
        if (element?.checked) {
          newList.push(element?.value);
        } else {
          newList = newList.filter((item) => item !== element?.value);
        }

        if (newList.length > 0) {
          if (onSelectChange) onSelectChange(newList);
        } else {
          if (onSelectChange) onSelectChange(null);
        }
        return newList;
      });
    },
    [onSelectChange],
  );

  return (
    <Popover
      placement="bottom-start"
      onClose={onClose}
      onOpen={onOpen}
      matchWidth
      strategy="fixed"
    >
      <PopoverTrigger>
        <chakra.div
          data-testid="selectByCheckboxInputWrapper"
          w={"100%"}
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
              {checkLists.map((item) => (
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
