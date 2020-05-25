import { Schema, model, Document } from 'mongoose';

interface Isite extends Document {
  url: string;
}

const SiteSchema = new Schema(
  {
    url: String,
  },
  {
    timestamps: true,
  }
);

export default model<Isite>('Site', SiteSchema);
