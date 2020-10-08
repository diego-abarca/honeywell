import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {CreateStudentPage, SingleStudentPage, StudentListPage} from "./pages";


function AppRouter() {
  return (
    <div className="App">
      <div className="appContainer">
        <Router>
          <Switch>
            <Route exact path='/'>
              <StudentListPage />
            </Route>
            <Route exact path='/create-student'>
              <CreateStudentPage />
            </Route>
            <Route exact path='/student/:id'>
              <SingleStudentPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default AppRouter;
