import React from 'react'

export const ListWidget = ({widget, updateWidget}) => {
    let text;
    let ordered;
    return  (
        <div>
            <h3>List Widget</h3>
            <textarea   className="form-control"
                        value={widget.listItems}
                        ref={node => text = node}
                        onChange={ () => {
                            widget.listItems = text.value;
                            updateWidget(widget);
                        }}>

            </textarea>
            <label>
                <input type="checkbox"
                       ref = {node => ordered = node}
                       checked={widget.ordered}
                        onClick={() => {
                            widget.ordered = ordered.checked
                            updateWidget(widget)
                        }}/>Ordered
            </label>
            <h4>Preview</h4>
            {widget.ordered &&
                <ol>
                    {widget.listItems.split('\n').map( (item, index) => (
                        <li key={index}>
                            {item}
                        </li>
                    ))}
                </ol>
            }
            {!widget.ordered &&
                <ul>
                    {widget.listItems.split('\n').map((item, index) => (
                        <li key={index}>
                            {item}
                        </li>
                    ))}
                </ul>
            }
        </div>
    );
}