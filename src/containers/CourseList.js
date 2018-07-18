import React from 'react'
import CourseRow from "../components/CourseRow";
import CourseService from "../services/CourseService";

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
        var rows = this.state.courses.map(course => <CourseRow course={course}
                                                                key={course.id}
                                                                delete={this.deleteCourse}/>);
        return rows;
    }

    render() {
        return(
            <div className="container">
                <h4>Course List</h4>
                <table className="table-bordered table-hover col-4">
                    <thead>
                        <tr>
                            <th>Course</th>
                        </tr>
                        <tr className="row">
                            <th className="col-8">
                                <input className="form-control"
                                    id="titleFld"
                                   placeholder="CS 5610"
                                    onChange={this.titleChanged}/>
                            </th>
                            <th className="col-4">
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
        );
    }
}