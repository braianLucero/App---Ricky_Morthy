const regexEmail =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export default function validate(data) {
  let error = {};
  if (!regexEmail.test(data.name)) {
    error.name = " El email es invalido";
  }
  if (!data.password) {
    error.password = "este campo no puede estar vacio";
  }
  return error;
}
