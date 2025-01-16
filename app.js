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
    1: { gallery: 0, title: 'Untitled 1', author: 'Myrabelle Kuo', grade: "8", category : 1, caption : "", imageURL: "./workTypes/Myrabel.jpg", coverImage: "./workTypes/Myrabel.jpg"},
    2: { gallery: 0, title: 'Untitled 2', author: 'Myrabelle Kuo', grade: "8", category : 1, caption : "", imageURL: "./workTypes/Myrabel2.jpg", coverImage: "./workTypes/Myrabel2.jpg"},
    3: { gallery: 0, title: 'Untitled 3', author: 'Sarah Blinchik', grade: "7", category : 1, caption : "", imageURL: "./workTypes/Sarah.jpg", coverImage: "./workTypes/Sarah.jpg"},
    4: { gallery: 0, title: 'Untitled 4', author: 'Sarah Blinchik', grade: "7", category : 1, caption : "", imageURL: "./workTypes/Sarah2.jpg", coverImage: "./workTypes/Sarah2.jpg"},
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
