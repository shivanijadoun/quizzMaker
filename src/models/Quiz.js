import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctAnswer: { type: String, required: true },
});

const QuizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  questions: [QuestionSchema],
  // createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

export default mongoose.models.Quiz || mongoose.model('Quiz', QuizSchema);
