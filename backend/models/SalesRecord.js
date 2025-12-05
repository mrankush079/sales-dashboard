// backend/models/SalesRecord.js

import mongoose from "mongoose";

const salesRecordSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      required: true,
      unique: true // useful for real sales database imports
    },

    productName: { type: String, required: true },
    category: { type: String, required: true },            // Clothing / Electronics / Furniture
    subCategory: { type: String },                         // Kurti / Chairs / Bookcases etc.

    region: { type: String, required: true },              // North / South / West / East regions
    state: { type: String, required: true },               // Maharashtra, Gujarat etc.

    month: { type: Number, required: true, min: 1, max: 12 },
    quarter: { type: Number, required: true, min: 1, max: 4 },

    totalSales: { type: Number, required: true },          // Total selling price
    totalCost: { type: Number, required: true },           // Cost price
    profit: { type: Number, required: true },              // totalSales - totalCost
    profitMargin: { type: Number },                        // Auto-computed below

    paymentMode: {
      type: String,
      enum: ["COD", "UPI", "Debit Card", "Credit Card", "EMI"],
      required: true
    },

    // OPTIONAL — If you later want user-specific dashboards
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

/**
 * Auto-calculate margin before saving
 * margin % = (profit / sales) * 100
 */
salesRecordSchema.pre("save", function (next) {
  if (this.totalSales > 0) {
    this.profitMargin = Number(((this.profit / this.totalSales) * 100).toFixed(2));
  }
  next();
});

const SalesRecord = mongoose.model("SalesRecord", salesRecordSchema);
export de
