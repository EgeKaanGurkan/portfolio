import React, { createContext, useContext, useRef, ReactNode } from "react";

// Define the type for the context function
type IncrementInstanceCount = () => number;

// Create a context to keep track of the instance count with a default function
const RevealTextContext = createContext<IncrementInstanceCount>(() => 0);

interface RevealTextProviderProps {
  children: ReactNode;
}

const RevealTextProvider: React.FC<RevealTextProviderProps> = ({ children }) => {
  const instanceCountRef = useRef(0);

  const incrementInstanceCount: IncrementInstanceCount = () => {
    instanceCountRef.current += 1;
    return instanceCountRef.current;
  };

  return (
    <RevealTextContext.Provider value={incrementInstanceCount}>
      {children}
    </RevealTextContext.Provider>
  );
};

const useRevealTextInstance = () => useContext(RevealTextContext);

export { RevealTextProvider, useRevealTextInstance };