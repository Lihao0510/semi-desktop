import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './styles/index.css';
import store from './redux/store';
import RootRoute from './pages/RootRoute';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import theme from './utils/theme';

class App extends React.Component {

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
                <Provider store={store}>
                    <RootRoute />
                </Provider>
            </MuiThemeProvider>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));
