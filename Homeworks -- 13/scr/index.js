let user = new Object ();
let t = true;
let Namem = class Namem {
   constructor(name, birth_year, eye_color, gender, hair_color, height, mass,skin_color, homeworld, films, species, created) {
     this.name = name;
     this.birth_year = birth_year;
     this.eye_color = eye_color;
     this.gender = gender;
     this.hair_color = hair_color;
     this.height = height;
     this.mass = mass;
     this.skin_color = skin_color;
     this.homeworld = homeworld;
     this.films = films;
     this.species = species;
     this.created = created;
   }
 }
let GGG = document.querySelector(".ggg");
 user = [
    "https://th.bing.com/th/id/OIP.rH48qx-BIsYGYClrC4-spgDZEf?pid=ImgDet&rs=1 ",
    "./img/C-3PO.jpg",
     "https://media.istockphoto.com/photos/full-size-r2d2-picture-id472287728",
    "https://wikiwarriors.org/mediawiki/images/7/73/%D0%94%D0%B0%D1%80%D1%82_%D0%92%D0%B5%D0%B9%D0%B4%D0%B5%D1%80_%281%29.jpg",
    "./img/Leia.jpg",
    "./img/Owen-OP.jfif",
    "./img/6.jfif",
    "./img/7.jfif",
    "./img/10.jfif",
    "https://lostfilm.info/images/photo/103/21133799_1027963.jpg"
    
    
 ] 
 for (let index = 0; index <= 9; index++) {
    
    let  divv = document.createElement("div")
    divv.className = "divv"

    divv.id = `g${index + 1}`
    document.querySelector(".ggg").append(divv)
 };
 let tr
 let but
 let dav 
 let rtt
 for ( rtt = 0; rtt <= 9   ; rtt++) {
   if (t == true){tr =  imgg = document.createElement("img");
    imgg.src = user[rtt]
    imgg.style.width = "150px"
    imgg.style.height = "200px"
    imgg.className= "card"
    imgg.id = `#r${rtt + 1 }`
    
    document.querySelector(`#g${rtt + 1 }`).append(imgg)}
    

    
    dav = document.createElement("input")
    dav.className= "dav"
    dav.type = "button"
    dav.value = 'Зберегти дані'
    dav.id = `g${rtt + 1}`
    document.querySelector(`#g${rtt + 1 }`).prepend(dav)
   

    
   /*but= document.createElement("input")
    but.className= "but"
    but.type = "button"
    but.value = 'Показати дані'
    but.id = `h${rtt + 1}`
    document.querySelector(`#g${rtt + 1 }`).prepend(but)*/
   
 };
