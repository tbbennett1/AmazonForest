export const RECEIVE_SEARCH = "RECEIVE_SEARCH"

export const receiveSearch = searchTerm => ({
    type: RECEIVE_SEARCH,
    searchTerm
})

export const fetchSearch = searchTerm => dispatch => {
    dispatch(receiveSearch(searchTerm))
};