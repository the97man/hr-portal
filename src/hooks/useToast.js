import { useCallback, useEffect, useRef, useState } from "react";

export default function useToast() {
  const [toast, setToast] = useState("");
  const timer = useRef(null);
  const showToast = useCallback((message) => {
    setToast(message);
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setToast(""), 3200);
  }, []);
  useEffect(
    () => () => timer.current && window.clearTimeout(timer.current),
    [],
  );
  return { toast, setToast, showToast };
}
