import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { OldUser}  from './OldUser';
import { Lhome }from './Lhome';
import { About }from './About';
import { Test }from './Tests';
import { Study }from './Study';
import { Linfo }from './Linfo';
import { Lnav } from './Lnav';
import { Course } from './Course';
import { Testpage } from './Testpage';
import { Assignment } from './Assignment';

export const Ldash = (props) => {
  let user = props.value
    return (
      <div>
    <Router>
      <Router>
        <Lnav />
       <Switch>
         <Route path="/about"><About value={user}/></Route>
         <Route path="/tests"><Test /></Route>
         <Route path="/assignment"><Assignment /></Route>
         <Route path="/courses"><Study value={user}/></Route>
         <Route path="/lecturers-home"><Linfo /></Route>
          <Route path='/course'><Course value={user}/></Route>
          <Route path='/test'><Testpage value={user}/></Route>
         </Switch>
         </Router>
    </Router>
    </div>
    )
}