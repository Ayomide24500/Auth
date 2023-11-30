import { Document, Schema, model } from "mongoose";

interface iAdmin {
  name: string;
  email: string;
  phoneNo: number;
  password: string;
  avatar: string;
  verificationToken: string;
  verified: boolean | any;
}

interface iAdminData extends iAdmin, Document {}

const iOwner = new Schema<iAdminData>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    phoneNo: {
      type: Number,
    },
    verificationToken: {
      type: String,
    },
    avatar: {
      type: String,
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default model<iAdminData>("AdminData", iOwner);
