import {connect} from 'react-redux'
import {WidgetListComponent} from "./WidgetListComponent";

const mapStateToProps = (state) => ({
    widgets: state.widgets
})

const mapDispatchToProps = (dispatch) => ({
    deleteWidget: (widgetId) => dispatch({type: 'DELETE_WIDGET', widgetId: widgetId}),
    createWidget: (widget) => dispatch({type: 'CREATE_WIDGET', widget: widget}),
    updateWidget: (widget) => dispatch({type: 'UPDATE_WIDGET', widget: widget})
})

export const WidgetListContainer = connect(mapStateToProps, mapDispatchToProps)(WidgetListComponent)
