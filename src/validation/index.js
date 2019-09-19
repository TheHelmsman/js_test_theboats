export const requiredInput = (input) => {
  return (input) ? undefined : 'Требуется ввод';
}

export const correctInput = (input) => {
  // eslint-disable-next-line
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return (re.test(String(input).toLowerCase()) === false) ? 'Неправильный формат email' : undefined;
}