import Register from "./component/Register"
import { Route, Routes } from "react-router-dom";


const App = () => {
  return (<>
   
    <Routes>
      {/* <Route path="/" element={}/>  
      <Route path="/login" element={}/>  */}
      <Route path="/register" element={<Register/>}/> 
    </Routes>
  </>
  )
};

export default App;
