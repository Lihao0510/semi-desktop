/**
 * Created by lihao on 2017/10/2.
 */
import React, {Component} from 'react';
import {Button, Input, Icon} from 'antd';
import {hashHistory} from 'react-router'
import '../styles/login.css';
import TextField from 'material-ui/TextField';
import colors from '../utils/color';


export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userPwd: '',
            userPwdCheck: '',
            userEmail: ''
        }
    }

    componentDidMount() {

    }

    onChangeUserName = (event, value) => {
        this.setState({
            userName: value
        })
    };

    onChangeUserPwd = (event, value) => {
        this.setState({
            userPwd: value
        })
    };
    onChangeUserPwdCheck = (event, value) => {
        this.setState({
            userPwdCheck: value
        })
    };

    onChangeUserEmail = (event, value) => {
        this.setState({
            userEmail: value
        })
    };

    onSubmit = () => {
        const {userName, userPwd, userPwdCheck, userEmail} = this.state;
        const pathMessage = {
            pathname: '/login',
            query: {
                userName, userPwd
            },
        };
        hashHistory.push(pathMessage);
    };

    render() {

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
                        用户注册
                    </h2>
                    <TextField
                        id="phoneInput"
                        className="inputText"
                        hintText="请输入手机号:"
                        floatingLabelText="手机号码:"
                        floatingLabelStyle={styles.labelText}
                        inputStyle={styles.inputText}
                        onChange={this.onChangeUserName}
                    />
                    <TextField
                        id="pwdInput"
                        className="inputText"
                        hintText="请输入密码:"
                        floatingLabelText="密码:"
                        type="password"
                        floatingLabelStyle={styles.labelText}
                        inputStyle={styles.inputText}
                        onChange={this.onChangeUserPwd}
                    />
                    <TextField
                        id="pwdInput"
                        className="inputText"
                        hintText="请确认密码:"
                        floatingLabelText="确认密码:"
                        type="password"
                        floatingLabelStyle={styles.labelText}
                        onChange={this.onChangeUserPwdCheck}
                        inputStyle={styles.inputText}
                    />
                    <TextField
                        id="pwdInput"
                        className="inputText"
                        hintText="请输入您的邮箱:"
                        floatingLabelText="邮箱:"
                        floatingLabelStyle={styles.labelText}
                        onChange={this.onChangeUserEmail}
                        inputStyle={styles.inputText}
                    />
                    <div id="buttonGroup">
                        <Button
                            className="registerButton"
                            type="primary"
                            onClick={() => {
                                hashHistory.goBack();
                            }}
                        >
                            返回
                        </Button>
                        <Button
                            className="loginButton"
                            type="primary"
                            onClick={this.onSubmit}
                        >
                            注册
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