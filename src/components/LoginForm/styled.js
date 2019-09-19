import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

export const Box = styled.div`
  opacity: 0.9;
  background: #fff;
  border-radius: 10px;
  z-index: 2000;
  position: absolute;
  top: 10px;
  right: 120px;
  width: 200px;
  margin-right: -100px;
`;
export const Label = styled.div`
  width:100%;
  text-align: left;
  padding-left:10px;
  padding-right:10px;
`;
export const FormTitle = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 30px;
  font-size: 1.5rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: 0em;
`;
export const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '500px', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

