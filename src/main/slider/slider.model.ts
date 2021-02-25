import * as mongoose from 'mongoose';

export const SliderSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  image: { type: String, required: true },
});

export interface Slider {
  id: string;
  title: string;
  url: string;
  image: string;
}
