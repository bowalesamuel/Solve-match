import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { FormControl, InputLabel, FilledInput, FormHelperText } from '@material-ui/core';
import { Field, FieldProps } from "formik"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formContainer: {
      margin: theme.spacing(1),
      width:"100%",
      // padding:theme.spacing(4),
      color:theme.palette.primary.dark,
      fontSize:"1.125rem",
      background:"#FBF3CA",
      "& input":{
        backgroundColor:"initial",
        margin:theme.spacing(1,.5)
      }
    }
  })
);


interface IProps {
  placeholder: string;
  name: string;
  showErrors?: boolean
}

const Input: React.FC<IProps> = ({ placeholder, name, showErrors }) => {
  const classes = useStyles();
  return (
    <Field name={name} >
      {({ field, form }: FieldProps) => (
        <FormControl className={classes.formContainer} variant="filled"
          error={Boolean(form.touched[name]) && Boolean(form.errors[name])}
        >
          <FilledInput id="component-filled" disableUnderline {...field} placeholder={placeholder} />
          { form.touched[name] &&
            form.errors[name] &&
            <FormHelperText error={Boolean(form.errors[name])} >{form.errors[name]}</FormHelperText>
          }
        </FormControl>
      )}
    </Field>
  );
}

export default Input