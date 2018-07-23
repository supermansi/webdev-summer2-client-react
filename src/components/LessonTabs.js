import React from 'react'
import {Router, Route, Link} from 'react-router-dom'
import LessonService from '../services/LessonService'

export default class LessonTabs extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            courseId : "",
            moduleId : "",
            lessons : [],
            lesson : {title: ''}
        }
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.setLessonId = this.setLessonId.bind(this);
        this.lessonService = LessonService.instance;

    }

    componentDidMount(){
        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.moduleId);
    }

    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.setModuleId(newProps.moduleId);
    }

    setCourseId(courseId){
        this.setState({
            courseId: courseId
        });
    }

    setModuleId(moduleId){
        this.setState({
            moduleId: moduleId
        });
    }

    setLessonId(lessonId){
        this.setState({
            lessonId: lessonId
        });
    }

    renderLessons() {
        var tabs = this.state.lessons.map(lesson =>
            return (
                <div>
                    <Link to={`/course/${this.state.courseId}/module/${this.props.module.id}/lesson/${this.props.lesson.id}`}>
                        {this.state.lessonId}
                    </Link>
                    <button onClick={() =>
                    {this.deleteLesson(this.state.lesson.id)}}>
                        DELETE
                    </button>
                </div>
            ))
        return tabs;
    }

    render() {
        return (
            <Router>
                <div>
                    <h3>Lesson Tabs</h3>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            {this.renderLessons()}
                            <Link to={`/course/${this.props.courseId}/module/${this.props.module.id}/lesson/${this.props.lesson.id}`}>
                                {this.state.lessonId}
                            </Link>
                            <button onClick={() =>
                            {this.props.delete(this.props.module.id)}}>
                                DELETE
                            </button>
                        </li>
                    </ul>
                </div>
            </Router>
        );
    }
}