import React from 'react'

export const WidgetListComponent = ({widgets}) =>
    <div>
        <h1>Widget List Component</h1>
        <ul className="list-group">
            {widgets.map((widget, index) =>
                <li className="list-group-item"
                    key={index}>
                    {widget.title}
                    <button className="btn btn-outline-danger pull-right"
                            onClick={deleteWidget}>
                        <i className="fa fa-trash"></i>
                    </button>
                </li>
            )}
        </ul>
    </div>