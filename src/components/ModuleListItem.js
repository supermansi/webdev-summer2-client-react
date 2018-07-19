import React from 'react';

export default class ModuleListItem extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <li>{this.props.module.title}</li>
                <button onClick={() =>
                                {this.props.delete(this.props.module.id)}}>
                    DELETE
                </button>
            </div>
        );
    }
}