document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const imagen = urlParams.get("imagen");
    const movieImage = document.getElementById("movie-image");
    const movieTrailer = document.getElementById("movie-trailer");

     

    // En lugar de usar parámetros de consulta, podrías asignar dinámicamente
    // la URL del tráiler según la película seleccionada.
    if (imagen === "aftersun.jpg") {
        movieImage.src = imagen;
        movieTrailer.src = "https://www.youtube.com/embed/Qc9NcoVXWUo?si=bMGWndRc3vDoqRE5";
        
        
    } else if (imagen === "avatar-el_camino_del_agua.jpg") {
        movieImage.src = imagen;
        movieTrailer.src = "https://www.youtube.com/embed/96d3jsVWnOE?si=zianU7E_YbOrIAtU";
        
    } else if (imagen === "babylon.jpg") {
        movieImage.src = imagen;
        movieTrailer.src = "https://www.youtube.com/embed/gBil8RpweBE?si=N70Upu7xqUvVmmOK";
    } else if (imagen === "creed_iii.jpg") {
        movieImage.src = imagen;
        movieTrailer.src = "https://www.youtube.com/embed/jdEEZeRiyeQ?si=oYdPbW55v_a-aaiv";    
    } else if (imagen === "super mario.jpg") {
        movieImage.src = imagen;
        movieTrailer.src = "https://www.youtube.com/embed/SvJwEiy2Wok?si=RMmMo-guvBnzZYPD";
    } else if (imagen === "shazam.jpg"){
        movieImage.src = imagen;
        movieTrailer.src = "https://www.youtube.com/embed/AU1L6TdRPK0?si=0h0V72QBoIZNEqFQ";
    }

    if (imagen === "norma.jpg") {
        movieImage.src = imagen;
        movieTrailer.src = "https://www.youtube.com/embed/A4FwoOzEBcw?si=RRbJetgZ9XYWcGtX";
    } else if (imagen === "inseparables.jpg") {
        movieImage.src = imagen;
        movieTrailer.src = "https://www.youtube.com/embed/tZTJIs38f5M?si=AbEQbUEyr0mWWta0";
    } else if (imagen === "el_duelo.jpg") {
        movieImage.src = imagen;
        movieTrailer.src = "https://www.youtube.com/embed/01bwsd_4r9g?si=1yudJJKLheME2f6L";
    } else if (imagen === "trolls3.jpg") {
        movieImage.src = imagen;
        movieTrailer.src = "https://www.youtube.com/embed/ftUpFjGKuY0?si=BYFIanGc8XMr3KjJ";    
    } else if (imagen === "elio.jpg") {
        movieImage.src = imagen;
        movieTrailer.src = "https://www.youtube.com/embed/mGEtAo5xK1k?si=3iIZxasM6i-E9Diu";
    } else if (imagen === "asesinos.jpg") {
        movieImage.src = imagen;
        movieTrailer.src = "https://www.youtube.com/embed/a5Oq0Sru8TI?si=F2LDN1PYku-8VeBX";
    }

    
    
});
