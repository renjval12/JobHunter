import ManageJobSearches from './components/ManageJobSearches';
import AddJobSearch from './components/AddJobSearch';
import UpdateJobSearch from './components/UpdateJobSearch';
import DeleteJobSearch from './components/DeleteJobSearch';
import ViewJobSearch from './components/ViewJobSearch';

import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';


function App() {
    return (
        <div>
          <Router>
            <div className="container">
              <Switch>
                  <Route path="/" exact component={Home}></Route>
                  <Route path="/manage-job-searches" component={ManageJobSearches}></Route>
                  <Route path="/add-job-search" component={AddJobSearch}></Route>
                  <Route path="/update-job-search/:id" component={UpdateJobSearch}></Route> 
                  <Route path="/delete-job-search/:id" component={DeleteJobSearch}></Route> 
                  <Route path="/job-search/:id" component={ViewJobSearch}></Route> 
              </Switch>
            </div>
          </Router>
          
        </div>
  );
}

export default App;