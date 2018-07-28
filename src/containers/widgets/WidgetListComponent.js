import React from 'react'

import {WidgetType1} from "./WidgetType1";
import {WidgetType2} from "./WidgetType2";
import {WidgetType3} from "./WidgetType3";

export const WidgetListComponent = ({widgets, createWidget, deleteWidget, updateWidget}) =>
{
    let widgetTitle;
    let widgetType;

    return(
        <div>
            <h1>Widget List Component</h1>
            <ul className="list-group">
                <li className="list-group-item">
                    <input ref={node => widgetTitle = node}
                            className="form-control"/>
                    <button className="btn btn-outline-primary pull-right"
                            onClick={() => {
                                let widget = {
                                    title: widgetTitle.value,
                                    id: (new Date()).getTime(),
                                    widgetType: widgetType.value
                                }
                                widgetTitle.value = '';
                                createWidget(widget)
                            }}>
                        <i className="fa fa-plus"></i>
                    </button>
                    <select className="form-control"
                            ref={node => widgetType = node}>
                        <option value="" selected disabled hidden>Choose here</option>
                        <option value="WT1">Widget Type 1</option>
                        <option value="WT2">Widget Type 2</option>
                        <option value="WT3">Widget Type 3</option>
                    </select>
                </li>
                {widgets.map((widget, index) =>
                    <li className="list-group-item"
                        key={index}>
                        {widget.title} ({widget.id}) - {widget.widgetType}
                        <button className="btn btn-outline-danger pull-right"
                                onClick={() => deleteWidget(widget.id)}>
                            <i className="fa fa-trash"></i>
                        </button>
                        <div>
                            {widget.widgetType === 'WT1' && <WidgetType1 widget={widget} updateWidget={updateWidget}/>}
                            {widget.widgetType === 'WT2' && <WidgetType2 widget={widget} updateWidget={updateWidget}/>}
                            {widget.widgetType === 'WT3' && <WidgetType3 widget={widget} updateWidget={updateWidget}/>}
                        </div>
                    </li>
                )}
            </ul>
        </div>
    );
}
