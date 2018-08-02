import React from 'react'

export const LinkWidget = ({widget, preview, updateWidget}) => {
    let text;
    let url;
    return (
        <div>
            <div hidden={preview}>
                <h3>Link Widget</h3>
                <label htmlFor="text">
                    Link Text
                </label>
                <input className="form-control"
                       id="text"
                       placeholder="Link Text"
                       ref={node => text = node}
                       onChange={() => {
                           widget.text = text.value;
                           updateWidget(widget);
                       }}/>
                <label htmlFor="url">
                    Link URL
                </label>
                <input className="form-control"
                       id="url"
                       placeholder="Link URL"
                       ref={node => url=node}
                       onChange={() => {
                           widget.url = url.value;
                           updateWidget(widget);
                       }}/>
                <h4>Preview</h4>
            </div>
            <a href={widget.url}>
                {widget.text}
            </a>
        </div>
    );
}