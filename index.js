const elementoResposta = document.querySelector("#resposta")
const inputPreferencia = document.querySelector("#inputPreferencia")
const buttonSortear = document.querySelector("#buttonSortear")

const singles = [
    "Carmen Bus S18",
    "Nihilism S18",
    "Club Night S18",
    "Forgotten Vampire S18",
    "Repentance S19",
    "Tropicanic S19",
    "Broken Karma S19",
    "Snapping S19",
]

const doubles = [
    "Switronic D19",
    "Stardream D19",
    "Janus D19",
    "Gashina D19",
    "Full Moon D20",
    "Gotta Go D20",
    "Cross Ray D20",
    "Telling Fortune Flower D20"
]

//clicar em SORTEAR  
function sortear(){
    if(inputPreferencia.value == ""){
        alert("Digite se quer single ou double.")
        return
    } 

    //para poder mostrar o que foi digitado
    const preferencia = "<div>" + inputPreferencia.value + "</div>"

    //gerar número aleatório
    const totalSingles = singles.length;
    const totalDoubles = doubles.length;

    //primeiro para a lista de singles
    const numeroAleatorio = Math.floor(Math.random() * totalSingles);

    elementoResposta.innerHTML =  preferencia + singles[numeroAleatorio];
    console.log(numeroAleatorio)
    console.log(singles[numeroAleatorio])
}