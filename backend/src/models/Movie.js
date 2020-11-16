import { Schema, model, SchemaTypes } from 'mongoose';

const MovieSchema = new Schema(
  {
    title: String,
    genre: String,
    release_date: Date,
    main_actors: String,
    summarized_plot: String,
    youtube_trailer: String,
    folder: String,
    user: {
      type: SchemaTypes.ObjectId,
      ref: 'User',
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);
MovieSchema.virtual('folder_url').get(function () {
  return `http://localhost:3333/files/${this.folder}`;
});

export default model('Movie', MovieSchema);
