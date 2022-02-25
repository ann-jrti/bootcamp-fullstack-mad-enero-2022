import { createContext } from "react";
import { useState } from "react";

const ageRestriction = createContext();

function AgeRestrictionProvider({ children }) {
    const ageState = useState(false)
    console.log(ageState);

    return <ageRestriction.Provider value={ageState}>{children}</ageRestriction.Provider>
}

export default ageRestriction;
export { AgeRestrictionProvider };