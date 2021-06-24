export default function validateInput(value, rules) {
  let valid = true;

  if (rules.minLen) {
    const isMinLen = value.trim().length >= rules.minLen ? true : false;
    valid = valid && isMinLen;
  }

  if (rules.email) {
    const isEmail =
      value.includes("@") && value.includes(".com") && !value.includes(" ")
        ? true
        : false;
    valid = valid && isEmail;
  }

  if (rules.confirmation) {
    const { mainValue, conValue } = value;
    valid = valid && mainValue === conValue && mainValue.trim() !== "";
  }
  return valid;
}
