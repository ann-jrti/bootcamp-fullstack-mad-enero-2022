import { createContext } from "react";

const restriction = createContext()

function restrictionProvider({children}) {
    let older = useState(false)
 
    return <restriction.Provider value={older}>{children}</restriction.Provider>
 } 

export default restriction;
export { restrictionProvider };