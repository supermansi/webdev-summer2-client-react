import React from 'react';

export default class CourseCard extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="card">
                <img className="card-img-top" />
                <div className="card-body">
                    <h3 className="card-title">
                        {this.props.course.title}
                    </h3>
                </div>
            </div>
        );
    }
}