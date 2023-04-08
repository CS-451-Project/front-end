import { createContext, useContext, useState } from "react";

// This is the context that we will use to pass the state and the function to update the state to the components
// So that we can use the state and the function to update the state in any component
const StepperContext = createContext({ userData: "", setUserData: null });

// This is the provider that we will use to wrap the components that we want to have access to the state and the function to update the state
// So that we can use the state and the function to update the state in any component
export function UseContextProvider({ children }) {
  const [userData, setUserData] = useState("");

  return (
    <StepperContext.Provider value={{ userData, setUserData }}>
      {children}
    </StepperContext.Provider>
  );
}

// This is the hook that we will use to get the state and the function to update the state from the context
// So that we can use the state and the function to update the state in any component
export function useStepperContext() {
  const { userData, setUserData } = useContext(StepperContext);

  return { userData, setUserData };
}
