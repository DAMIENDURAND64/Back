import mongoose, { Schema } from "mongoose";

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

export const User = mongoose.model<TUser>("User", userSchema);
