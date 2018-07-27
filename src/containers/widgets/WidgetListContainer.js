import {connect} from 'react-redux'
import {WidgetListComponent} from "./WidgetListComponent";

const mapStateToProps = (state) => ({
    widgets: state.widgets
})

export const WidgetListContainer = connect(mapStateToProps)(WidgetListComponent)
