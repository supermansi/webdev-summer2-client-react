import React from 'react'

export const YouTubeWidget = ({widget, updateWidget}) => {
    let src;
    return (
        <div>
            <h3>YouTube Video</h3>
            <input id="URL"
                   ref={node => src=node}
                   onChange={() => {
                       widget.src = src.value.split('/')[3];
                       updateWidget(widget);
                   }}
                   className="form-control"/>
            <h4>Preview</h4>
            {/*{widget.src}*/}
            <iframe width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${widget.src}`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media" allowFullScreen>
            </iframe>
        </div>
    );
}