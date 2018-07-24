import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import TopicService from '../services/TopicService'

export default class LessonTabs extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            courseId : "",
            moduleId : "",
            lessonId : "",
            topics : [],
            topic : {title: ''}
        }
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.setLessonId = this.setLessonId.bind(this);
        this.setTopicId = this.setTopicId.bind(this);
        this.setTopicTitle = this.setTopicTitle.bind(this);
        this.createTopic = this.createTopic.bind(this);
        this.deleteTopic = this.deleteTopic.bind(this);
        this.topicService = TopicService.instance;
    }

    componentDidMount(){
        this.setCourseId(this.props.courseId);
        this.setModuleId(this.props.moduleId);
        this.setLessonId(this.props.lessonId);
        this.findAllTopicsForLesson(this.props.courseId, this.props.moduleId, this.props.lessonId);
    }

    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.setModuleId(newProps.moduleId);
        this.setLessonId(newProps.lessonId);
        this.findAllTopicsForLesson(newProps.courseId, newProps.moduleId, this.props.lessonId);
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

    setTopicId(topicId){
        this.setState({
            topicId: topicId
        });
    }

    findAllTopicsForLesson(courseId, moduleId, lessonId) {
        this.lessonService
            .findAllTopicsForLesson(courseId, moduleId, lessonId)
            .then(topics => {this.setTopics(topics)});
    }

    setTopics(topics) {
        this.setState({
            topics: topics
        })
    }

    setTopicTitle(event) {
        this.setState({topic: {
                title : event.target.value
            }});
    }

    createTopic() {
        this.topicService
            .createTopic(this.state.courseId,
                this.state.moduleId,
                this.state.lessonId,
                this.state.topicId)
            .then(() => this.findAllTopicsForLesson(this.state.courseId,
                this.state.moduleId, this.state.lessonId));
    }

    deleteTopic(topicId) {
        this.topicService
            .deleteTopic(topicId)
            .then(() =>
                this.findAllTopicsForLesson(this.state.courseId,
                    this.state.moduleId,
                    this.state.lessonId));
    }

    renderTopics() {
        console.log("rendering topics " + this.state.topics);
        var tabs = this.state.topics.map(topic =>
            <div>
                <Link to={`/course/${this.state.courseId}/module/${this.props.moduleId}/lesson/${lesson.id}/topic/${topic.id}`}>
                    {topic.title}
                </Link>
                <button onClick={() =>
                {this.deleteTopic(topic.id)}}>
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
                    <h3>Topic Tabs</h3>
                    <div>
                        <input placeholder="New Topic"
                               onChange = {this.setTopicTitle}
                               value={this.state.topic.title}/>
                        <button onClick={this.createTopic}>Create</button>
                    </div>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            {this.state.topic!=='' && this.renderTopics()}
                        </li>
                    </ul>
                </div>
            </Router>
        );
    }
}