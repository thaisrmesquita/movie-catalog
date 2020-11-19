import React, { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Label, Input,FormText } from 'reactstrap';
import { Link, useHistory } from 'react-router-dom';
import api from '../../../services/api';
import './form-movie.css';

const FormMovie = () => {
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [release_date, setReleaseDate] = useState('');
    const [main_actors, setMainActors] = useState('');
    const [summarized_plot, setSummarizedPlot] = useState('');
    const [youtube_trailer, setYoutubeTrailer] = useState('');
    const [folder, setFolder] =useState('');
    const [movie, setMovie] = useState([]);
    const [images, setImages] = useState([]);
    
    const userId = localStorage.getItem('userId');
    const apiKey = 'dc93407a';
    
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

    function convertDate(d){
        console.log(d);
        var parts = d.split(" ");
        var months = {Jan: "01",Feb: "02",Mar: "03",Apr: "04",May: "05",Jun: "06",Jul: "07",Aug: "08",Sep: "09",Oct: "10",Nov: "11",Dec: "12"};
        return parts[2] +"-" + months[parts[1]]+"-" + parts[0];
    }

    useEffect(()=>{
        if(title === '') {
            return;
        }

        api.get(`http://www.omdbapi.com/?t=${title}&apiKey=${apiKey}`).then(response => {
            setMovie(response.data);
        })
        setGenre(movie.Genre);
        setReleaseDate(movie.Released);
        setMainActors(movie.Actors);
        setSummarizedPlot(movie.Plot);
        setFolder(movie.Poster);

    },[title]);



    async function handleRegister (event){
        event.preventDefault();
        console.log(title);
        console.log(release_date);
        console.log(genre);
        const data = new FormData();
        data.append("title", title);
        data.append("genre", genre);
        data.append("release_date",release_date);
        data.append("main_actors", main_actors);
        data.append("summarized_plot", summarized_plot);
        data.append("youtube_trailer", youtube_trailer);
        data.append("folder", images[0]);
        await api.post('/movies', data, {headers: {user_id: userId}});
        alert("Cadastro Realizado com sucesso!");
    }

    return (
        <div>
             <div className="container">
                <div className="container-form-register-movie">
                    <Form className="form">
                        <FormGroup>
                            <Label for="title">Título do Filme</Label>
                            <Input type="text" name="name" placeholder="Título do Filme"
                            value={ title }
                            onChange={ e=>setTitle(e.target.value) }/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="genre">Gênero</Label>
                            <Input type="text" name="genre" placeholder="Gênero"
                            value={ genre }
                            onChange={ e=>setGenre(e.target.value) }/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="release_date">Data de Lançamento</Label>
                            <Input type="text" name="release_date" placeholder="Data de Lançamento"
                            value={ release_date }
                            onChange={ e=>setReleaseDate(e.target.value) }/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="title">Atores Principais</Label>
                            <Input type="text" name="main_actors" placeholder="Atores principais"
                            value={ main_actors }
                            onChange={ e=>setMainActors(e.target.value) }/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="title">Resumo do Filme</Label>
                            <Input type="text" name="summarized_plot" placeholder="Resumo do Filme"
                            value={ summarized_plot }
                            onChange={ e=>setSummarizedPlot(e.target.value) }/>
                        </FormGroup> 
                        <FormGroup>
                            <Label for="title">Trailler do Youtube</Label>
                            <Input type="text" name="youtube_trailer" placeholder="Trailler do Youtube"
                            value={ youtube_trailer }
                            onChange={ e=>setYoutubeTrailer(e.target.value) }/>
                        </FormGroup>                       
                        <FormGroup>
                            <Label for="exampleFile">File</Label>
                            <input multiple onChange={handleSelectedImages} type="file" id="image[]"/>
                        </FormGroup>
                        <FormGroup className="btn-form">
                            <Button onClick={handleRegister}>Salvar Filme</Button>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default FormMovie;