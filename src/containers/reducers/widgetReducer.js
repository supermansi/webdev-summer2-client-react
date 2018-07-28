let initialState = {
    widgets: [
        {title: 'Heading Widget 1', id: 1, widgetType: 'HEADING'},
        {title: 'List Widget 1', id: 2, widgetType: 'LIST', listItems: 'item1\nitem2\nitem3', ordered: true},
        {title: 'Widget 3', id: 3, widgetType: 'WT1'},
        {title: 'Widget 4', id: 4, widgetType: 'WT2'},
        {title: 'Widget 5', id: 5, widgetType: 'WT3'}
    ]
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'DELETE_WIDGET':
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            };
            break;

        case 'CREATE_WIDGET':
            return {
                widgets: [
                    action.widget,
                    ...state.widgets
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