import React from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@mui/material';

function FormularioCadastro() {
  return (
    <form>
      <TextField 
        id="nome" 
        label="Nome" 
        variant="outlined" 
        fullWidth 
        margin="normal"
      />
      
      <TextField 
        id="sobrenome" 
        label="Sobrenome" 
        variant="outlined" 
        fullWidth
        margin="normal"
      />

      <TextField 
        id="cpf" 
        label="CPF" 
        variant="outlined" 
        fullWidth
        margin="normal"
      />

      <FormControlLabel control={<Switch defaultChecked />} label="Promoções" />
      <FormControlLabel control={<Switch defaultChecked />} label="Novidades" />
      
      <Button type="submit" variant="contained">Cadastrar</Button>
    </form>
    );
  }
  
  export default FormularioCadastro;
  