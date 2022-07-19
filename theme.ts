import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  overrides: {
      MuiAvatar: {
          root : {
              borderRadius: "25%",

          }
},
    MuiButton: {
      contained: {
        backgroundColor: "white",
        padding: "8px",
        borderRadius: "10px",
          '&:hover': {
              backgroundColor: "white",
          }
      },
      root: {
        minWidth: "40px",
      },
    },
  },
});
