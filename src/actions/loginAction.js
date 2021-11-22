'use strict';

import * as types from '../constants/loginTypes';

// 访问登录接口 根据返回结果来划分action属于哪个type,然后返回对象,给reducer处理
export function login() {
  console.log('登录方法');
  return dispatch => {
    dispatch(isLogining());
    // 模拟用户登录
    return fetch(
      'https://restapi.amap.com/v3/direction/walking?origin=116.434307,39.90909&destination=116.434446,39.90816&key=<用户的key>',
    )
      .then(response => response.json())
      .then(json => dispatch(loginSuccess(true, json)))
      .catch(e => {
        dispatch(loginError(false, e));
      });
  };
}

function isLogining() {
  return {
    type: types.LOGIN_IN_DOING,
  };
}

function loginSuccess(isSuccess, user) {
  console.log('success', user);
  return {
    type: types.LOGIN_IN_DONE,
    user: user,
  };
}

function loginError(isSuccess, error) {
  console.log('error', error);
  return {
    type: types.LOGIN_IN_ERROR,
  };
}

export function loginOut() {
  console.log('退出登录方法');
  return dispatch => {
    dispatch(isQuitting());
    // 模拟用户登录
    return fetch(
      'https://restapi.amap.com/v3/direction/walking?origin=116.434307,39.90909&destination=116.434446,39.90816&key=<用户的key>',
    )
      .then(response => response.json())
      .then(json => dispatch(loginOutSuccess(true, json)))
      .catch(e => {
        dispatch(loginOutError(false, e));
      });
  };
}

function isQuitting() {
  return {
    type: types.LOGIN_OUT_DOING,
  };
}

function loginOutSuccess(isSuccess, user) {
  console.log('quit', user);
  return {
    type: types.LOGIN_OUT_DONE,
    user: user,
  };
}

function loginOutError(isSuccess, error) {
  console.log('error', error);
  return {
    type: types.LOGIN_OUT_ERROR,
  };
}
