export default theme => ({
  root: {
    padding: theme.spacing(3)
  },
  emailMassContainer: {
    width: '100%',
    height: '550px',
    zIndex: '20',
    textAlign: 'center'
  },
  control: {
    position: 'relative',
    padding: '32px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    minHeight: '450px'
  },
  iconClose: {
    width: '40px',
    position: 'absolute',
    top: '15px',
    right: '15px'
  }
});
