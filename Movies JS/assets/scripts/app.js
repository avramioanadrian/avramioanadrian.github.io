const addMovieModal = document.getElementById("add-modal");
const startAddMovieButton = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInput = addMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");
let deleteMovieModal = document.getElementById("delete-modal");
const movies = [];

const updateUI = () => {
if(movies.length === 0){
    entryTextSection.style.display ="block";
}else{
    entryTextSection.style.display ="none";
}
};
const closeMovieDelecionModal = () => {
    toggleBackdrop();
    deleteMovieModal.classList.remove("visible");
    };

const deleteMovie = (idMovie) => {
    let indexMovie = 0 ; 
    for(const movie of movies){
        if(movie.id === idMovie){
            break;
        }

        indexMovie ++;
    }
    movies.splice(indexMovie, 1);
    const listRoot = document.getElementById("movie-list");
    listRoot.children[indexMovie].remove();
    closeMovieDelecionModal();
    updateUI();
};


const deleteMovieHandler = (idMovie) => {
 
    deleteMovieModal.classList.add("visible");
    toggleBackdrop();
    let cancelDeletionButton = deleteMovieModal.querySelector(".btn--passive");
    let confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");
    confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));
    cancelDeletionButton.removeEventListener("click", closeMovieDelecionModal);
    confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");
    cancelDeletionButton.addEventListener("click", closeMovieDelecionModal);
    confirmDeletionButton.addEventListener("click", deleteMovie.bind(null,idMovie));
    
    
};

const closeMovieModal = () => {
    addMovieModal.classList.remove("visible");
};

const renderElement = (id, title, image, rating) =>{
    const element = document.createElement("li");
    element.className = "movie-element";
    element.innerHTML = `
    <div class="class-movie__element">
    <img src="${image} alt="${title}">
    </div>
    <div class="movie-element__info">
    <h2>${title}</h2>
    <p>${rating} /5 stars </p>
    </div>
    `;
    element.addEventListener("click", deleteMovieHandler.bind(null, id));
    const listRoot = document.getElementById("movie-list");
    listRoot.appendChild(element);
};

const toggleBackdrop = () => {
    backdrop.classList.toggle("visible");
};

const showMovieModal = () => {
    addMovieModal.classList.add("visible");
    toggleBackdrop();
};

const backdropClickHandler = () => {
closeMovieModal();
closeMovieDelecionModal();
clearMovieInputs();

};

const clearMovieInputs = () => {
for(const input of userInput){
    input.value ="";
}
};

const cancelAddMovieHandler = () => {
closeMovieModal();
toggleBackdrop();
clearMovieInputs()
};

const addMovieHandler = () => {
const titleValue = userInput[0].value;
const imageUrlValue = userInput[1].value;
const ratingValue = userInput[2].value;

if(titleValue.trim() === "" || imageUrlValue.trim() === "" || parseInt(ratingValue) < 0 || parseInt(ratingValue) > 5){
    alert("INVALID INPUT !");
    return;
}
const movie = {
    id: Math.random().toString(),
    title: titleValue,
    image:imageUrlValue,
    rating: ratingValue
};
movies.push(movie);
closeMovieModal();
toggleBackdrop();
clearMovieInputs();
renderElement(movie.id, movie.title, movie.image, movie.rating);
updateUI();
};

startAddMovieButton.addEventListener("click", showMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);