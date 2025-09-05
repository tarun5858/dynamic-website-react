import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  date: { type: String, default: () => new Date().toLocaleDateString("en-GB") },
  likes: { type: Number, default: 0 },
  readTime: { type: Number, default: 5 },
  imageKey: String,
  blogTags: [String],
  points: [String],
  heading: String,
  subheading: String,
  introduction: String,
  detailImageKey: String,
  subtitle: String,
  subttileHead: [
    {
      name: String,
      benefits: [String]
    }
  ],
  subtitle1: String,
  subttileHead1: [
    {
      name: String,
      benefits: [String]
    }
  ],
  subheading2: String,
  subheading3: String,
  paragraph1: String,
  subttileHead3: [
    {
      name: String,
      benefits: [String]
    }
  ],
  outcome: String,
  lesson: String,
  subtitle5: String,
  paragraph2: String,
  subttileHead4: [
    {
      name: String,
      benefits: [String]
    }
  ],
  outcome1: String,
  lesson1: String,
  subtitle6: String,
  paragraph3: String,
  subttileHead5: [
    {
      name: String,
      benefits: [String]
    }
  ],
  outcome2: String,
  lesson2: String,
  conclusion: String,
  conclusion1: String,
  conclusion2: String
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;



