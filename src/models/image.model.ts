import { Schema, Document } from 'mongoose';
import { Assignment } from './page.model';

export const ImageSchema = new Schema({
  _id: {
    required: true,
    type: String
  },
  assignment: {
    required: true,
    type: {
      accountId: String,
      projectId: String,
      processId: String,
    }
  },
  creatorId: {
    required: true,
    type: String
  }
}, {timestamps: true, _id: false});

export interface ImageModel extends Document {
  _id: string
  assignment: Assignment
  creatorId: string
  createdAt: number
  updatedAt: number
}
