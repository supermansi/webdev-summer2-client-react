import {connect} from 'react-redux'
import WidgetListComponent from "./WidgetListComponent";

const WIDGET_API_URL = "https://webdev-server-java-mansijain.herokuapp.com/topic/TID/widgets"

const mapStateToProps = (state) => ({
    widgets: state.widgets,
    previewMode: state.preview
})

const mapDispatchToProps = (dispatch) => ({
    deleteWidget: (widgetId) => dispatch({type: 'DELETE_WIDGET', widgetId: widgetId}),
    createWidget: (widget) => dispatch({type: 'CREATE_WIDGET', widget: widget}),
    updateWidget: (widget) => dispatch({type: 'UPDATE_WIDGET', widget: widget}),
    saveWidgets: (topicId) => dispatch({type: 'SAVE_WIDGETS', topicId: topicId}),
    selectWidget: (widget) => dispatch({type: 'SELECT_WIDGET', widget: widget}),
    preview: () => dispatch({type: 'PREVIEW_WIDGET'}),
    loadAllWidgets: () => {
        fetch('https://webdev-server-java-mansijain.herokuapp.com/api/widget')
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
