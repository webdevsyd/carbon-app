import { fetchCustomers } from './../../services/customers';

export default {

  namespace: 'customers',

  state: {
    data: [],
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, search }) => {
        if (pathname === '/cases/add') {
          dispatch({ type: 'FETCH_CUSTOMERS' });
        }
      });
    },
  },

  effects: {
    *FETCH_CUSTOMERS({ payload }, { call, put }) {
      const { data } = yield call(fetchCustomers);
      yield put({ type: 'SAVE', payload: { data } });
    },
  },


  reducers: {
    SAVE(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
