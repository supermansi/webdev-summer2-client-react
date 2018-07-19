import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CourseRow from "../../components/CourseRow";
import CourseService from "../../services/CourseService";
import CourseEditor from "./CourseEditor";

export default class CourseList extends React.Component {

    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.state = {courses: []};
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
    }

    titleChanged(event) {
/*
        console.log(event.target.value);
*/
        this.setState(
            {
                course : {
                    title : event.target.value
                }
            }
        );
    }

    createCourse() {
        //console.log(this.state.course);
        this.courseService
            .createCourse(this.state.course)
            .then(() => {this.findAllCourses();});
    }

    componentDidMount() {
        this.findAllCourses();

    }

    findAllCourses() {
        this.courseService.findAllCourses()
            .then((courses) => {
                this.setState({courses: courses});
                console.log(courses);
            });
    }

    deleteCourse(courseId) {
        this.courseService
            .deleteCourse(courseId)
            .then(() => {this.findAllCourses()});
    }

    courseRows() {
        var rows = this.state.courses.map(course =>
                <CourseRow course={course}
                           key={course.id}
                           delete={this.deleteCourse}
            />
        );
        return rows;
    }

    render() {
        return(
            <Router>
                <div className="container row">
                    <div className="col-8 border">
                        <h4>Course List</h4>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>
                                        <input className="form-control"
                                            id="titleFld"
                                            placeholder="New Course"
                                            onChange={this.titleChanged}/>
                                    </th>
                                    <th>
                                        <button className="btn btn-primary"
                                            onClick={this.createCourse}>
                                            <i className="fa fa-plus"></i>
                                        </button>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.courseRows()}
                            </tbody>
                        </table>
                    </div>
{/*                    <div className="col-8 border">
                        <Route path="/course/:courseId/edit"
                               component={CourseEditor}>
                        </Route>
                    </div>*/}
                </div>
            </Router>
        );
    }
}