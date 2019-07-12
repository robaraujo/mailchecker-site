export default theme => ({
  root: {
    padding: theme.spacing(3)
  },
  emailMassContainer: {
    position: 'relative',
    boxSizing: 'border-box',
    width: '100%',
    height: '550px',
    zIndex: '20',
    padding: '32px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'center',
    border: '1px solid #0867da'
  },
  iconWrapper: {
    margin: '0 auto',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    borderRadius: '50%',
    display: 'inline-flex'
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
  }
});
