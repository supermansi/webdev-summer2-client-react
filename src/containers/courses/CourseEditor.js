import React from 'react'
import ModuleList from "../modules/ModuleList";

export default class CourseEditor extends React.Component {
    constructor(props) {
        super(props);
        this.selectCourse = this.selectCourse.bind(this);
        this.state = {
            courseId : ''
        };
    }

    componentDidMount() {
        var courseId = this.props.match.params.courseId;
        this.selectCourse(courseId);
    }

    componentWillReceiveProps(newProps){
        this.selectCourse(newProps.match.params.courseId);
    }

    selectCourse(courseId) {
        this.setState({courseId : courseId});

    }

    render() {
        return(
            <div className="container">
                {this.state.courseId!==''&&<ModuleList courseId={this.state.courseId}/>}
                {/*{this.state.courseId!=''&&<ModuleList courseId={this.state.courseId}/>}*/}
            </div>
        );
    }
}