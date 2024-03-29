import { model, Schema } from "mongoose";
import bcrypt from "bcrypt";

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
    role: {
      type: String,
      require: true,
      enums: ['ADMIN', 'USER'],
      default: 'USER'
    }
  },
  { timestamps: true }
);

userSchema.pre("save", async function (req, res, next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(this.password, salt);
    this.password = hashPassword;
    next();
  } catch (error) {
    console.error(error.message);
  }
});

export default model("users", userSchema);
