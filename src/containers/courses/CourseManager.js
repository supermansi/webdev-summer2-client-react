import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'


import CourseList from "./CourseList";
import CourseEditor from "./CourseEditor";
import ModuleEditor from "../modules/ModuleEditor";
import LessonEditor from "../LessonEditor"
import {reducer} from "../reducers/widgetReducer"
import {WidgetListContainer} from "../widgets/WidgetListContainer";

let store = createStore(reducer)

export default class CourseManager extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="container">
                        <Link to="/course">
                            <h1>Course Manager</h1>
                        </Link>
                        <br />
                        <Link to="widgets">
                            <h1>Widgets</h1>
                        </Link>
                        <Route path="/widgets"
                               component={WidgetListContainer}>
                        </Route>
                        <Route path="/course"
                               component={CourseList}>
                        </Route>
                        <Route path="/course/:courseId/edit"
                               component={CourseEditor}>
                        </Route>
                        <Route path="/course/:courseId/module/:moduleId"
                               component={ModuleEditor}>
                        </Route>
                        {/*<Route path="/course/:courseId/module/:moduleId/lesson/:lessonId"
                               component={LessonEditor}>
                        </Route>*/}
                    </div>
                </Router>
            </Provider>
        );
    }
}