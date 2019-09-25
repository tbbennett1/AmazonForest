import { connect } from 'react-redux';
import Search from './search'

const mapStateToProps = (state) => {
    let reviews;
    if (state.entities.reviews.data) {
        reviews = state.entities.reviews.data;
    }

    return {
        items: Object.keys((state.entities.items)).map(id => state.entities.items[id]),
        reviews: reviews,
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)