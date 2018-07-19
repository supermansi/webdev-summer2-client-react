import React from  'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ModuleService from '../../services/ModuleService'
import ModuleListItem from '../../components/ModuleListItem'
import ModuleEditor from './ModuleEditor'

export default class ModuleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {courseId: '',
        module: {title: ''},
        modules : []};
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleTitle = this.setModuleTitle.bind(this);
        this.createModule = this.createModule.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
        this.moduleService = ModuleService.instance;
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
    }

    setModuleTitle(event) {
        //console.log(event);
        this.setState({module: {
            title : event.target.value
            }});
    }

    createModule() {
        console.log(this.state);
        this.moduleService
            .createModule(this.state.courseId,
                            this.state.module)
            .then(() => this.findAllModulesForCourse(this.state.courseId));
    }

    deleteModule(moduleId) {
        console.log("deleting module " + moduleId);
        this.moduleService
            .deleteModule(moduleId)
            .then(() => {
                this.findAllModulesForCourse(this.state.courseId)
            });
    }

    findAllModulesForCourse(courseId) {
        this.moduleService
            .findAllModulesForCourse(courseId)
            .then(modules => {this.setModules(modules)});
    }

    setModules(modules) {
        this.setState({
            modules: modules
        })
    }

    componentDidMount() {
        console.log(this.props);
        this.setCourseId(
            this.props.match.params.courseId);
        this.setModuleId(
            this.props.match.params.moduleId);
    }

    componentWillReceiveProps(newProps) {
        this.findAllModulesForCourse(newProps.courseId);
        this.setCourseId(
            newProps.match.params.courseId);
        this.setModuleId(
            newProps.match.params.moduleId);
    }

    renderModules() {
        let modules = this.state.modules.map((module) => {
            return (
                <ModuleListItem key={module.id}
                                module={module}
                                delete={this.deleteModule}/>
            );
        });

        return (
            <div>
                <h1>Modules</h1>
                <ul>
                    {modules}
                </ul>
            </div>
        );
    }

    render(){
        return(
            <Router>
                <div className="row">
                    <div className="col-4">
                        <h4>Module List</h4>
                        <h4>Modules {this.state.courseId} </h4>

                        <input placeholder="New Module"
                                onChange = {this.setModuleTitle}
                               value={this.state.module.title}/>
                        <button onClick={this.createModule}>Create</button>

                        {this.renderModules()}
                    </div>
                    <div className="col-8">
                        <Route path="/course/:courseId/module/:moduleId"
                                component={ModuleEditor}/>
                    </div>
                </div>
            </Router>
        );
    }
}