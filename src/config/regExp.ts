export const regExpNumbers = /^[0-9]+$/i;
export const regExpAlphabetic = /^[a-zA-Z\s]*$/;
export const regExpAlphaNumeric = /^[A-Za-z0-9\s]+$/i;

export const regExpEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
export const regExpPassword =
  /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])[a-zA-Z0-9]{6,}$/;

export const regExpOnlyNumbers = /^\d+$/;
