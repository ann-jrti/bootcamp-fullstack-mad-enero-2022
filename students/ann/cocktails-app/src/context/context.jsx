import { createContext } from "react";
import { useState } from "react";

const numberContext = createContext();



function NumberProvider({children}) {
   let number = useState(0)

    return <numberContext.Provider value={number}>{children}</numberContext.Provider>
} 

export default numberContext;
export { NumberProvider };
