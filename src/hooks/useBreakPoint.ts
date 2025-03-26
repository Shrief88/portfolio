import { useState, useEffect } from "react";

const useBreakpoint = (query: string) => {
  // Default to false during server-side rendering to ensure consistent hydration
  const [matches, setMatches] = useState(false);
  
  // Add a state to track if we've hydrated
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
    setMatches(window.matchMedia(query).matches);
    const mediaQuery = window.matchMedia(query);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [query]);

  // Only return the real value after hydration
  // Before hydration, always return false
  return hasHydrated ? matches : false;
};

export default useBreakpoint;
