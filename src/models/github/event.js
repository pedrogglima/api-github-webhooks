mongoose = require("mongoose");

// defining model
const eventSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      trim: true,
      required: [true, "Field Type is required"]
    },
    data: {
      type: Object,
      required: [true, "Field Data is required"]
    }
  },
  { timestamps: {} }
);

// custom querys
// eventSchema.statics.findByType = async type => {
//   try {
//     let events = await this.find({ type: type });
//     return events;
//   } catch (err) {
//     return err;
//   }
// };

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
