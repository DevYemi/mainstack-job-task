import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { chakra } from "@chakra-ui/react";
import CalendaDateInput from "../CalendaDateInput";

interface propTypes {
  label?: ReactNode;
  defaultValues?: [Date | null, Date | null];
  onDateRangeChange?: (dates: [Date, Date] | null) => void;
}

/**
 * @description A DateRangeInput picker using `CalendaDateInput` internally.
 *
 * @props
 * @param label Any ReactNode can be passed.
 * @param onDateRangeChange callback func when the date is changed.
 * @param defaultValues default valuues passed to the dateRange.
 * */
function DateRangeInput({
  label,
  defaultValues = [null, null],
  onDateRangeChange,
}: propTypes) {
  const ref = useRef<HTMLElement | undefined>(undefined);
  const [fromDate, setFromDate] = useState<Date | null>(defaultValues[0]);
  const [toDate, setToDate] = useState<Date | null>(defaultValues[1]);

  const onFromDateChange = useCallback((date: Date) => {
    setFromDate(date);
  }, []);
  const onToDateChange = useCallback((date: Date) => {
    setToDate(date);
  }, []);

  // Send value up to parent component
  useEffect(() => {
    if (fromDate && toDate) {
      if (onDateRangeChange) onDateRangeChange([fromDate, toDate]);
    } else {
      if (onDateRangeChange) onDateRangeChange(null);
    }
  }, [fromDate, onDateRangeChange, toDate]);

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
          defaultValue={fromDate}
          onDateChange={onFromDateChange}
          matchWidthRef={ref}
          inputProps={{ placeholder: "Pick a date" }}
        />
        <CalendaDateInput
          defaultValue={toDate}
          onDateChange={onToDateChange}
          matchWidthRef={ref}
          inputProps={{ placeholder: "Pick a date" }}
        />
      </chakra.div>
    </chakra.div>
  );
}

export default DateRangeInput;
