import mongoose from "mongoose";
const { Schema } = mongoose;

/** question model */
const questionModel = new Schema({
  language: {
    type: String,
    required: true,
  },
  questionSet: {
    type: Array,
    required: true,
  },
  answerSet: {
    type: Array,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Question", questionModel);
