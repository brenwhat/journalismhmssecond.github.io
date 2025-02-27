let type = 0;
let grade = 0;
let cat = 0;

let gradetext = "All Grades";
let cattext = "All Categories";

const categories = {
  1 : "Nonfiction Narrative",
  2 : "Opinion Piece",
  3 : "Miscellaneous",
  4 : "Fiction Narrative" 
}

// gallery 0 is for art, gallery 1 is for text

const Gallery = {
  1: { gallery: 0, title: 'Untitled 1', author: 'Myrabelle Kuo', grade: "8", category : 3, caption : "", imageURL: "./workTypes/Myrabel.jpg", coverImage: "./workTypes/Myrabel.jpg"},
  2: { gallery: 0, title: 'Untitled 2', author: 'Myrabelle Kuo', grade: "8", category : 3, caption : "", imageURL: "./workTypes/Myrabel2.jpg", coverImage: "./workTypes/Myrabel2.jpg"},
  3: { gallery: 0, title: 'Caleb', author: 'Sarah Blinchik', grade: "7", category : 3, caption : "", imageURL: "./workTypes/Sarah.jpg", coverImage: "./workTypes/Sarah.jpg"},
  4: { gallery: 0, title: 'Bamboo Rain Xingqin Genshin Impact', author: 'Sarah Blinchik', grade: "7", category : 3, caption : "", imageURL: "./workTypes/Sarah2.jpg", coverImage: "./workTypes/Sarah2.jpg"},
  5: { gallery: 1, title: 'Crazanity', author: 'Maddie Cooper', grade: "8", category : 1, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Maddie.pdf", coverImage: "./workTypes/writingimage.jpg"},
  6: { gallery: 1, title: 'Thanksgiving', author: 'Ellie Ho', grade: "8", category : 1, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Ellie.pdf", coverImage: "./workTypes/writingimage.jpg"},
  7: { gallery: 1, title: 'Summer Break', author: 'Tamari Philosof', grade: "8", category : 1, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Tamari.pdf", coverImage: "./workTypes/writingimage.jpg"},
  8: { gallery: 1, title: 'A Chill Wind', author: 'Zachary Cheng', grade: "8", category : 1, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Zach.pdf", coverImage: "./workTypes/writingimage.jpg"},
  9: { gallery: 1, title: 'The Rink', author: 'Will Weitzenfeld', grade: "8", category : 1, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Will.pdf", coverImage: "./workTypes/writingimage.jpg"},
  10: { gallery: 1, title: 'White Flag', author: 'Torrance Li', grade: "8", category : 1, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Torrance.pdf", coverImage: "./workTypes/writingimage.jpg"},
  11: { gallery: 1, title: 'London Hell is Breaking Loose', author: 'Rami Daoud', grade: "8", category : 1, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Rami.pdf", coverImage: "./workTypes/writingimage.jpg"},
  12: { gallery: 1, title: 'Goooaaalll!', author: 'Quinn McReynolds', grade: "8", category : 1, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Quinn.pdf", coverImage: "./workTypes/writingimage.jpg"},
  13: { gallery: 1, title: 'Ramen 101', author: 'Princeton Lee', grade: "8", category : 1, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Princeton.pdf", coverImage: "./workTypes/writingimage.jpg"},
  14: { gallery: 1, title: 'Happy', author: 'Olivia Sanchez', grade: "8", category : 1, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Olivia.pdf", coverImage: "./workTypes/writingimage.jpg"},
  15: { gallery: 1, title: 'Thanksgiving Break', author: 'Juliet Repstad', grade: "8", category : 1, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Juliet.pdf", coverImage: "./workTypes/writingimage.jpg"},
  16: { gallery: 1, title: 'Free Fallin`', author: 'Jonathan Hughes', grade: "8", category : 1, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Jon.pdf", coverImage: "./workTypes/writingimage.jpg"},
  17: { gallery: 1, title: 'Meal of the Day', author: 'Jack Kang', grade: "8", category : 1, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Jack.pdf", coverImage: "./workTypes/writingimage.jpg"},
  18: { gallery: 1, title: 'Thanksgiving', author: 'Hanna Tang', grade: "8", category : 1, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Hanna.pdf", coverImage: "./workTypes/writingimage.jpg"},
  19: { gallery: 1, title: 'The Market', author: 'Ethan Negroe', grade: "8", category : 1, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Ethan.pdf", coverImage: "./workTypes/writingimage.jpg"},
  20: { gallery: 1, title: 'Thanksgiving', author: 'Erin Sagkan', grade: "8", category : 1, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Erin.pdf", coverImage: "./workTypes/writingimage.jpg"},
  21: { gallery: 1, title: 'Thanksgiving Break', author: 'Anson Loo', grade: "8", category : 1, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Anson.pdf", coverImage: "./workTypes/writingimage.jpg"},
  22: { gallery: 0, title: 'Siuha`s Requiem', author: 'Sarah Blinchik', grade: "7", category : 3, caption : "", imageURL: "./workTypes/Sarah3.jpg", coverImage: "./workTypes/Sarah3.jpg"},
  23: { gallery: 0, title: 'Mimukawa Nice Try Miku', author: 'Sarah Blinchik', grade: "7", category : 3, caption : "", imageURL: "./workTypes/Sarah4.jpg", coverImage: "./workTypes/Sarah4.jpg"},
  24: { gallery: 0, title: 'Scaramouche Genshin Impact', author: 'Sarah Blinchik', grade: "7", category : 3, caption : "", imageURL: "./workTypes/Sarah5.jpg", coverImage: "./workTypes/Sarah5.jpg"},
  25: { gallery: 0, title: 'Vivid Bad Squad, Len and Rin Kagamire', author: 'Sarah Blinchik', grade: "7", category : 3, caption : "", imageURL: "./workTypes/Sarah6.jpg", coverImage: "./workTypes/Sarah6.jpg"},
  26: { gallery: 1, title: 'Its the Journey, Not the Destination', author: 'Alice Ding', grade: "8", category : 1, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Alice.pdf", coverImage: "./workTypes/writingimage.jpg"},
  27: { gallery: 1, title: 'Frosty', author: 'Aria Wang', grade: "8", category : 1, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Aria.pdf", coverImage: "./workTypes/writingimage.jpg"},
  28: { gallery: 1, title: 'The War Inside', author: 'Ashley Bishop', grade: "8", category : 1, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Ashley.pdf", coverImage: "./workTypes/writingimage.jpg"},
  29: { gallery: 1, title: 'Three, Two, One', author: 'Aubrey Xu', grade: "8", category : 1, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Aubrey.pdf", coverImage: "./workTypes/writingimage.jpg"},
  30: { gallery: 1, title: 'The Match', author: 'Aviva Simon', grade: "8", category : 1, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Aviva.pdf", coverImage: "./workTypes/writingimage.jpg"},
  31: { gallery: 1, title: 'Glamping at Pali', author: 'Ayden Khaw', grade: "8", category : 1, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Ayden.pdf", coverImage: "./workTypes/writingimage.jpg"},
  32: { gallery: 1, title: 'Bon Appetit', author: 'Beau Sanchez', grade: "8", category : 1, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Beau.pdf", coverImage: "./workTypes/writingimage.jpg"},
  33: { gallery: 1, title: 'On the Links', author: 'Chasen Chwang', grade: "8", category : 1, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Chasen.pdf", coverImage: "./workTypes/writingimage.jpg"},
  34: { gallery: 1, title: 'Trip to the Mall', author: 'Emily Chang', grade: "8", category : 1, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Emily.pdf", coverImage: "./workTypes/writingimage.jpg"},
  35: { gallery: 1, title: 'Home Alone', author: 'Emmett Darling', grade: "8", category : 1, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Emmett.pdf", coverImage: "./workTypes/writingimage.jpg"},
  36: { gallery: 1, title: 'Tropical Alcatraz', author: 'Ethan Lew', grade: "8", category : 1, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Ethan.pdf", coverImage: "./workTypes/writingimage.jpg"},
  37: { gallery: 1, title: 'The Practice', author: 'Haley Leung', grade: "8", category : 1, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Haley.pdf", coverImage: "./workTypes/writingimage.jpg"},
  38: { gallery: 1, title: 'HK Arrival', author: 'Hunter Yeung', grade: "8", category : 1, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Hunter.pdf", coverImage: "./workTypes/writingimage.jpg"},
  39: { gallery: 1, title: 'Left, Right, Left', author: 'Izzie Freiburg', grade: "8", category : 1, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Izzie.pdf", coverImage: "./workTypes/writingimage.jpg"},
  40: { gallery: 1, title: 'Paint in the Water', author: 'Justin Tang', grade: "8", category : 1, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Justin.pdf", coverImage: "./workTypes/writingimage.jpg"},
  41: { gallery: 1, title: 'Strike?', author: 'Kaan Yuksel', grade: "8", category : 1, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Kaan.pdf", coverImage: "./workTypes/writingimage.jpg"},
  42: { gallery: 1, title: 'Nah', author: 'Leah Ho', grade: "8", category : 1, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Leah.pdf", coverImage: "./workTypes/writingimage.jpg"},
  43: { gallery: 1, title: 'You Should Always Practice Your Scales', author: 'Mason Szeto', grade: "8", category : 1, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Mason.pdf", coverImage: "./workTypes/writingimage.jpg"},
  44: { gallery: 1, title: 'New School', author: 'Mia Donovan', grade: "8", category : 1, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Mia.pdf", coverImage: "./workTypes/writingimage.jpg"},
  45: { gallery: 1, title: 'Putting the Labor in Labor Day', author: 'Myrabelle Kuo', grade: "8", category : 1, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Myrabelle.pdf", coverImage: "./workTypes/writingimage.jpg"},
  46: { gallery: 1, title: 'A Chilling Experience', author: 'Riley Chou', grade: "8", category : 1, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Riley.pdf", coverImage: "./workTypes/writingimage.jpg"},
  47: { gallery: 1, title: 'Oversleeping', author: 'Riyan Vishwanath', grade: "8", category : 1, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Riyan.pdf", coverImage: "./workTypes/writingimage.jpg"},
  48: { gallery: 1, title: 'Neigh', author: 'Rosie Chen', grade: "8", category : 1, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Rosie.pdf", coverImage: "./workTypes/writingimage.jpg"},
  49: { gallery: 1, title: 'Cheers', author: 'Samantha Rodriguez', grade: "8", category : 1, caption : "The idea that “the unexamined life is not worth living” is attributed to Socrates and embraced in a “high or low” essay, wherein students create a personal, non-fiction narrative that describes a recent event.", imageURL: "./workTypes/Samantha.pdf", coverImage: "./workTypes/writingimage.jpg"},
  50: { gallery: 1, title: 'Saturn 5 Rocket', author: 'Augustine Wasef', grade: "7", category : 2, caption : "", imageURL: "./workTypes/AugustineOped.pdf", coverImage: "./workTypes/writingimage.jpg"},
  51: { gallery: 1, title: 'The Eternal Purgatory of Charles Darwin Freehill', author: 'Arjun Kesavalu', grade: "8", category : 4, caption : "", imageURL: "./workTypes/ArjunFiction.pdf", coverImage: "./workTypes/writingimage.jpg"},
  52: { gallery: 1, title: 'The Terracotta Show', author: 'Arjun Kesavalu', grade: "8", category : 4, caption : "", imageURL: "./workTypes/ArjunFiction2.pdf", coverImage: "./workTypes/writingimage.jpg"},
  53: { gallery: 0, title: 'Untitled', author: 'Ally Peak', grade: "8", category : 3, caption : "", imageURL: "./workTypes/AllyArt.png", coverImage: "./workTypes/AllyArt.png"},
  
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
