import { createMuiTheme } from '@material-ui/core';

export default createMuiTheme({

  palette: {
    primary: {
      main: "#242424",
    },
    secondary: {
      main: "#244f5f",
      light: "#eca725"
    },
    background: {
      default: "#ffffff",
      paper: "#f7f6f5"
    },
    success: {
      main: "#61C88D"
    },
    error: {
      main: "#E25353"
    },
    text: {
      primary: "#010101",
      secondary: "#FFFFFF",
      disabled: "#C2C9CF"
    },
    grey: {
      "100": "#252729",
      "200": "#51575C",
      "400": "#939BA3",
      "600": "#C2C9CF",
      "700": "#DCE2E9",
      "800": "#F7F9FC",
      "900": "#FEFEFF"
    },
    info: {
      main: "#7BD4F0"
    },
    warning: {
      main: "#F6D46C"
    }
  },

  typography: {
    fontFamily: "'Raleway', sans-serif",
    h1: {
      fontSize: 50,
      fontWeight: 300,
    },
    h2: {
      fontSize: 26,
      fontWeight: 500
    },
    h3: {
      fontSize: 22,
      fontWeight: 500
    },
    button: {
      fontWeight: 700
    }
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "::-webkit-scrollbar-track": { },
        "::-webkit-scrollbar": { },
        "::-webkit-scrollbar-thumb": { color: "#000" }
      }
    },
    MuiCard: {
      root: {
        borderRadius: 0
      }
    },
    MuiButton: {
      root: {
        borderRadius: 0
      },
      label: {
        textTransform: "initial"
      },
      outlined: {
        fontWeight: 700,
        border: "1px solid #000",
        borderRadius: 0
      },
      outlinedPrimary: {
        border: "2px solid #eca725",
        color: "#244f5f",
        "&:hover": {
          border: "2px solid #eca725",
        }
      }
    }
  },
  props: {
    MuiButton: {
      variant: "outlined",
    }
  }
});