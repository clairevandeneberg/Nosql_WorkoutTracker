const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
   day: {
    type: String,
    unique: true
   },

   exercises: [
       {
        type: String,
        name: String,
        weight: Number,
        sets: Number,
        reps: Number,
        duration: Number

   }
]
  });
  
  const Workout = mongoose.model("Workout", WorkoutSchema);
  
  module.exports = Workout;
  