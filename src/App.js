import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Users />} />
        <Route path="/places/new" element={<NewPlace />}/>
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </Router>
  );
};

export default App;
