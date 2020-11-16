import Movie from '../models/Movie';
import User from '../models/User';

class MovieController {

  async index(req, res) {
    const user = await Movie.find();

    return res.json(user);
  }

  async show(req, res) {
    const { title } = req.params;
    const movie = await Movie.findOne({ title });

    if (!movie) {
      return res.status(404).json({ error: 'Filme não encontrado' });
    }
    return res.status(200).json(movie);
  }

  async store(req, res) {
    const { user_id } = req.headers;
    const { filename } = req.file;
    const {
      title,
      genre,
      release_date,
      main_actors,
      summarized_plot,
      youtube_trailer,
    } = req.body;

    const movie = await Movie.findOne({title});
    if( !movie ) {
      const movie = await Movie.create({
        user: user_id,
        folder: filename,
        title,
        genre,
        release_date,
        main_actors,
        summarized_plot,
        youtube_trailer,
      });

      return res.json(movie);
    }
    return res.status(400).json("Vocẽ já adicionou esse filme na sua lista");
  }

  async update(req, res) {
    const { filename } = req.file;
    const { movie_id } = req.params;
    const { user_id } = req.headers;
    const {
      title,
      genre,
      release_date,
      main_actors,
      summarized_plot,
      youtube_trailer,
    } = req.body;

    const user = await User.findById(user_id);
    const movie = await Movie.findById(movie_id);

    if (String(user._id) !== String(movie.user)) {
      return res.status(401).json({ error: 'Não autorizado.' });
    }

    await Movie.updateOne(
      { _id: movie_id },
      {
        user: user_id,
        folder: filename,
        title,
        genre,
        release_date,
        main_actors,
        summarized_plot,
        youtube_trailer,
      }
    );

    return res.send();
  }

  async destroy(req, res) {
    const { movie_id } = req.body;
    const { user_id } = req.headers;

    const user = await User.findById(user_id);
    const movie = await Movie.findById(movie_id);

    if (String(user._id) !== String(movie.user)) {
      return res.status(401).json({ error: 'Não autorizado.' });
    }

    await Movie.findByIdAndDelete({ _id: movie_id });
    return res.json({ message: 'Excluída com sucesso' });
  }
}

export default new MovieController();
