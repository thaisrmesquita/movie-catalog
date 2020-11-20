import faker from 'faker';
import User from './src/models/User';
import Movie from './src/models/Movie';

export const seedUsers = async () => {
    try{
        const quantity = 2
        const users = [];

        for (let i = 0; i < quantity; i++){
            users.push(new User({
                name: faker.internet.userName(),
                email: faker.internet.email(),
                password: faker.internet.password()
            }));
        }

        console.log(users)

        users.forEach(user => {
            User.create(user);
        })
        console.log("Coleção de usuários populados!");

    }catch(error){
        console.log(error);
    }

    console.log("end")
}

export const seedMovies = async () => {
    
    try {
        const users = await User.find();

        console.log('Aqui',users[0]._id);
        const quantity = 3;
        const movies = [
            {   
                "title":"THE LITTLE RASCALS",
                "genre": "Kids And Family, Comedy",
                "release_date": "02015-12-10",
                "main_actors": "Bill Oakes, Mark Allan, Michael King",
                "summarized_plot": "Mischievous youngsters Spanky (Travis Tedford) and Buckwheat (Ross Elliot Bagley) lead an anti-girl organization, and they pick their buddy Alfalfa (Bug Hall) to represent them in an all-important soapbox car rally. When the boys then find their driver canoodling with schoolmate Darla (Brittany Ashton Holmes), they decide they must break up the couple. Unfortunately, while Spanky and his pals are busy meddling in Alfalfa's affairs, their prized race car is nabbed by two young toughs.",
                "youtube_trailer": "https://www.youtube.com/watch?v=OUXY7qunh2U&ab_channel=AlanFilmesCl%C3%A1ssicosRJ",
                "folder": "os_batutinhas.jpeg"
            },
            {   
                "title":"BEETHOVEN",
                "genre": "Kids And Family, Comedy",
                "release_date": "2020-12-02",
                "main_actors": "When the family of George Newton (Charles Grodin) decides to adopt a cute St. Bernard puppy, the patriarch soon feels displaced by the dog. Before long, the adorable canine, dubbed Beethoven, has grown considerably, leading to household mishaps. While George's wife and kids dote on Beethoven, it takes time for him to see the pooch's finer qualities. However, Beethoven's life with the Newton family is jeopardized when a scheming vet (Dean Jones) tries to nab the dog for a deadly experiment.",
                "summarized_plot": "Este filme é muito bom",
                "youtube_trailer": "https://www.youtube.com/watch?v=gIGRNPOf80A&feature=youtu.be&ab_channel=folidev",
                "folder": "bet.jpg"
            },
            {   
                "title":"FROZEN",
                "genre": "Ação",
                "release_date": "2020-12-02",
                "main_actors": "Fulano",
                "summarized_plot": "When their kingdom becomes trapped in perpetual winter, fearless Anna (Kristen Bell) joins forces with mountaineer Kristoff (Jonathan Groff) and his reindeer sidekick to find Anna's sister, Snow Queen Elsa (Idina Menzel), and break her icy spell. Although their epic journey leads them to encounters with mystical trolls, a comedic snowman (Josh Gad), harsh conditions, and magic at every turn, Anna and Kristoff bravely push onward in a race to save their kingdom from winter's cold grip.",
                "youtube_trailer": "https://www.youtube.com/watch?v=gIGRNPOf80A&feature=youtu.be&ab_channel=folidev",
                "folder": "frozen.jpg"
            }
        ];

        const movies2 = [];

        for (let i = 0; i < quantity; i++){
            movies2.push(new Movie({
                user:users[i]._id,
                title: movies[i].title,
                genre: movies[i].genre,
                release_date: movies[i].release_date,
                main_actors: movies[i].main_actors,
                summarized_plot: movies[i].summarized_plot,
                youtube_trailer: movies[i].youtube_trailer,
                folder: movies[i].folder
            }));
        } 

        console.log(movies2);

        movies2.forEach(movie => {
            Movie.create(movie);
        });
        console.log("Coleção de filmes populados!");

    }catch(error){
        console.log(error);
    }

    console.log("end");
    }


