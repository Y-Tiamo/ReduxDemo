'use strict';
import * as types from '../constants/loginTypes';

const initialState = {
  status: '点击登录',
  isSuccess: false,
  user: {},
};

export default function loginIn(state = initialState, action) {
  console.log('loginIn', action);
  switch (action.type) {
    case types.LOGIN_IN_DOING:
      return {
        ...state,
        status: '正在登陆',
        isSuccess: false,
        user: null,
      };
    case types.LOGIN_IN_DONE:
      return {
        ...state,
        status: '登陆成功',
        isSuccess: true,
        user: action.user,
      };
    case types.LOGIN_IN_ERROR:
      return {
        ...state,
        status: '登录出错',
        isSuccess: true,
        user: null,
      };
    case types.LOGIN_OUT_DOING:
      return {
        ...state,
        status: '正在退出',
        isSuccess: false,
        user: null,
      };
    case types.LOGIN_OUT_DONE:
      return {
        ...state,
        ...initialState,
      };
    case types.LOGIN_OUT_ERROR:
      return {
        ...state,
        status: '退出出错',
        isSuccess: true,
        user: null,
      };
    default:
      return state;
  }
}
