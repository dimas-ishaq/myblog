import bcrypt, { genSaltSync } from "bcryptjs";

const hashPassword = (password: string) => {
  const genSalt = genSaltSync(10);
  const hashedPassword = bcrypt.hash(password, genSalt);
  return hashedPassword;
};

const comparePassword = (password: string, hashedPassword: string) => {
  const isMatch = bcrypt.compare(password, hashedPassword);
  return isMatch;
};

export { hashPassword, comparePassword };

