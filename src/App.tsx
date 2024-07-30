import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/front-end/HomePage.tsx";
import Table from "./pages/front-end/table.tsx";

function App() {
  return (
      <div className="App">
          <Router>
              <Routes>
                  <Route path={"/"} element={ <HomePage /> }></Route>
                  <Route path={"/ViewAllPage"} element={<Table /> } />
              </Routes>
          </Router>
      </div>
  )
}

export default App
