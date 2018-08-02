import React from 'react'

export const ParagraphWidget = ({widget, preview, updateWidget}) => {

    let text;

    return (
        <div>
            <div hidden={preview}>
                <h3>Paragraph Widget</h3>
                <label for="text">
                    Enter Text:
                </label>
                <textarea placeholder="Paragraph Text"
                          id="text"
                          ref = {node => text = node}
                          className="form-control"
                          onChange={() => {
                              widget.text = text.value;
                              updateWidget(widget)
                          }}>
                </textarea>
                <h4>Preview</h4>
            </div>
            <p>{widget.text}</p>
        </div>
    );
}