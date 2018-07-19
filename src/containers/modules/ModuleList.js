import React from  'react'
import ModuleService from '../../services/ModuleService'
import ModuleListItem from '../../components/ModuleListItem'

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
        this.setCourseId({courseId: courseId});
    }

    setModuleTitle(event) {
        this.setState({module: {
            title : event.target.value
            }})
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
        this.setCourseId(this.props.courseId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.courseId);
        this.findAllModulesForCourse(newProps.courseId);
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
            <div>
                <h4>Module List</h4>
                <h4>Modules courseId: {this.state.courseId} </h4>

                <input placeholder="New Module"
                        value={this.state.module.title}
                        onChange = {this.setModuleTitle()}/>
                <button onClick={this.createModule}>Create</button>

                {this.renderModules()}
            </div>
        );
    }
}