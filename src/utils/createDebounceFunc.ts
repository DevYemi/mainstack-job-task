/**
 * @Desc: Creates and returns a debounced function.
 *
 * @Params {function} cb: Function that will be called when the deplay timesout.
 * @Params {number} delay: delay passed to setTimeout.
 *  */
export function createDebounceFunc(cb: Function, delay: number) {
  let timeoutRef: null | NodeJS.Timeout = null;

  return function (...args: any[]) {
    if (timeoutRef) {
      clearTimeout(timeoutRef);
    }

    timeoutRef = setTimeout(() => {
      cb.apply(null, args);
      clearTimeout(timeoutRef!);
      timeoutRef = null;
    }, delay);
  };
}
