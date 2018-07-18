import React from  'react'

export default class ModuleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {courseId: ''};
        this.setCourseId = this.setCourseId.bind(this);
    }

    setCourseId(courseId) {
        this.setCourseId({courseId: courseId});
    }

    componentDidMount() {
        this.setCourseId(this.props.courseId);
    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(newProps.courseId);
    }


    render(){
        return(
            <div>
                <h4>Module List</h4>
                <h4>Modules courseId: {this.state.courseId} </h4>
            </div>
        );
    }
}