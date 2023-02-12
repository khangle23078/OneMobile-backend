import mongoose, {Schema} from "mongoose";

const categorySchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("categories", categorySchema);
