import mongoose, { Schema } from "mongoose";
import escape from "html-escape";

export type TUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const userSchema = new Schema<TUser>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const sanitizeInput = (input: string): string => {
  return escape(input);
};
userSchema.pre("save", function (next) {
  this.firstName = sanitizeInput(this.firstName.toString());
  this.lastName = sanitizeInput(this.lastName.toString());
  this.email = sanitizeInput(this.email.toString());
  this.password = sanitizeInput(this.password.toString());
  next();
});

export const User = mongoose.model<TUser>("User", userSchema);
