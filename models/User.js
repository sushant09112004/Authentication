import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

// Define the User Schema
const userSchema = new Schema(
    {
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: false,
        },
      },
    { timestamps: true }
);

const User = models.User || model("User", userSchema);

export default User;