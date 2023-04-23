import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
const App = () => {
  return (
    <Router>
      <MainNavigation />
     <main>
     <Routes>
        <Route path="/" exact element={<Users />} />
        <Route path="/places/new" element={<NewPlace />}/>
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
     </main>
    </Router>
  );
};

export default App;
