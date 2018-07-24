import React from  'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ModuleService from '../../services/ModuleService'
import ModuleListItem from '../../components/ModuleListItem'
import ModuleEditor from './ModuleEditor'

export default class ModuleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courseId: '',
            module: {title: ''},
            modules : []
        };
        this.setCourseId = this.setCourseId.bind(this);
        this.setModuleTitle = this.setModuleTitle.bind(this);
        this.createModule = this.createModule.bind(this);
        this.deleteModule = this.deleteModule.bind(this);
        this.moduleService = ModuleService.instance;
    }

    setCourseId(courseId) {
        this.setState({courseId: courseId});
        //console.log("setting course id " + courseId);
    }

/*    setModuleId(moduleId) {
        this.setState({moduleId : moduleId});
    }*/

    setModuleTitle(event) {
        //console.log(event);
        this.setState({module: {
            title : event.target.value
            }});
    }

    createModule() {
        //console.log(this.state);
        this.moduleService
            .createModule(this.state.courseId,
                            this.state.module)
            .then(() => this.findAllModulesForCourse(this.state.courseId));
    }

    deleteModule(moduleId) {
        //console.log("deleting module " + moduleId);
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
        //console.log("props" + this.props.courseId);
        this.setCourseId(this.props.courseId);
        //this.setModuleId(this.props.moduleId);
        this.findAllModulesForCourse(this.props.courseId);
    }

    componentWillReceiveProps(newProps) {
        this.findAllModulesForCourse(newProps.courseId);
        this.setCourseId(
            newProps.courseId);
        // this.setModuleId(
        //         //     newProps.match.params.moduleId);
    }

    renderModules() {
        //console.log(this.state.modules);
        var rows = this.state.modules.map(module =>
        <ModuleListItem courseId={this.state.courseId}
                        module={module}
                        key = {module.id}
                        delete = {this.deleteModule}
        />)
        return rows;
    }

    render(){
        return(
            <Router>
                <div className="row">
                    <div className="col-4">
                        <h4>Module List</h4>
                        {/*<h4>Modules for {this.state.courseId} </h4>*/}
                        <input placeholder="New Module"
                                onChange = {this.setModuleTitle}
                               value={this.state.module.title}/>
                        <button onClick={this.createModule}>
                            <i className="fa fa-plus"></i>
                        </button>

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