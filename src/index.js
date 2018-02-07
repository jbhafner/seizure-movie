import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import registerServiceWorker from './registerServiceWorker';

const muiTheme = getMuiTheme(darkBaseTheme);

// const muiTheme = getMuiTheme(lightBaseTheme);

ReactDOM.render(
	<MuiThemeProvider muiTheme={muiTheme}>
		<App />
	</MuiThemeProvider>, 
	document.getElementById('root')
);

registerServiceWorker();
