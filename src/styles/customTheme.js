import { createTheme } from '@material-ui/core/styles';

const customTheme = (darkMode) =>
  createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#c197db' : '#964ec2',
      },
      secondary: {
        main: darkMode ? '#dbc3ea' : '#2e1818',
      },
    },
    overrides: {
      MuiMenuItem: {
        root: {
          '&$selected': {
            borderRight: '4px solid #a92727',
            fontWeight: '700',
          },
        },
      },
      MuiPopover: {
        paper: {
          borderRadius: 2,
        },
      },
      MuiButton: {
        root: {
          borderRadius: 4,
          textTransform: 'none',
        },
      },
      MuiChip: {
        root: {
          borderRadius: 3,
          padding: '0px',
        },
        outlined: {
          backgroundColor: darkMode ? '#c197db15' : '#964ec215',
        },
      },
    },
    props: {
      MuiButton: {
        disableElevation: true,
      },
    },
  });

export default customTheme;
