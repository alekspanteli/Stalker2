"use client";

import { useCallback } from "react";

interface UseLightboxNavigationOptions {
  itemCount: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number | null>>;
  setImageLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}

export function useLightboxNavigation({
  itemCount,
  setSelectedIndex,
  setImageLoaded,
}: UseLightboxNavigationOptions) {
  const navigate = useCallback(
    (direction: 1 | -1) => {
      setImageLoaded(false);
      setSelectedIndex((prev) => {
        if (prev === null) return null;
        const next = prev + direction;
        if (next < 0) return itemCount - 1;
        if (next >= itemCount) return 0;
        return next;
      });
    },
    [itemCount, setImageLoaded, setSelectedIndex]
  );

  return { navigate };
}