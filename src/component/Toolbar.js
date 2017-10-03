/**
 * Created by lihao on 2017/10/3.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {hashHistory} from 'react-router';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import ClearIcon from 'material-ui/svg-icons/content/clear';
import PowerOff from 'material-ui/svg-icons/action/power-settings-new';
import MessageIcon from 'material-ui/svg-icons/communication/chat';
import '../styles/toolbar.css';
import colors from '../utils/color';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {openDrawer, closeDrawer} from '../redux/action/Drawer';

@connect(
    state => ({
        drawerOpen: state.drawer.drawerOpen
    }),
    dispatch => bindActionCreators({openDrawer, closeDrawer}, dispatch)
)
export default class Toolbar extends Component {

    static propTypes = {
        titleText: PropTypes.string,
        onLeftClick: PropTypes.func
    };

    static defaultProps = {
        titleText: '芯人才企业端'
    };

    constructor(props) {
        super(props);
    }

    onClickDrawerIcon = () => {
        if (!this.props.drawerOpen) {
            this.props.openDrawer();
        } else {
            this.props.closeDrawer();
        }
    };

    safeExit = () => {
        hashHistory.push('/login');
    };

    render() {

        const avatarSrc = 'https://img.alicdn.com/tps/TB1CQi7KVXXXXauXpXXXXXXXXXX-200-200.jpg_120x120.jpg';

        return (
            <div className="toolbar-container">
                <IconButton
                    iconStyle={styles.smallIcon}
                    style={styles.smallButton}
                    onClick={this.onClickDrawerIcon}
                >
                    <MenuIcon color={colors.pureWhite}/>
                </IconButton>
                <div
                    className="toolbar-title"
                >
                    <h1
                        id="toolbar-title-text"
                    >
                        {this.props.titleText}
                    </h1>
                </div>
                <div
                    className="toolbar-group"
                >
                    <Avatar
                        src={avatarSrc}
                        size={35}
                        style={styles.avatar}
                    />
                    <FlatButton
                        label="个人中心"
                        primary={true}
                        labelStyle={styles.button}
                    />
                    <FlatButton
                        label="消息中心"
                        primary={true}
                        labelStyle={styles.button}
                        icon={<MessageIcon color={colors.pureWhite}/>}
                    />
                    <FlatButton
                        label="安全退出"
                        primary={true}
                        labelStyle={styles.button}
                        labelPosition="before"
                        icon={<PowerOff color={colors.pureWhite}/>}
                        onClick={this.safeExit}
                    />
                </div>
            </div>
        )
    }

}

const styles = {
    smallIcon: {
        width: 36,
        height: 36,
    },
    smallButton: {
        width: 72,
        height: 72,
        padding: 18,
    },
    avatar: {},
    button: {
        color: colors.pureWhite
    }
};


