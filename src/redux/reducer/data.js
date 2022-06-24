import { FETCHDATA, FILTERDATA, FILTERPRICE } from "../actionType";
const init_state = {
  data: []
};
export const dataReducer = (state = init_state, { type, payload }) => {
  switch (type) {
    case FETCHDATA:
      return {
        ...state,
        data: payload
      };
    case FILTERDATA:
      return {
        ...state,
        data: filterData(state.data, payload)
      };
      case FILTERPRICE:
        return {
            ...state,
            data: filterPrice(state.data, payload)
        }

    default:
      return state;
  }
};

const filterData = (data, key) => {
  key = key.toUpperCase();
  return data.filter(
    (product) =>
      product.details.toUpperCase().indexOf(key) > -1 ||
      product.price.toUpperCase().indexOf(key) > -1 ||
      product.discount.toUpperCase().indexOf(key) > -1
  );
};
const payload = {
    from: 17,
    to: 30
}
const filterPrice = (data,payload) => {
    const {from, to} = payload;
    return data.filter(product => {
               product.price >= from  && product.price <= to
    })
}


