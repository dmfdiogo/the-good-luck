import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
    palette: {
        secondary: {
            contrastText: '#FFF',
            main: green[500],
        },
        tertiary: {
            main: '#FFF',
        },
        toolbar: {
            contrastText: '#000',
            main: '#FFF'
        }
    },
});

export default theme;