import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    profilePicture: {
      type: String,
      default:
        "https://tse1.mm.bing.net/th?id=OIP.ZCOIs5RX4d-KB49VZAjfXgAAAA&pid=Api&P=0&h=180",
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

export default User;
