import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Counter from '../components/Counter';
import {connect} from 'react-redux'; // 引入connect函数
import * as counterAction from '../actions/counterAction';
import * as types from '../constants/loginTypes';
import * as loginAction from '../actions/loginAction';

class MainPage extends Component {
  static navigationOptions = {
    title: '首页',
  };

  logout() {
    this.props.loginOutFn();
    this.props.navigation.navigate('Login');
  }

  render() {
    const {user} = this.props;
    return (
      <View style={styles.container}>
        <Text>登录信息</Text>
        <Text>{JSON.stringify(user)}</Text>
        <TouchableOpacity
          onPress={this.logout.bind(this)}
          style={{marginTop: 50}}>
          {/*<TouchableOpacity onPress={()=>loginOutFn()} style={{ marginTop: 50 }}>*/}
          <View>
            <Text>退出登录</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FFFF',
  },
});

export default connect(
  state => ({
    count: state.counter.count,
    user: state.loginIn.user,
  }),
  dispatch => ({
    incrementFn: () => dispatch(counterAction.increment()),
    decrementFn: () => dispatch(counterAction.decrement()),
    loginOutFn: () => dispatch(loginAction.loginOut()),
  }),
)(MainPage);
