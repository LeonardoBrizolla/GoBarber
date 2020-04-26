import { ValidationError } from 'yup';

interface Erros {
  [key: string]: string;
}

export default function getValidationErros(erros: ValidationError): Erros {
  const validationErros: Erros = {};

  erros.inner.forEach(error => {
    validationErros[error.path] = error.message;
  });

  return validationErros;
}
