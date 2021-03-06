import { routerRedux } from 'dva/router';
import { Modal, notification } from 'antd';
import { restrictions } from './../../utils/restrictions';

import {
  fetchClients,
  fetchClient,
  addClient,
  updateClient,
} from './../../services/clients';

export default {

  namespace: 'clients',

  state: {
    data: [],
    selected: null,
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, search }) => {

      });
    },
  },

  effects: {
    *FETCH_CLIENTS({ payload }, { call, put }) {
      const { data } = yield call(fetchClients);
      yield put({ type: 'SAVE', payload: { data } });
    },

    *FETCH_CLIENT({ payload }, { call, put }) {
      yield put({ type: 'SAVE', payload: { selected: null } });
      const { data } = yield call(fetchClient, payload);
      yield put({ type: 'SAVE', payload: { selected: data[0] } });
    },

    *ADD_CLIENT({ payload }, { call, put }) {
      const { position } = yield select(state => state.user.data);
      if (restrictions[position].includes('ADD_CLIENT')) return Modal.error({ title: 'Error', content: 'You don\'t have permission to do this action.' });

      const { data } = yield call(addClient, payload);
      notification['success']({ message: 'Client added.', duration: 2 });
      yield put(routerRedux.push('/clients'));
    },

    *UPDATE_CLIENT({ payload }, { call, put, select }) {
      const { position } = yield select(state => state.user.data);
      if (restrictions[position].includes('UPDATE_CLIENT')) return Modal.error({ title: 'Error', content: 'You don\'t have permission to do this action.' });

      const accountName = yield select(state => state.clients.selected.accountName);
      const { data } = yield call(updateClient, accountName, payload);
      notification['success']({ message: 'Client updated.', duration: 2 });
      yield put(routerRedux.push('/clients'));
    },
  },

  reducers: {
    SAVE(state, action) {

      return { ...state, ...action.payload };
    },
  },

};
