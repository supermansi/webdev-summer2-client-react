import React from 'react'

export const ImageWidget = ({widget, preview, updateWidget}) => {
    let url;
    return (
        <div>
            <div hidden={preview}>
                <h3>Image Widget</h3>
                <label for="url">
                    Image URL
                </label>
                <input id="url"
                       ref = {node => url=node}
                       onChange={() => {
                           widget.url = url.value;
                           updateWidget(widget);
                       }}
                       className="form-control"/>
                <h4>Preview</h4>
            </div>
            <img width="560"
                    height="315"
                    src={widget.url} />
        </div>
    );
}
