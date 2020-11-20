import React, { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Label, Input,FormText } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import api from '../../../services/api';
import './form-movie.css';
import MovieUpdate from '../../../pages/Movie/MovieUpdate';

const FormMovieUpdate = (props) => {

    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [release_date, setReleaseDate] = useState('');
    const [main_actors, setMainActors] = useState('');
    const [summarized_plot, setSummarizedPlot] = useState('');
    const [youtube_trailer, setYoutubeTrailer] = useState('');
    const [folder, setFolder] =useState('');
    const [movie, setMovie] = useState([]);
    const [images, setImages] = useState([]);
    const history = useHistory();
    const userId = localStorage.getItem('userId');
    const movieId = props.match.params.id;

    useEffect(()=>{
        api.get(`movies/${movieId}`).then( response => {
            setMovie(response.data);
        })
    }, []);


    function handleSelectedImages(event){
        if (!event.target.files){
          return;
        }
    
        const selectedImages = Array.from(event.target.files);
    
        setImages(selectedImages);
    
        const selectedImagesPreview = selectedImages.map(image=>{
          return URL.createObjectURL(image);
        });
    
      }
      async function handleRegister (event){
        event.preventDefault();

        const data = new FormData();
        data.append("title", title);
        data.append("genre", genre);
        data.append("release_date",release_date);
        data.append("main_actors", main_actors);
        data.append("summarized_plot", summarized_plot);
        data.append("youtube_trailer", youtube_trailer);
        data.append("folder", images[0]);

        await api.put(`/movies/${movieId}`, data, {headers: {user_id: userId}});
        alert("Cadastro Realizado com sucesso!");
        history.push('/dashboard');

}


    return (
        <div>
             <div className="container-form-register-new-movie">
                <div className="container-form-register-movie">
                    <Form className="form">
                        <FormGroup>
                            <Label for="title">Título do Filme</Label>
                            <Input type="text" name="name" placeholder={movie.title}
                            value={ title }
                            onChange={ e=>setTitle(e.target.value) }/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="genre">Gênero</Label>
                            <Input type="text" name="genre" placeholder={movie.genre}
                            value={ genre }
                            onChange={ e=>setGenre(e.target.value) }/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="release_date">Data de Lançamento</Label>
                            <Input type="text" name="release_date" placeholder={movie.release_date}
                            value={ release_date }
                            onChange={ e=>setReleaseDate(e.target.value) }/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="title">Atores Principais</Label>
                            <Input type="text" name="main_actors" placeholder={movie.main_actors}
                            value={ main_actors }
                            onChange={ e=>setMainActors(e.target.value) }/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="title">Resumo do Filme</Label>
                            <Input type="text" name="summarized_plot" placeholder={movie.summarized_plot}
                            value={ summarized_plot }
                            onChange={ e=>setSummarizedPlot(e.target.value) }/>
                        </FormGroup> 
                        <FormGroup>
                            <Label for="title">Trailler do Youtube</Label>
                            <Input type="text" name="youtube_trailer" placeholder={movie.youtube_trailer}
                            value={ youtube_trailer }
                            onChange={ e=>setYoutubeTrailer(e.target.value) }/>
                        </FormGroup>                       
                        <FormGroup>
                            <Label for="exampleFile">File</Label>
                            <input multiple onChange={handleSelectedImages} type="file" id="image[]"/>
                        </FormGroup>
                        <FormGroup className="btn-form">
                            <Button className="btn-save-movie" onClick={handleRegister}>Salvar Filme</Button>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default FormMovieUpdate;