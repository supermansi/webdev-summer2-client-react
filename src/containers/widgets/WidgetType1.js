import React from 'react'

export const WidgetType1 = ({widget, updateWidget}) => {
    let widgetType;
    return (
        <div>
            <h3>Widget Type 1 - {widget.title}</h3>
            <select className="form-control"
                    ref={node => widgetType = node}
                    onChange={() => {
                        let newWidget = {
                            id: widget.id,
                            widgetType: widgetType.value
                        };
                        //widget.widgetType = widgetType.value
                        console.log(widget);
                        widget.widgetType = '';
                        updateWidget(newWidget);
                    }}>
                <option value="" disabled hidden>Change Type</option>
                <option value="WT1">Widget Type 1</option>
                <option value="WT2">Widget Type 2</option>
                <option value="WT3">Widget Type 3</option>
            </select>
        </div>
    );
}