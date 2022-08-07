import { useCallback, useEffect } from "react";

export function useOnKeyPress(
  key: KeyboardEvent["key"],
  callback: () => void
): void {
  const handleCallback = useCallback(
    (event: KeyboardEvent) => {
      console.log({ event });
      if (event.key === key) {
        return callback();
      }
    },
    [key, callback]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleCallback);

    return () => {
      window.removeEventListener("keydown", handleCallback);
    };
  }, [handleCallback]);
}
