/**
 * Created by lihao on 2017/10/2.
 */
import React, {Component} from 'react';

export default class HomePage extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount() {

    }

    render(){
        return(
            <div
                style={styles.container}>
                <h2>
                    HomePage Page
                </h2>
            </div>
        )
    }

}

const styles = {
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#AAAAEE'
    }
};