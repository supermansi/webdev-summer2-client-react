import React from 'react'

import {WidgetType1} from "./WidgetType1";
import {WidgetType2} from "./WidgetType2";
import {WidgetType3} from "./WidgetType3";
import {HeadingWidget} from "./HeadingWidget";
import {ListWidget} from "./ListWidget";

export const WidgetListComponent = ({widgets, createWidget, deleteWidget, updateWidget}) => {
    let widgetTitle;
    let widgetType;

    return (
        <div className="col-8 pull-right">
            <h1>Widget List Component</h1>
            <ul className="list-group">
                <li className="list-group-item">
                    <input ref={node => widgetTitle = node}
                           className="form-control"/>
                    <select className="form-control"
                            ref={node => widgetType = node}>
                        <option value="" selected="" disabled>Choose widget type</option>
                        <option value="WT1">Widget Type 1</option>
                        <option value="WT2">Widget Type 2</option>
                        <option value="WT3">Widget Type 3</option>
                        <option value="HEADING">Heading</option>
                        <option value="LIST">List</option>
                    </select>
                    <button className="btn btn-outline-primary pull-right col-3"
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
                </li>
                {widgets.map((widget, index) =>
                    <li className="list-group-item"
                        key={index}>
                        <button className="btn btn-outline-danger pull-right"
                                onClick={() => deleteWidget(widget.id)}>
                            <i className="fa fa-trash"></i>
                        </button>
                        <div>
                            {widget.widgetType === 'WT1' && <WidgetType1 widget={widget} updateWidget={updateWidget}/>}
                            {widget.widgetType === 'WT2' && <WidgetType2 widget={widget} updateWidget={updateWidget}/>}
                            {widget.widgetType === 'WT3' && <WidgetType3 widget={widget} updateWidget={updateWidget}/>}
                            {widget.widgetType === 'HEADING' && <HeadingWidget widget={widget} updateWidget={updateWidget}/>}
                            {widget.widgetType === 'LIST' && <ListWidget widget={widget} updateWidget={updateWidget}/>}
                        </div>
                    </li>
                )}
            </ul>
        </div>
    );
}
