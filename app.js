let type = 0;
let grade = 0;
let cat = 0;

let gradetext = "All Grades";
let cattext = "All Categories";

const categories = {
  1 : "Category 1",
  2 : "Category 2",
  3 : "Category 3",
  4 : "Category 4" 
}

// gallery 0 is for art, gallery 1 is for text

const Gallery = {
    1: { gallery: 0, title: 'wow im a cool title', author: 'Skibidi Toilet', grade: "6", category : 1, caption : "hey this is a demo caption just to see how itd look la tee ta tee ta tis i ajklsdfjlkasdljkfajklsdfjlkasdljkfajklsdfjlkasdljkfajklsdfjlkasdljkfajklsdfjlkasdljkf", imageURL: "./workTypes/images/BingoPFP.jpg", coverImage: "./workTypes/images/BingoPFP.jpg"},
    2: { gallery: 0, title: 'very unique title', author: 'Name One & Name Two', grade: "7 & 8", category : 1, caption : "hey this is a demo caption just to see how itd look", imageURL: "./workTypes/images/dababy.jpg", coverImage: "./workTypes/images/dababy.jpg"},
    3: { gallery: 0, title: 'nice art', author: 'I have an uncessarily long name', grade: "8", category : 2, caption : "hey this is a demo caption just to see how itd look", imageURL: "./workTypes/images/550pixels.jpg", coverImage: "./workTypes/images/fatdog.jpg"},
    4: { gallery: 0, title: 'egwin my beloved', author: 'Daghan', grade: "6", category : 3, caption : "this is my egwin hes very cool and this caption is also very cool. also hes a test for cover images being different", imageURL: "./workTypes/images/RYANGOSLING.jpg", coverImage: "./workTypes/images/squaresquirrel.jpg"},
    5: { gallery: 0, title: 'egwin my beloved', author: 'Daghan', grade: "6", category : 4, caption : "this is my egwin hes very cool and this caption is also very cool. also hes a test for cover images being different", imageURL: "./workTypes/images/hunterwallpaper2.png", coverImage: "./workTypes/images/RYANGOSLING.jpg"},
    6: { gallery: 1, title: 'Example Text 1', author: 'Brennan Wong', grade: "8", caption : "this is a short bit of text made to fill space and see how a text would look in the website.", imageURL: "./workTypes/text/exampletext1.pdf", coverImage: "./workTypes/images/dopecoverimage1.jpg"},
    7: { gallery: 1, title: 'Example Text 2', author: 'Real Person', grade: "6", caption : "this is a short bit of text made to fill space and see how a text would look in the website. but this time i lengthened it for more pages", imageURL: "./workTypes/text/longerexampletext.pdf", coverImage: "./workTypes/images/dopecoverimage2.jpg"},
};

function galleryRefresh() {
  var url = window.location.href;
  var idStart = url.lastIndexOf('?');
  var idLength = url.length - idStart;
  console.log(idStart);

  let id = url.slice((idLength * -1) + 1);
  console.log(id);

  document.getElementById("gimage").src = Gallery[id].imageURL  + '#toolbar=0';
  document.getElementById("gtitle").innerHTML = Gallery[id].title;
  document.getElementById("gauthor").innerHTML = Gallery[id].author + ', Grade ' + Gallery[id].grade;
  document.getElementById("gcategory").innerHTML = categories[Gallery[id].category];
  document.getElementById("gcaption").innerHTML = Gallery[id].caption;
  
  document.getElementById("expandimage").src = Gallery[id].imageURL  + '#toolbar=0';

  if (Gallery[id].gallery == 1) {
    let gimg = document.getElementById("gimage");
    let eimg = document.getElementById("expandimage");

    gimg.style.height = "100%";
    gimg.style.width = "100%";

    eimg.style.height = "100%";
    eimg.style.width = "100%";
  };
}

function setData(type1, grade1, cat1) {
  let filtertext = document.getElementById("filters");

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

  filtertext.innerHTML = (gradetext + ", " + cattext)
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

    var missingText = document.createElement("p");
    missingText.innerHTML = "No Art Found!"

    var clearFilters = document.createElement("button");
    clearFilters.innerHTML = "Reset Filters";
    clearFilters.onclick = function() {
      setData(type,0,0);

      clearFilters.remove();
      missingText.remove();
    }

    holder.appendChild(missingText);
    holder.appendChild(clearFilters);
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
