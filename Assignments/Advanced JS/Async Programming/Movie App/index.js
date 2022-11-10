let arr = [];
let movie = function (name, releaseDate, poster, iMDB) {
  this.name = name;
  this.releaseDate = releaseDate;
  this.poster = poster;
  this.iMDB = iMDB;
};

let Brahmaastra1 = new movie(
  "Brahmāstra",
  "September 9, 2022",
  "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRuIc9iPQIG4n8PDRpwCSnpBgvuZuVKe9yhNe61YVpyH0HP_fwR",
  "5.6"
);
let Brahmaastra2 = new movie(
  "Brahmāstra",
  "September 9, 2022",
  "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRuIc9iPQIG4n8PDRpwCSnpBgvuZuVKe9yhNe61YVpyH0HP_fwR",
  "5.6"
);
let Brahmaastra3 = new movie(
  "Brahmāstra",
  "September 9, 2022",
  "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRuIc9iPQIG4n8PDRpwCSnpBgvuZuVKe9yhNe61YVpyH0HP_fwR",
  "5.6"
);
let Brahmaastra4 = new movie(
  "Brahmāstra",
  "September 9, 2022",
  "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRuIc9iPQIG4n8PDRpwCSnpBgvuZuVKe9yhNe61YVpyH0HP_fwR",
  "5.6"
);
let Brahmaastra5 = new movie(
  "Brahmāstra",
  "September 9, 2022",
  "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRuIc9iPQIG4n8PDRpwCSnpBgvuZuVKe9yhNe61YVpyH0HP_fwR",
  "5.6"
);
let Brahmaastra6 = new movie(
  "Brahmāstra",
  "September 9, 2022",
  "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRuIc9iPQIG4n8PDRpwCSnpBgvuZuVKe9yhNe61YVpyH0HP_fwR",
  "5.6"
);
let Brahmaastra7 = new movie(
  "Brahmāstra",
  "September 9, 2022",
  "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRuIc9iPQIG4n8PDRpwCSnpBgvuZuVKe9yhNe61YVpyH0HP_fwR",
  "5.6"
);
let Brahmaastra8 = new movie(
  "Brahmāstra",
  "September 9, 2022",
  "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRuIc9iPQIG4n8PDRpwCSnpBgvuZuVKe9yhNe61YVpyH0HP_fwR",
  "5.6"
);
let Brahmaastra9 = new movie(
  "Brahmāstra",
  "September 9, 2022",
  "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRuIc9iPQIG4n8PDRpwCSnpBgvuZuVKe9yhNe61YVpyH0HP_fwR",
  "5.6"
);

arr.push(Brahmaastra1);
arr.push(Brahmaastra2);
arr.push(Brahmaastra3);
arr.push(Brahmaastra4);
arr.push(Brahmaastra5);
arr.push(Brahmaastra6);
arr.push(Brahmaastra7);
arr.push(Brahmaastra8);
arr.push(Brahmaastra9);
let count = 0;
function show1() {
  let obj = arr[count++];
  let div = document.createElement("div");
  let img = document.createElement("img");
  img.setAttribute("src", obj.poster);
  let name = document.createElement("p");
  name.innerText = obj.name;
  let releaseDate = document.createElement("p");
  releaseDate.innerText = obj.releaseDate;
  div.append(img, name, releaseDate);
  document.getElementById("movies").append(div);
}

console.log(arr);
let count1 = 0;
let id = setInterval(function () {
  if (count1 < arr.length) {
    show1();
    count1++;
  } else clearInterval(id);
}, 200);
