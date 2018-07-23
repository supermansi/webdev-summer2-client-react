import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
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
        console.log(this.props.courseId);
        console.log(this.props.moduleId);
        this.findAllLessonsForModule(this.props.courseId, this.props.moduleId);
    }

    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.setModuleId(newProps.moduleId);
        this.findAllLessonsForModule(newProps.courseId, newProps.moduleId);
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

    findAllLessonsForModule(courseId, moduleId) {
        this.lessonService
            .findAllLessonsForModule(courseId, moduleId)
            .then(lessons => {this.setLessons(lessons)});
    }

    setLessons(lessons) {
        this.setState({
            lessons: lessons
        })
    }

    renderLessons() {
        console.log(this.state.lessons);
        var tabs = this.state.lessons.map(lesson =>
                    <div>
                        <Link to={`/course/${this.state.courseId}/module/${this.props.moduleId}/lesson/${lesson.id}`}>
                            {lesson.title}
                        </Link>
                        <button onClick={() =>
                        {this.deleteLesson(lesson.id)}}>
                            DELETE
                        </button>
                    </div>
        )
        return tabs;
    }

    render() {
        return (
            <Router>
                <div>
                    <h3>Lesson Tabs</h3>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            {this.state.lesson!=='' && this.renderLessons()}
                        </li>
                    </ul>
                </div>
            </Router>
        );
    }
}