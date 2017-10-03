/**
 * Created by lihao on 2017/10/2.
 */
import React, {Component} from 'react';
import {hashHistory} from 'react-router'
import {Button} from 'antd';
import '../styles/login.css';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import colors from '../utils/color';


export default class Login extends Component {

    constructor(props) {
        super(props);
        let {userName, userPwd} = this.props.location.query;
        if (userName === 0 || userPwd === 0){
            userName = '';
            userPwd = ''
        }
        this.state = {
            userName: userName,
            userPwd: userPwd,
            isAutoLogin: false
        }
    }

    componentDidMount() {

    }

    onChangeUserName = (value) => {
        this.setState({
            userName: value
        })
    };

    onChangeUserPwd = (value) => {
        this.setState({
            userPwd: value
        })
    };

    updateCheck = () => {
        this.setState((oldState) => {
            return {
                isAutoLogin: !oldState.isAutoLogin,
            };
        });
    };

    render() {

        const {userName, userPwd} = this.state;
        console.log(userName + userPwd);
        return (
            <div
                className="container"
            >
                <div id="loginSpace">
                    <h2
                        style={{
                            color: colors.themeDark
                        }}
                    >
                        用户登录
                    </h2>
                    <TextField
                        id="phoneInput"
                        className="inputText"
                        hintText="请输入手机号:"
                        floatingLabelText="手机号码:"
                        floatingLabelStyle={styles.labelText}
                        inputStyle={styles.inputText}
                        value={userName}
                    />
                    <TextField
                        id="pwdInput"
                        className="inputText"
                        hintText="请输入密码:"
                        floatingLabelText="密码:"
                        type="password"
                        floatingLabelStyle={styles.labelText}
                        inputStyle={styles.inputText}
                        value={userPwd}
                    />
                    <div style={{height: '20px'}}></div>
                    <Checkbox
                        label="自动登录"
                        checked={this.state.isAutoLogin}
                        onCheck={this.updateCheck.bind(this)}
                        style={styles.checkBox}
                        labelStyle={{
                            fontSize: '16px',
                            color: colors.themeDark
                        }}
                    />
                    <div id="buttonGroup">
                        <Button
                            className="registerButton"
                            type="primary"
                            onClick={() => {
                                hashHistory.push('/register');
                            }}
                        >
                            注册
                        </Button>
                        <Button
                            className="loginButton"
                            type="primary"
                            onClick={() => {
                                hashHistory.push('/home/overview');
                            }}
                        >
                            登录
                        </Button>
                    </div>
                </div>
            </div>
        )
    }

}

const styles = {
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#AAAAEE'
    },
    inputText: {
        fontSize: '20px',
    },
    labelText: {
        fontSize: '18px'
    }
};