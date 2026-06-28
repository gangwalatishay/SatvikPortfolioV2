import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
    },

    client: {
      type: String,
      default: "",
    },

    year: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      required: true,
    },

    thumbnail: {
      type: String,
      required: true,
    },

    heroImage: {
      type: String,
      default: "",
    },

    gallery: [
      {
        type: String,
      },
    ],

    youtubeUrl: {
      type: String,
      default: "",
    },

    driveUrl: {
      type: String,
      default: "",
    },

    software: [
      {
        type: String,
      },
    ],

    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Project", projectSchema);