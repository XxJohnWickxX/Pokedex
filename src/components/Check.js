// IMPORTACIONES
import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const Checkboxes = () => {
 
  return (
    <div>
      <Checkbox
        value="checkedA"
        inputProps={{
          'aria-label': 'primary checkbox',
        }}
      
      />
      
    </div>
  );
}
/**se exporta el componente */
export default Checkboxes;