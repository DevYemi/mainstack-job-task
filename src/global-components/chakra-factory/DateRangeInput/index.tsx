import React, { ReactNode, useRef } from "react";
import { chakra } from "@chakra-ui/react";
import CalendaDateInput from "../CalendaDateInput";

interface propTypes {
  label?: ReactNode;
}

/**
 * @description A DateRangeInput picker using `CalendaDateInput` internally.
 *
 * @props
 * @param label Any ReactNode can be passed.
 * */
function DateRangeInput({ label }: propTypes) {
  const ref = useRef<HTMLElement | undefined>(undefined);
  return (
    <chakra.div
      data-testid="dateRangeInputWrapper"
      display={"flex"}
      flexDirection={"column"}
      gap={"1.2rem"}
      flexWrap={"wrap"}
      ref={ref as any}
    >
      {label && <chakra.label layerStyle={"base-text"}>{label}</chakra.label>}
      <chakra.div
        display={"flex"}
        flexDirection={{ base: "column", sm: "row" }}
        alignItems={"center"}
        gap={"0.6rem"}
      >
        <CalendaDateInput
          matchWidthRef={ref}
          inputProps={{ placeholder: "Pick a date" }}
        />
        <CalendaDateInput
          matchWidthRef={ref}
          inputProps={{ placeholder: "Pick a date" }}
        />
      </chakra.div>
    </chakra.div>
  );
}

export default DateRangeInput;
