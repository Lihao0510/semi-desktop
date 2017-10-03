/**
 * Created by lihao on 2017/10/3.
 */
/**
 * Created by lihao on 2017/10/3.
 */
import React, {Component} from 'react';
import {hashHistory} from 'react-router'

export default class Message extends Component{

    render(){
        return(
            <div
                style={styles.container}
            >
                <h2>
                    Message
                </h2>
            </div>
        )
    }

}

const styles = {
    container: {
        width: '100%',
        height: '100%'
    }
};