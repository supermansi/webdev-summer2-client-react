let initialState = {
    widgets: [
        // {order: 1, title: 'Heading Widget 1', id: 1, widgetType: 'HEADING'},
        // {order: 2, title: 'List Widget 1', id: 2, widgetType: 'LIST', listItems: 'item1\nitem2\nitem2', ordered: true},
        // {order: 3, title: 'YouTube Widget', id: 3, widgetType: 'YOUTUBE'},
        // {order: 4, title: 'Paragraph Widget', id: 4, widgetType: 'PARAGRAPH'},
        // {order: 5, title: 'Image Widget', id: 5, widgetType: 'IMAGE'}
    ]
};

export const reducer = (state = initialState, action) => {
    let fromIndex;
    let toIndex;
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
            }
            break;

        case 'SAVE_WIDGETS':
            fetch('http://localhost:8080/api/widget', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(state.widgets)
            });
            return state;
            break;

        case 'DELETE_WIDGET':
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            };
            break;

        case 'CREATE_WIDGET':
            return {
                widgets: [
                    ...state.widgets,
                    action.widget,
                    //{title: 'NEW WIDGET', id: (new Date()).getTime()}
                ]
            }
            break;

        case 'UPDATE_WIDGET':
            return {
                widgets: state.widgets.map(widget => {
                        if(widget.id === action.widget.id) {
                            return action.widget;
                        }
                        else {
                            return widget;
                        }
                    })
            }
            break;

        default:
            return state;
    }
}