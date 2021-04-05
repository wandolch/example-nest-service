import { Schema, Document } from 'mongoose';

export const PageSchema = new Schema({
  content: {
    required: true,
    type: Schema.Types.Mixed
  },
  templateId: {
    required: true,
    type: String
  },
  isActive: {
    required: true,
    type: Boolean
  },
  assignment: {
    required: true,
    type: {
      accountId: String,
      projectId: String,
      processId: String,
    }
  },
  name: {
    required: true,
    type: String
  },
  creatorId: {
    required: true,
    type: String
  }
}, {timestamps: true});

export interface PageModel extends Document {
  content: Record<string, any>
  templateId: string
  isActive: boolean
  assignment: Assignment
  name: string
  creatorId: string
  createdAt: number
  updatedAt: number
}

export interface Assignment {
  accountId: string
  projectId?: string
  processId?: string
}