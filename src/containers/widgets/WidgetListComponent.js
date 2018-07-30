import React from 'react'

import {HeadingWidget} from "./HeadingWidget";
import {ListWidget} from "./ListWidget";
import {ParagraphWidget} from "./ParagraphWidget";
import {ImageWidget} from "./ImageWidget";
import {LinkWidget} from "./LinkWidget";

export default class WidgetListComponent extends React.Component {
    constructor(props) {
        super(props);
        let widgetTitle;
        let widgetType;
        this.props.loadAllWidgets();

    }

/*    componentWillReceiveProps(newProps) {
        this.props.widgets = newProps.widgets
    }*/

    render (){
        return (
            <div className="col-8 pull-right">
                <h1>Widget List Component</h1>
                <button className="btn btn-outline-primary"
                        onClick={this.props.saveWidgets}>
                    Save
                </button>
                <ul className="list-group">
                    <li className="list-group-item">
                        <input ref={node => this.widgetTitle = node}
                               className="form-control"/>
                        <select className="form-control"
                                ref={node => this.widgetType = node}>
                            {/*<option value="" selected="" disabled>Choose widget type</option>
                        <option value="WT1">Widget Type 1</option>
                        <option value="WT2">Widget Type 2</option>
                        <option value="WT3">Widget Type 3</option>*/}
                            <option value="HEADING">Heading</option>
                            <option value="LIST">List</option>
                            <option value="PARAGRAPH">Paragraph</option>
                            <option value="IMAGE">Image</option>
                            <option value="LINK">Link</option>
                        </select>
                        <button className="btn btn-outline-primary pull-right col-3"
                                onClick={() => {
                                    let widget = {
                                        title: this.widgetTitle.value,
                                        id: (new Date()).getTime(),
                                        widgetType: this.widgetType.value
                                    }
                                    this.widgetTitle.value = '';
                                    this.props.createWidget(widget)
                                }}>
                            <i className="fa fa-plus"></i>
                        </button>
                    </li>
                    {this.props.widgets.map((widget, index) =>
                        <div>
                            <li className="list-group-item"
                                key={index}>
                                {widget.id}
                                <button className="btn btn-outline-danger pull-right"
                                        onClick={() => this.props.deleteWidget(widget.id)}>
                                    <i className="fa fa-trash"></i>
                                </button>
                                <button className="btn btn-outline-warning float-right"
                                        onClick={() => this.props.down(widget.id)}>
                                    <i className="fa fa-arrow-down"></i>
                                    {/*Down*/}
                                </button>
                                <button className="btn btn-outline-warning float-right"
                                        onClick={() => this.props.up(widget.id)}>
                                    <i className="fa fa-arrow-up"></i>
                                    {/*Up*/}
                                </button>
                                <div>
                                    {widget.widgetType === 'HEADING' && <HeadingWidget widget={widget} updateWidget={this.props.updateWidget}/>}
                                    {widget.widgetType === 'LIST' && <ListWidget widget={widget} updateWidget={this.props.updateWidget}/>}
                                    {widget.widgetType === 'PARAGRAPH' && <ParagraphWidget widget={widget} updateWidget={this.props.updateWidget}/>}
                                    {widget.widgetType === 'IMAGE' && <ImageWidget widget={widget} updateWidget={this.props.updateWidget}/>}
                                    {widget.widgetType === 'LINK' && <LinkWidget widget={widget} updateWidget={this.props.updateWidget}/>}
                                </div>
                            </li>
                            <hr/>
                        </div>
                    )}
                </ul>
            </div>
        );
    }
}
