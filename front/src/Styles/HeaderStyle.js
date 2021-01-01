import { makeStyles, fade } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    // height:"10vh",
    color: theme.palette.primary.main,

  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  title: {
    display: 'none',
    color: theme.palette.secondary.main,
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),

    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(16),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    color: theme.palette.secondary.main,
    [theme.breakpoints.up('md')]: {
      display: 'flex',

    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  Icons: {
    color: theme.palette.secondary.main,
  },
  LoginIcon: {
    background: theme.palette.primary.main,
  }
}));
export default useStyles;