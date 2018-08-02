import React from 'react'

export const HeadingWidget = ({widget, preview, updateWidget}) => {

    let text;
    let size;

    return (
        <div>
            <div hidden={preview}>
                <h3>Heading Widget</h3>
                <label htmlFor="title">
                    Heading Title
                </label>
                <input placeholder="Heading Widget"
                       className="form-control"
                       id="title"
                       ref={node => text = node}
                       onChange={() => {
                            widget.text = text.value;
                            updateWidget(widget)
                        }}/>
                {/*{console.log(widget.text)}*/}
                <label htmlFor="size">
                    Select Heading Size
                </label>
                <select id="size"
                        className="form-control"
                        ref={node => size = node}
                        onChange={() => {
                            console.log(size);
                            widget.size = size.value;
                            updateWidget(widget);
                        }}>
                    <option value="1">Heading 1</option>
                    <option value="2">Heading 2</option>
                    <option value="3">Heading 3</option>
                    <option value="4">Heading 4</option>
                </select>
                <h4>Preview</h4>
            </div>
            {widget.size === '1' && <h1>{widget.text}</h1>}
            {widget.size === '2' && <h2>{widget.text}</h2>}
            {widget.size === '3' && <h3>{widget.text}</h3>}
            {widget.size === '4' && <h4>{widget.text}</h4>}
        </div>
    );
}