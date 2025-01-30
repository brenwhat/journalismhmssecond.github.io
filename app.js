let type = 0;
let grade = 0;
let cat = 0;

let gradetext = "All Grades";
let cattext = "All Categories";

const categories = {
  1 : "Category 1",
  2 : "Nonfiction Narrative",
  3 : "Category 3",
  4 : "Category 4" 
}

// gallery 0 is for art, gallery 1 is for text

const Gallery = {
  1: { gallery: 0, title: 'Untitled 1', author: 'Myrabelle Kuo', grade: "8", category : 1, caption : "", imageURL: "./workTypes/Myrabel.jpg", coverImage: "./workTypes/Myrabel.jpg"},
  2: { gallery: 0, title: 'Untitled 2', author: 'Myrabelle Kuo', grade: "8", category : 1, caption : "", imageURL: "./workTypes/Myrabel2.jpg", coverImage: "./workTypes/Myrabel2.jpg"},
  3: { gallery: 0, title: 'Untitled 3', author: 'Sarah Blinchik', grade: "7", category : 1, caption : "", imageURL: "./workTypes/Sarah.jpg", coverImage: "./workTypes/Sarah.jpg"},
  4: { gallery: 0, title: 'Untitled 4', author: 'Sarah Blinchik', grade: "7", category : 1, caption : "", imageURL: "./workTypes/Sarah2.jpg", coverImage: "./workTypes/Sarah2.jpg"},
  5: { gallery: 1, title: 'Crazanity', author: 'Maddie Cooper', grade: "8", category : 2, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Maddie.pdf", coverImage: "./workTypes/Maddie.pdf"},
  6: { gallery: 1, title: 'Thanksgiving', author: 'Ellie Ho', grade: "8", category : 2, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Ellie.pdf", coverImage: "./workTypes/Ellie.pdf"},
  7: { gallery: 1, title: 'Summer Break', author: 'Tamari Philosof', grade: "8", category : 2, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Tamari.pdf", coverImage: "./workTypes/Tamari.pdf"},
  8: { gallery: 1, title: 'A Chill Wind', author: 'Zachary Cheng', grade: "8", category : 2, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Zach.pdf", coverImage: "./workTypes/Zach.pdf"},
  9: { gallery: 1, title: 'The Rink', author: 'Will Weitzenfeld', grade: "8", category : 2, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Will.pdf", coverImage: "./workTypes/Will.pdf"},
  10: { gallery: 1, title: 'White Flag', author: 'Torrance Li', grade: "8", category : 2, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Torrance.pdf", coverImage: "./workTypes/Torrance.pdf"},
  11: { gallery: 1, title: 'London Hell is Breaking Loose', author: 'Rami Daoud', grade: "8", category : 2, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Rami.pdf", coverImage: "./workTypes/Rami.pdf"},
  12: { gallery: 1, title: 'Goooaaalll!', author: 'Quinn McReynolds', grade: "8", category : 2, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Quinn.pdf", coverImage: "./workTypes/Quinn.pdf"},
  13: { gallery: 1, title: 'Ramen 101', author: 'Princeton Lee', grade: "8", category : 2, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Princeton.pdf", coverImage: "./workTypes/Princeton.pdf"},
  14: { gallery: 1, title: 'Happy', author: 'Olivia Sanchez', grade: "8", category : 2, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Olivia.pdf", coverImage: "./workTypes/Olivia.pdf"},
  15: { gallery: 1, title: 'Thanksgiving Break', author: 'Juliet Repstad', grade: "8", category : 2, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Juliet.pdf", coverImage: "./workTypes/Juliet.pdf"},
  16: { gallery: 1, title: 'Free Fallin', author: 'Jonathan Hughes', grade: "8", category : 2, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Jon.pdf", coverImage: "./workTypes/Jon.pdf"},
  17: { gallery: 1, title: 'Meal of the Day', author: 'Jack Kang', grade: "8", category : 2, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Jack.pdf", coverImage: "./workTypes/Jack.pdf"},
  18: { gallery: 1, title: 'Thanksgiving', author: 'Hanna Tang', grade: "8", category : 2, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Hanna.pdf", coverImage: "./workTypes/Hanna.pdf"},
  19: { gallery: 1, title: 'The Market', author: 'Ethan Negroe', grade: "8", category : 2, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Ethan.pdf", coverImage: "./workTypes/Ethan.pdf"},
  20: { gallery: 1, title: 'Thanksgiving', author: 'Erin Sagkan', grade: "8", category : 2, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Erin.pdf", coverImage: "./workTypes/Erin.pdf"},
  21: { gallery: 1, title: 'Thanksgiving Break', author: 'Anson Loo', grade: "8", category : 2, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Anson.pdf", coverImage: "./workTypes/Anson.pdf"},
};

function galleryRefresh() {
  var url = window.location.href;
  var idStart = url.lastIndexOf('?');
  var idLength = url.length - idStart;
  console.log(idStart);

  let id = url.slice((idLength * -1) + 1);
  console.log(id);

  if (Gallery[id].gallery == 0) {
    document.getElementById("gimage").src = Gallery[id].imageURL  + '#toolbar=0';
    document.getElementById("expandimage").src = Gallery[id].imageURL  + '#toolbar=0';
    document.getElementById("textinfodiv").remove()
    document.getElementById("texthr").remove()
  } 
  else if (Gallery[id].gallery == 1) {
    document.getElementById("textDisplay").data = Gallery[id].imageURL + '#view=FitH&toolbar=0';
    document.getElementById("gimagediv").remove()
    document.getElementById("actionbuttongallery").remove()
    document.getElementById("ginfodiv").remove()
  };

  document.getElementById("gtitle").innerHTML = Gallery[id].title;
  document.getElementById("gauthor").innerHTML = Gallery[id].author + ', Grade ' + Gallery[id].grade;
  document.getElementById("gcategory").innerHTML = categories[Gallery[id].category];
  document.getElementById("gcaption").innerHTML = Gallery[id].caption;
}

function setData(type1, grade1, cat1) {
  let categorytext = document.getElementById("allcategories");
  let grtext = document.getElementById("allgrades");

  type = type1;
  if (grade1 != -1 && grade1 != 0) {
    grade = grade1;
    gradetext = ("Grade " + grade1);
  }
  else if (grade1 == 0) {
    grade = grade1;
    gradetext = ("All Grades");
  };

  if (cat1 != -1 && cat1 != 0) {
    cat = cat1;
    cattext = (categories[cat]);
  }
  else if (cat1 == 0) {
    cat = cat1;
    cattext = ("All Categories");
  };

  categorytext.innerHTML = (cattext + '<i class="fa-solid fa-bars" style="margin-left: 0.7rem; margin-right: 0.7rem;"></i>')
  grtext.innerHTML = (gradetext  + '<i class="fa-solid fa-bars" style="margin-left: 0.7rem; margin-right: 0.7rem;"></i>')
  galleryDelete();
}

function galleryDelete() {
  let holder = document.getElementById("galleryHolder");

  document.getElementById("c1").remove();
  var newDiv = document.createElement("div");
  newDiv.className = "gallerycategory";
  newDiv.id = "c1";

  holder.appendChild(newDiv);
  fillArtCategory("c1");
}

function loadPage(id) {
  console.log(type,id);
  window.location.href = ('gallery.html?' + id);
};

function openImage() {
  console.log("Image opened");
};

function fillArtCategory(id) {
  const length = Object.keys(Gallery).length;
  console.log(length);
  let counter = 0;

  for (let i=1; i<length+1; i++) {
    let artGrade = Gallery[i].grade;
    let artCat = Gallery[i].category;
    let artGallery = Gallery[i].gallery;

    if ((grade == 0 || artGrade.indexOf(grade) > -1) && (cat == 0 || artCat == cat) && artGallery == type) {
      counter += 1;
      createItem(id,i);
    }
  };
  
  if (counter == 0) {
    let holder = document.getElementById("galleryHolder");

    console.log("No Art Found");

    var newDiv = document.createElement("div");
    newDiv.style.cssText = ("display: grid;")

    var missingText = document.createElement("p");
    missingText.setAttribute("id","missingtext")
    missingText.innerHTML = "No Art Found!"
    missingText.style.cssText = ("grid-row: 2; grid-column: 1;")

    var clearFilters = document.createElement("button");
    clearFilters.setAttribute("id","clearfilters")
    clearFilters.innerHTML = "Reset Filters";
    missingText.style.cssText = ("grid-row: 1; grid-column: 1;")
    clearFilters.onclick = function() {
      setData(type,0,0);

      clearFilters.remove();
      missingText.remove();
    }

    holder.appendChild(newDiv);
    newDiv.appendChild(missingText);
    newDiv.appendChild(clearFilters);
  };
};

function createItem(id,num) {
  var artwhole = document.createElement("div");
            artwhole.className = 'artwhole';
            artwhole.onclick = function() {
              loadPage(num);
            };

  var Art = document.createElement("img");
  Art.className = "Art"
  Art.src = Gallery[num].coverImage;

  var captionback = document.createElement("div");
  captionback.className = "captionback";

  var title = document.createElement("p");
  title.className = "title";
  title.innerHTML = Gallery[num].title;

  var category1 = document.createElement("p");
  category1.className = "category";
  category1.innerHTML = categories[Gallery[num].category];

  var author = document.createElement("p");
  author.className = "author";
  author.innerHTML = (Gallery[num].author + ", Grade " + Gallery[num].grade);

  
  artwhole.appendChild(Art);
  artwhole.appendChild(captionback);
  captionback.appendChild(title);
  captionback.appendChild(category1);
  captionback.appendChild(author);

  document.getElementById(id).appendChild(artwhole);
};
