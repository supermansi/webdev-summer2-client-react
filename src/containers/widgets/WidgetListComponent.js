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
        this.state = {
            topicId : '',
            widgets : []
        }
        this.setTopicId = this.setTopicId.bind(this);
    }

    setTopicId(topicId){
        this.setState({
            topicId: topicId
        });
    }

    componentDidMount(){
        this.setTopicId(this.props.match.params.topicId);
    }

    componentWillReceiveProps(newProps) {
        this.setTopicId(newProps.match.params.topicId);
    }



    render (){
        return (
            <div className="col-8 pull-right">
                <h1>Widget List Component</h1>
                <button className="btn btn-outline-success pull-right"
                        onClick={() => {
                            let widget = {
                                id1: (new Date()).getTime(),
                                widgetType: 'HEADING'
                            }
                            this.props.createWidget(widget)
                        }}
                        hidden={this.props.previewMode}>
                    <i className="fa fa-plus"></i>
                </button>
                <button className="btn btn-outline-primary"
                        onClick={this.props.saveWidgets(this.state.topicId)}
                        hidden={this.props.previewMode}>
                    Save
                </button>
                <button className="btn btn-outline-primary"
                        onClick={this.props.preview}>
                    Preview
                </button>
                <ul className="list-group">
                    {/*<li className="list-group-item">
                        <input ref={node => this.widgetTitle = node}
                               className="form-control"/>
                        <select className="form-control"
                                ref={node => this.widgetType = node}
                                onChange={() => {
                                    this.widget.widgetType = this.widgetType;
                                    this.props.updateWidget(this.widget);
                                }}>
                            <option value="" selected="" disabled>Choose widget type</option>
                        <option value="WT1">Widget Type 1</option>
                        <option value="WT2">Widget Type 2</option>
                        <option value="WT3">Widget Type 3</option>
                            <option value="HEADING">Heading</option>
                            <option value="LIST">List</option>
                            <option value="PARAGRAPH">Paragraph</option>
                            <option value="IMAGE">Image</option>
                            <option value="LINK">Link</option>
                        </select>

                    </li>*/}
                    {/*{console.log(this.props.widgets)}*/}
                    {this.props.widgets.map((widget, index) =>
                        <div>
                            {console.log(widget)}
                            <li className="list-group-item"
                                key={index}>
                                {/*{widget.id}*/}
                                <div hidden={this.props.previewMode}>
                                    <button className="btn btn-outline-danger pull-right"
                                            onClick={() => this.props.deleteWidget(widget.id)}>
                                        <i className="fa fa-trash"></i>
                                    </button>
                                    <button className="btn btn-outline-warning pull-right"
                                            onClick={() => this.props.down(widget.id)}>
                                        <i className="fa fa-arrow-down"></i>
                                        {/*Down*/}
                                    </button>
                                    <button className="btn btn-outline-warning pull-right"
                                            onClick={() => this.props.up(widget.id)}>
                                        <i className="fa fa-arrow-up"></i>
                                        {/*Up*/}
                                    </button>
                                    <select className="form-control btn-outline-primary col-3 pull-right"
                                            ref = {node => this.widgetType = node}
                                            onChange={() => {
                                                let newWidget = {
                                                    id1: widget.id1,
                                                    widgetType: this.widgetType.value
                                                }
                                                // console.log(widget);
                                                //                                             // console.log(newWidget);
                                                //widget.widgetType = this.widgetType;
                                                this.props.selectWidget(newWidget);
                                            }}>
                                        <option value="HEADING">Heading</option>
                                        <option value="LIST">List</option>
                                        <option value="PARAGRAPH">Paragraph</option>
                                        <option value="IMAGE">Image</option>
                                        <option value="LINK">Link</option>
                                    </select>
                                </div>
                                <div>
                                    {widget.widgetType === 'HEADING' && <HeadingWidget widget={widget}
                                                                                       updateWidget={this.props.updateWidget}
                                                                                       preview={this.props.previewMode}/>}

                                    {widget.widgetType === 'LIST' && <ListWidget widget={widget}
                                                                                 updateWidget={this.props.updateWidget}
                                                                                 preview={this.props.previewMode}/>}

                                    {widget.widgetType === 'PARAGRAPH' && <ParagraphWidget widget={widget}
                                                                                           updateWidget={this.props.updateWidget}
                                                                                           preview={this.props.previewMode}/>}

                                    {widget.widgetType === 'IMAGE' && <ImageWidget widget={widget}
                                                                                   updateWidget={this.props.updateWidget}
                                                                                   preview={this.props.previewMode}/>}

                                    {widget.widgetType === 'LINK' && <LinkWidget widget={widget}
                                                                                 updateWidget={this.props.updateWidget}
                                                                                 preview={this.props.previewMode}/>}
                                </div>
                            </li>
                            <button className="btn btn-outline-primary pull-right"
                                    onClick={() => {
                                        let widget = {
                                            id1: (new Date()).getTime(),
                                            widgetType: 'HEADING'
                                        }
                                        this.props.createWidget(widget)
                                    }}
                                    hidden={this.props.previewMode}>
                                <i className="fa fa-plus"></i>
                            </button>
                            <hr/>
                        </div>
                    )}
                </ul>
            </div>
        );
    }
}
