var express = require('express');
var router = express.Router();

var movies = [
    {id: 101, name: "fight",  year: 1999, rating: 8.1},
    {id: 102, name: "inception",  year: 2010, rating: 8.7},
    {id: 103, name: "dark knight",  year: 2008, rating: 9},
    {id: 104, name: "12 angry men",  year: 1957, rating: 8.9}

];

router.get('/', function(req,res){
    res.json(movies)
});

router.get('/:id', function(req,res){
    var currMovies = movies.filter(function(movie){
        if(movie.id == req.params.id){
            return true;
        }
    });
    if(currMovies.length == 1){
        res.json(currMovies[0])
    } else {
        res.status(404);
        res.json({message: "not found"});
    }
})

router.post('/', function(req,res){
    var newId = movies[movies.length-1].id+1;
    const newMovie = {
                id: newId,
                name: req.body.name,
               year: req.body.year,
                rating: req.body.rating
    }
    if(!newMovie.name || !newMovie.year || !newMovie.rating){
        return res.status(400).json({message: "bad request"});
        
    }else{
        return movies.push(newMovie);
    }
    

    // if(!req.body.name || !req.body.year ||
    // !req.body.rating){
    //     res.status(400);
    //     res.json({message: "bad request"});
    // }else{
    //     var newId = movies[movies.length-1].id+1;
    //     movies.push({
    //         id: newId,
    //         name: req.body.name,
    //         year: req.body.year,
    //         rating: req.body.rating
    //     });
    //     res.json({message: "new Movie Created", location: "/movies/" + newId});
    // }
})

router.put('/:id', function(req,res){
    if(!req.body.name || !req.body.year || !req.body.rating){
        res.status(400);
        res.json({message: "Bad Request"});
    }else{
        var updateIndex = movies.map(function(movie){
            return movie.id;
        }).indexOf(parseInt(req.params.id));

        if(updateIndex === -1){
            movies.push({
                id: req.params.is,
                name: req.params.name,
                year: req.body.year,
                rating: req.body.rating
            });
            res.json({message: "new movie created", location: "/movies/" + req.params.id});
        }else{
            movies[updateIndex] = {
                id: req.params.id,
                name: req.body.name,
                year: req.body.year,
                rating: req.body.rating
            };
            res.json({message: "Movie id " + req.params.id + " updated.", 
            location: "/movies/" + req.params.id});
        }
    }

})

router.delete('/:id', function(req, res){
    var removeIndex = movies.map(function(movie){
        return movie.id;
    }).indexOf(req.params.id);

    if (removeIndex === -1){
        res.json({message: "not found"});
    }else{
        movies.splice(removeIndex, 1);
        res.send({message: "movie" + req.params.id + "removed"})
    }
});
module.exports = router