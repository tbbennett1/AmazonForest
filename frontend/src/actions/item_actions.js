import * as ItemApiUtil from '../util/item_api_util';

export const RECEIVE_ALL_ITEMS = "RECEIVE_ALL_ITEMS";
export const RECEIVE_ITEM = "RECEIVE_ITEM";
export const CREATE_ITEM = "CREATE_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const receiveItem = item => {
  return {
    type: RECEIVE_ITEM,
    item
  }
}

export const fetchItems = () => dispatch => (
	ItemApiUtil.fetchItems().then((items) => dispatch({ type: RECEIVE_ALL_ITEMS, items }))
);

export const fetchItem = (id) => dispatch => (
	ItemApiUtil.fetchItem(id).then((item) => dispatch(receiveItem(item.data)))
);

export const createItem = (data) => dispatch => (
  ItemApiUtil.createItem(data).then((item) => dispatch(receiveItem(item.data)))
);

export const removeItem = (id) => dispatch => (
	ItemApiUtil.removeItem(id).then((item) => dispatch({ type: REMOVE_ITEM, itemId: item.id }))
);