let i
 
   



 
 
 
 let = d = 0;
 
 
 
 let url = "https://swapi.dev/api/people"

 
 const date =fetch(url, {method:"get"});

 let date1 = date.then((rez)=> rez.json())

 date1.then((rez1)=>{
   
    console.log(rez1.results)
     GGG.addEventListener("mouseover", (e) => {
   i = "";
   
   i = e.target.id

   
   
})



let nnnn = "fdgh"
 GGG.addEventListener("click", (e)=>{
  
   if (i == "g1"){
      d = 0;
      console.log(new Namem(rez1.results[d].name, rez1.results[d].birth_year, rez1.results[d].eye_color, rez1.results[d].gender, rez1.results[d].hair_color, rez1.results[d].height, 
         rez1.results[d].mass, rez1.results[d].skin_color, rez1.results[d].homeworld, rez1.results[d].films.length, rez1.results[d].species,
         rez1.results[d].created));
   }
   if (i == "h1"){
      alert( rez1.results[0].birth_year, rez1.results[0].eye_color, rez1.results[0].gender, rez1.results[0].hair_color, rez1.results[0].height, 
         rez1.results[0].mass, rez1.results[0].skin_color, rez1.results[0].homeworld, rez1.results[0].films.length, rez1.results[0].species,
         rez1.results[0].created)
   }
   if (i == "g2"){
      d = 1;
      console.log(new Namem(rez1.results[d].name, rez1.results[d].birth_year, rez1.results[d].eye_color, rez1.results[d].gender, rez1.results[d].hair_color, rez1.results[d].height, 
         rez1.results[d].mass, rez1.results[d].skin_color, rez1.results[d].homeworld, rez1.results[d].films.length, rez1.results[d].species,
         rez1.results[d].created));
   };

   if (i == "g3"){
      d = 2;
      console.log(new Namem(rez1.results[d].name, rez1.results[d].birth_year, rez1.results[d].eye_color, rez1.results[d].gender, rez1.results[d].hair_color, rez1.results[d].height, 
         rez1.results[d].mass, rez1.results[d].skin_color, rez1.results[d].homeworld, rez1.results[d].films.length, rez1.results[d].species,
         rez1.results[d].created));
   }

   if (i == "g4"){
      d = 3;
      console.log(new Namem(rez1.results[d].name, rez1.results[d].birth_year, rez1.results[d].eye_color, rez1.results[d].gender, rez1.results[d].hair_color, rez1.results[d].height, 
         rez1.results[d].mass, rez1.results[d].skin_color, rez1.results[d].homeworld, rez1.results[d].films.length, rez1.results[d].species,
         rez1.results[d].created));
   }

   if (i == "g5"){
      d = 4;
      console.log(new Namem(rez1.results[d].name, rez1.results[d].birth_year, rez1.results[d].eye_color, rez1.results[d].gender, rez1.results[d].hair_color, rez1.results[d].height, 
         rez1.results[d].mass, rez1.results[d].skin_color, rez1.results[d].homeworld, rez1.results[d].films.length, rez1.results[d].species,
         rez1.results[d].created));
   }

   if (i == "g6"){
      d = 5;
      console.log(new Namem(rez1.results[d].name, rez1.results[d].birth_year, rez1.results[d].eye_color, rez1.results[d].gender, rez1.results[d].hair_color, rez1.results[d].height, 
         rez1.results[d].mass, rez1.results[d].skin_color, rez1.results[d].homeworld, rez1.results[d].films.length, rez1.results[d].species,
         rez1.results[d].created));
   }

   if (i == "g7"){
      d = 6;
      console.log(new Namem(rez1.results[d].name, rez1.results[d].birth_year, rez1.results[d].eye_color, rez1.results[d].gender, rez1.results[d].hair_color, rez1.results[d].height, 
         rez1.results[d].mass, rez1.results[d].skin_color, rez1.results[d].homeworld, rez1.results[d].films.length, rez1.results[d].species,
         rez1.results[d].created));
   }

   if (i == "g8"){
      d = 7;
      console.log(new Namem(rez1.results[d].name, rez1.results[d].birth_year, rez1.results[d].eye_color, rez1.results[d].gender, rez1.results[d].hair_color, rez1.results[d].height, 
         rez1.results[d].mass, rez1.results[d].skin_color, rez1.results[d].homeworld, rez1.results[d].films.length, rez1.results[d].species,
         rez1.results[d].created));
   }

   if (i == "g9"){
      d = 8;
      console.log(new Namem(rez1.results[d].name, rez1.results[d].birth_year, rez1.results[d].eye_color, rez1.results[d].gender, rez1.results[d].hair_color, rez1.results[d].height, 
         rez1.results[d].mass, rez1.results[d].skin_color, rez1.results[d].homeworld, rez1.results[d].films.length, rez1.results[d].species,
         rez1.results[d].created));
   }

   if (i == "g10"){
      d = 9;
      console.log(new Namem(rez1.results[d].name, rez1.results[d].birth_year, rez1.results[d].eye_color, rez1.results[d].gender, rez1.results[d].hair_color, rez1.results[d].height, 
         rez1.results[d].mass, rez1.results[d].skin_color, rez1.results[d].homeworld, rez1.results[d].films.length, rez1.results[d].species,
         rez1.results[d].created));
   }
  
 })

})


 