import {model, Schema} from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    full_name: {
      type: String,
      require: true,
    },
    phone_number: {
      type: Number,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    user_type: {
      type: Number,
      default: 1,
    },
  },
  {timestamps: true}
);

export default model("users", userSchema);
