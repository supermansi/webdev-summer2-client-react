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
                        }}
                        placeholder="Enter one list item per line">
            </textarea>
            <label for="type">
                Select List Type
            </label>
                <select className="form-control"
                        ref = {node => ordered = node}
                        onChange={() => {
                            widget.ordered = ordered.value == 'ordered' ? true : false;
                            updateWidget(widget)
                        }}
                        id="type">
                    <option value="unordered">Unordered</option>
                    <option value="ordered">Ordered</option>
                </select>
{/*            <label>
                <input type="checkbox"
                       ref = {node => ordered = node}
                       checked={widget.ordered}
                       onChange={() => {
                            widget.ordered = ordered.checked
                            updateWidget(widget)
                        }}/>Ordered
            </label>*/}
            <h4>Preview</h4>
            {/*{console.log(widget.listItems)}*/}
            {widget.listItems &&
                {widget.ordered &&
                <ol>
                {widget.listItems.split('\n').map((item, index) => (
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
            }
        </div>
    );
}
