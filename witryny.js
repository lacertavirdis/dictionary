const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let wynik = document.getElementById("wynik");
let btn1 = document.getElementById("btn");

btn1.addEventListener("click", function(){
    let sl = document.getElementById("pasek").value;
    fetch(`${URL}${sl}`)
        .then((response) => response.json())
        .then((data)=>{
            console.log(data);
            //żeby nie przypisywać osobno każdemu div danych,
            // wszystko jest przypisywane do inner HTML najwiekszego diva
            wynik.innerHTML =
            `<div id="word">
                <h3>${sl}</h3>
            </div>
            <div class="things">
                <p>${data[0].meanings[0].partOfSpeech}<p>
                <i id="pho">/${data[0].phonetic}/</i>
            </div>
            <p id="def">
            ${data[0].meanings[0].definitions[0].definition}  
            </p>`;
            //przypadek braku zapisu fonetycznego np luciferase
            let phon = document.getElementById("pho").innerText;
            if(phon=="/undefined/"){
            document.getElementById("pho").innerText = "No phonetic notation for this word";} }) 
            //brak słowa np randomowe rzeczy wystukane na klawiaturze hjfkfhjd
        .catch(() => wynik.innerHTML = `<h3>Failed to find the word you are searching for<h3>`) 

});
            
