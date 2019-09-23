import { connect } from 'react-redux';
import HomePage from './home_page'

const mapStateToProps = state =>{
    return{
        currentUser: state.session.user,
        items: Object.keys((state.entities.items)).map(id => state.entities.items[id])
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)