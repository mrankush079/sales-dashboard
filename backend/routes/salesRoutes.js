// backend/models/SalesRecord.js
import mongoose from "mongoose";

const salesRecordSchema = new mongoose.Schema(
  {
    region: String,
    category: String,
    subCategory: String,
    month: Number,
    quarter: Number,
    sales: Number,
    cost: Number,
    profit: Number,
    state: String,
    paymentMode: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" } // optional: user-specific
  },
  { timestamps: true }
);

const SalesRecord = mongoose.model("SalesRecord", salesRecordSchema);
export default SalesRecord;
