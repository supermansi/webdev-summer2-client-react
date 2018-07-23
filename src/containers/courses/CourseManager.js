import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import CourseList from "./CourseList";
import CourseEditor from "./CourseEditor";
import ModuleEditor from "../modules/ModuleEditor";

export default class CourseManager extends React.Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Link to="/course">
                        <h1>Course Manager</h1>
                    </Link>
                    <Route path="/course"
                           component={CourseList}>
                    </Route>
                    <Route path="/course/:courseId/edit"
                           component={CourseEditor}>
                    </Route>
                    <Route path="/course/:courseId/module/:moduleId"
                           component={ModuleEditor}>
                    </Route>
                </div>
            </Router>
        );
    }
}