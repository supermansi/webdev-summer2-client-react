import React from 'react'

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
            <h3>Course {this.state.courseId}</h3>
        );
    }
}