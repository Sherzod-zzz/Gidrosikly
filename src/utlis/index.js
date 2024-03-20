const NAME_REGEX = /^[a-zA-Z]+$/;

export const isValidName = name => NAME_REGEX.test(name);
