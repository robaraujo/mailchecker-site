export default theme => ({
  root: {},
  iconWrapper: {
    margin: '0 auto',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    borderRadius: '50%',
    display: 'inline-flex',
    padding: '26px'
  },
  icon: {
    fontSize: '3rem',
    height: '3rem',
    width: '3rem'
  },
  inputUpload: {
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '100%',
    height: '100%',
    opacity: '0',
    cursor: 'pointer'
  },
  danger: {
    color: theme.palette.danger.main
  }
});
