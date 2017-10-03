/**
 * Created by lihao on 2017/10/2.
 */
import React, {Component} from 'react';
import Toolbar from '../component/Toolbar';
import {hashHistory} from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import ExtentinIcon from 'material-ui/svg-icons/action/extension'
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

export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            drawerOpen: false
        }
    }

    componentDidMount() {

    }


    render() {
        return (
            <div
                style={styles.container}
            >
                <Toolbar
                    onLeftClick={(event) => {
                        this.setState({
                            drawerOpen: !this.state.drawerOpen
                        })
                    }}
                />
                <div
                    style={styles.content}
                >
                    <Drawer
                        open={this.props.drawerOpen}
                        containerStyle={{
                            marginTop: '60px'
                        }}
                    >
                        <div style={{height: '160px'}}></div>
                        <MenuItem primaryText="主页" leftIcon={<ExtentinIcon />}
                                  onClick={() => {
                                      this.props.closeDrawer();
                                      hashHistory.push('/home/overview');
                                  }}/>
                        <MenuItem primaryText="职位管理" leftIcon={<ExtentinIcon />}
                                  onClick={() => {
                                      this.props.closeDrawer();
                                      hashHistory.push('/home/job');
                                  }}/>
                        <MenuItem primaryText="简历市场" leftIcon={<ExtentinIcon />}
                                  onClick={() => {
                                      this.props.closeDrawer();
                                      hashHistory.push('/home/market');
                                  }}/>
                        <MenuItem primaryText="消息中心" leftIcon={<ExtentinIcon />}
                                  onClick={() => {
                                      this.props.closeDrawer();
                                      hashHistory.push('/home/message');
                                  }}/>
                        <MenuItem primaryText="面试邀请" leftIcon={<ExtentinIcon />}
                                  onClick={() => {
                                      this.props.closeDrawer();
                                      hashHistory.push('/home/interview');
                                  }}/>
                        <MenuItem primaryText="行业新闻" leftIcon={<ExtentinIcon />}
                                  onClick={() => {
                                      this.props.closeDrawer();
                                      hashHistory.push('/home/news');
                                  }}/>
                        <MenuItem primaryText="系统设置" leftIcon={<ExtentinIcon />}
                                  onClick={() => {
                                      this.props.closeDrawer();
                                      hashHistory.push('/home/setting');
                                  }}/>
                    </Drawer>
                    <div style={styles.leftMenu}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }

}

const styles = {
    container: {
        display: 'flex',
        width: '100%',
        height: '100%',
        backgroundColor: colors.pureWhite,
        flexDirection: 'column',
        paddingTop: '60px'
    },
    content: {
        display: 'flex',
        width: '100%',
        flex: 1,
        backgroundColor: colors.yellow,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    leftMenu: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.pureWhite
    },

};