import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import {connect} from 'react-redux'; // 引入connect函数
import * as loginAction from '../actions/loginAction'; // 导入action方法

class LoginPage extends Component {
  static navigationOptions = {
    title: '登录',
  };

  shouldComponentUpdate(nextProps, nextState) {
    // 登录完成,切成功登录
    if (nextProps.status === '登陆成功' && nextProps.isSuccess) {
      // this.props.navigation.dispatch(resetAction);
      this.props.navigation.navigate('Main');
      return false;
    }
    return true;
  }

  render() {
    const {login, status} = this.props;
    console.log('login', this.props);
    return (
      <View style={styles.container}>
        <Text>状态: {this.props.status}</Text>
        <ActivityIndicator animating={status === '正在登陆'} />
        <TouchableOpacity onPress={() => login()} style={{marginTop: 50}}>
          <View style={styles.loginBtn}>
            <Text>登录</Text>
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
    backgroundColor: '#F5FCFF',
  },
  loginBtn: {
    borderWidth: 1,
    padding: 5,
  },
});

export default connect(
  state => ({
    status: state.loginIn.status,
    isSuccess: state.loginIn.isSuccess,
    user: state.loginIn.user,
  }),
  dispatch => ({
    login: () => dispatch(loginAction.login()),
  }),
)(LoginPage);
