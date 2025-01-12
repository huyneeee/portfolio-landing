"use client";
import { MotionValue } from "motion/react";
import { useEffect, useState } from "react";

export default function useGetMotionValue<T = number>(
  motionValue: MotionValue<T>,
  initialValue: T
) {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    const updateValue = (newValue: T) => {
      setValue(newValue);
    };

    const unsubscribeValue = motionValue.on("change", updateValue);

    return () => {
      unsubscribeValue();
    };
  }, []);

  return value;
}
