export default theme => ({
  root: {},
  inputContainer: {
    width: 'calc(100% - 120px)',
    display: 'inline-block'
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px'
  },
  input: {
    margin: 0,
    width: '100%',
    verticalAlign: 'middle'
  },
  btn: {
    marginLeft: '20px',
    height: '40px',
    verticalAlign: 'top'
  },
  danger: {
    color: theme.palette.danger.main
  }
});
