import i18n from "../i18n";

export const requiredInput = (input) => {
  return (input) ? undefined : i18n.t('errRequiredInput');
}

export const correctInput = (input) => {
  // eslint-disable-next-line
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return (re.test(String(input).toLowerCase()) === false) ? i18n.t('errWrongEmailFormat') : undefined;
}
