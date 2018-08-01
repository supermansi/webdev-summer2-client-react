let initialState = {
    widgets: [
        // {order: 1, title: 'Heading Widget 1', id: 1, widgetType: 'HEADING'},
        // {order: 2, title: 'List Widget 1', id: 2, widgetType: 'LIST', listItems: 'item1\nitem2\nitem2', ordered: true},
        // {order: 3, title: 'YouTube Widget', id: 3, widgetType: 'YOUTUBE'},
        // {order: 4, title: 'Paragraph Widget', id: 4, widgetType: 'PARAGRAPH'},
        // {order: 5, title: 'Image Widget', id: 5, widgetType: 'IMAGE'}
    ],
    preview: false
};

export const reducer = (state = initialState, action) => {
    let fromIndex;
    let toIndex;
    let newState;

    switch(action.type){

        case 'UP':
            console.log(action.widgetId + 'going up');
            fromIndex = state.widgets.findIndex((widget) => widget.id === action.widgetId);
            toIndex = fromIndex--;
            state.widgets.splice(toIndex, 0, state.widgets.splice(fromIndex, 1)[0]);
            let widgets = Object.assign(state.widgets)
            console.log(fromIndex);
            return {widgets: state.widgets};

        case 'DOWN':
            console.log(action.widgetId + 'going down');
            fromIndex = state.widgets.findIndex((widget) => widget.id === action.widgetId);
            toIndex = fromIndex++;
            console.log(fromIndex);
            return  state;

        case 'FIND_ALL_WIDGETS':
            console.log(action.widgets);
            return {
                widgets: action.widgets
            };

        case 'SAVE_WIDGETS':
            fetch('http://localhost:8080/api/widget', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(state.widgets)
            });
            return state;

        case 'DELETE_WIDGET':
            let widgetId = action.widgetId;
            fetch('http://localhost:8080/api/widget/' + widgetId, {
                method: 'DELETE'
            })
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            };

        case 'CREATE_WIDGET':
            return {
                widgets: [
                    ...state.widgets,
                    action.widget,
                    //{title: 'NEW WIDGET', id: (new Date()).getTime()}
                ]
            };

        case 'SELECT_WIDGET':
            let newState = {
                widgets: state.widgets.filter(widget => {
                    // console.log(widget.id + " " + action.widget.id);
                    if(widget.id1 === action.widget.id1) {
                        widget.widgetType = action.widget.widgetType;
                    }
                    return true;
                })
            };
            // console.log(action.widget.widgetType);
            return JSON.parse(JSON.stringify(newState));

        case 'UPDATE_WIDGET':
            return {
                widgets: state.widgets.map(widget => {
                    //console.log(action.widget);
                        if(widget.id === action.widget.id) {
                            return action.widget;
                        }
                        else {
                            return widget;
                        }
                    })
            };

        case 'PREVIEW_WIDGET':
            newState = Object.assign({}, state);
            newState.preview != newState.preview;

        default:
            return state;
    }
}