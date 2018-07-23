import React from 'react';
import LessonTabs from "../../components/LessonTabs";

export default class ModuleEditor extends React.Component{
    constructor(props){
        super(props);
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.state = {
            courseId: '',
            moduleId: ''
        };
    }

    componentDidMount() {
        this.setCourseId(this.props.match.params.courseId);
        this.setModuleId(this.props.match.params.moduleId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.match.params.courseId);
        this.setModuleId(newProps.match.params.moduleId);
    }

    setCourseId(courseId){
        this.setState({courseId: courseId});
    }

    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }
    render(){
        return(
            <div>
                <h1>Course ID: {this.state.courseId}
                <br />
                    Module {this.state.moduleId}
                </h1>
                {this.state.moduleId!==''&&<LessonTabs courseId={this.state.courseId}
                                                       moduleId={this.state.moduleId}/>}
            </div>
        );
    }
}