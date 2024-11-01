import { useEffect, useRef, useState } from "react";

export function useResizeDetection(debounceDelay = 100) {
  const [isResizing, setIsResizing] = useState(false);
  const timeoutIdRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsResizing(true);
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
      timeoutIdRef.current = setTimeout(() => {
        setIsResizing(false);
      }, debounceDelay);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutIdRef.current!);
    };
  }, [debounceDelay]);

  return { isResizing };
}
