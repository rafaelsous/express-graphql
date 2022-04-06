import mongoose, { Schema } from 'mongoose';


type Post = {
  content: string;
  author: string;
};

const PostSchema = new Schema({
  content: String,
  createdAt: {
    type: "Date",
    default: Date.now(),
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  }
});

export default mongoose.model<Post>('Post', PostSchema);