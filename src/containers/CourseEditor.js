import React from 'react'
import ModuleList from "./modules/ModuleList";

export default class CourseEditor extends React.Component {
    constructor(props) {
        super(props);
        this.selectCourse = this.selectCourse.bind(this);
        this.state = {
            courseId : ''
        };
    }

    selectCourse(courseId) {
        this.setState({courseId : courseId});
    }

    render() {
        return(
            <div>
                <h3>Course {this.state.courseId}</h3>
                <ModuleList courseId={this.state.courseId}/>
            </div>
        );
    }
}