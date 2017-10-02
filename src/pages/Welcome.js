/**
 * Created by lihao on 2017/10/2.
 */
import React, {Component} from 'react';
import {hashHistory} from 'react-router';
import '../styles/welcome.css';

import appLogo from '../images/logo/logo_xinrencai.png'
import appSign from '../images/logo/logo_welcome_sign.png'

export default class Welcome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loadingText: '服务器连接中...'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loadingText: '安全性校验中...'
            });
            setTimeout(() => {
                hashHistory.push('/login');
            }, 2000);
        }, 2000);
    }

    render() {
        return (
            <div
                style={styles.container}
            >
                <div style={styles.content}>
                    <img src={appLogo} style={styles.logo}/><br/>
                    <img src={appSign} style={styles.sign}/><br/>
                    <div class="spinner">
                        <div class="rect1"></div>
                        <div class="rect2"></div>
                        <div class="rect3"></div>
                        <div class="rect4"></div>
                        <div class="rect5"></div>
                    </div>
                    <h3
                        style={styles.loading}
                    >
                        {this.state.loadingText}
                    </h3>
                </div>
            </div>
        )
    }

}

const styles = {
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#2196FC',
        textAlign: 'center'
    },
    content: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 100,
        margin: 'auto',
        minHeight: '200px',
        height: '200px',
    },
    logo: {
        height: '100px',
    },
    sign: {
        height: '40px'
    },
    loading: {
        marginTop: '40px',
        color: '#fff'
    }
};