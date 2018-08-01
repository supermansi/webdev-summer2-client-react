import {connect} from 'react-redux'
import WidgetListComponent from "./WidgetListComponent";

const mapStateToProps = (state) => ({
    widgets: state.widgets
})

const mapDispatchToProps = (dispatch) => ({
    deleteWidget: (widgetId) => dispatch({type: 'DELETE_WIDGET', widgetId: widgetId}),
    createWidget: (widget) => dispatch({type: 'CREATE_WIDGET', widget: widget}),
    updateWidget: (widget) => dispatch({type: 'UPDATE_WIDGET', widget: widget}),
    saveWidgets: () => dispatch({type: 'SAVE_WIDGETS'}),
    selectWidget: (widget) => dispatch({type: 'SELECT_WIDGET', widget: widget}),
    previewWidgets: () => dispatch({type: 'PREVIEW_WIDGET'}),
    loadAllWidgets: () => {
        fetch('http://localhost:8080/api/widget')
            .then(response => response.json())
            .then(widgets => dispatch({
                type: 'FIND_ALL_WIDGETS',
                widgets: widgets
            }))
    },
    up: (widgetId) => {dispatch({type: 'UP', widgetId: widgetId})},
    down: (widgetId) => {dispatch({type: 'DOWN', widgetId: widgetId})}
})

export const WidgetListContainer = connect(mapStateToProps, mapDispatchToProps)(WidgetListComponent)
