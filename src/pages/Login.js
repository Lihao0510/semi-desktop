/**
 * Created by lihao on 2017/10/2.
 */
import React, {Component} from 'react';
import {Button, Input, Icon} from 'antd';
import {hashHistory} from 'react-router'
import '../styles/login.css';
import TextField from 'material-ui/TextField';
import colors from '../utils/color';


export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userPwd: ''
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

    render() {

        const {userName, userPwd} = this.state;
        const userSuffix = userName.length <= 3 ? null : <Icon type="close-circle" onClick={this.emitEmpty}/>;
        const pwdSuffix = userPwd <= 3 ? null : <Icon type="close-circle" onClick={this.emitEmpty}/>;

        return (
            <div
                className="container"
            >
                <div id="loginSpace">
                    <h2
                        style={{
                            color: colors.themeDark
                        }}
                    >用户登录</h2>
                    <TextField
                        id="phoneInput"
                        className="inputText"
                        hintText="请输入手机号:"
                        floatingLabelText="手机号码:"
                        floatingLabelStyle={styles.labelText}
                        inputStyle={styles.inputText}
                    />
                    <TextField
                        id="pwdInput"
                        className="inputText"
                        hintText="请输入密码:"
                        floatingLabelText="密码:"
                        type="password"
                        floatingLabelStyle={styles.labelText}
                        inputStyle={styles.inputText}
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
                                hashHistory.push('/home');
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