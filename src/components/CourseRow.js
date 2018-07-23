import React from 'react'
import {Link} from 'react-router-dom'

export default class CourseRow extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <tr>
                <td>
                    <i className="fa fa-file"></i>&nbsp;
                    <Link to={`/course/${this.props.course.id}/edit`}>
                        {this.props.course.title}
                    </Link>
                </td>
                <td>
                    {this.props.course.ownedBy}
                </td>
                <td>
                    {this.props.course.dateModified}
                </td>
                <td>
                    {this.props.course.timeModified}
                </td>
                <td>
                    <button className="btn btn-outline-primary"
                            onClick={() => {this.props.delete(this.props.course.id)} }>
                        <i className="fa fa-times"></i>
                    </button>
                </td>
            </tr>
        );
    }
}