import { connect } from 'react-redux';
import Search from './search'

const mapStateToProps = (state) => {

    return {
        items: Object.keys((state.entities.items)).map(id => state.entities.items[id])
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)