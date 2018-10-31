import React from 'react'
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import SpotIndex from '../containers/SpotIndex'
import SpotShow from  '../containers/SpotShow'


export const App = (props) => {
  return (
    <div>
    <Router history={browserHistory}>
    <Route path='/spots' component={SpotIndex}/>
    <Route path='/spots/:id' component={SpotShow}/>
    </Router>
    </div>
  )
}

export default App
