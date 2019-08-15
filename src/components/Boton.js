// IMPORTACIONES
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

/**Se utiliza rl formato de boton de la libreria Material-UI */
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const Boton = () => {
  const classes = useStyles();

  return (
    <div>
      <Button variant="contained" color="secondary" className={classes.button}>
        Ingresa Ahora
      </Button>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
    </div>
  );
}
/**Se exporta el componente */
export default Boton;