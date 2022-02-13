
// let countryBtn = $('#countryBtn');

// countryBtn.empty();

// countryBtn.append('<option selected="true" disabled>Choose Country</option>');
// countryBtn.prop('selectedIndex', 0);
// // gets country info and flag images
// $(function (){

//   const $countryName = $('#countryName');
//   $.ajax({
//     type: 'GET',
//     url: 'https://restcountries.com/v3.1/all',
//     success: function(countryF) {
//       console.log(countryF);
//       $.each(countryF, function(i, countryF){
//         $countryName.append('<option>' + countryF.name.common + countryF.flag +'</option>');
//       });
//     }
//   });
// });




// const countryData = 'https://restcountries.com/v3.1'

// $.getJSON(countryData, function(name) {
//   $.each(name, );
// });

// // submit user info
// let userInfo ="";

// // let submitUserInfo = function(){
//   $('#loginBtn').click(function(){
//     let user = $('#userName').val('text');
//     return user;
//   })
//  console.log(userName);
  

var userFormEl = document.querySelector("#user-form");
var countryInputEl = document.querySelector("#country");//country
var NFLinputEl = document.querySelector("nflNews")
var newsFeedEl = document.querySelector("#newsFeed"); //news feed cards container
var newsContainEl = document.querySelector("#newsContainer")//news feed container
let sportsArr=[];
let NflArray = [];
let countryArr=[{name:"america", id:"us"},{name:"argentina", id:"ar"},{name:"australia ", id:"au"},{name:"austria", id:"at"},{name:"belgium", id:"be"},{name:"brazil", id:"br"},{name:"bulgaria", id:"bg"},{name:"canada", id:"ca"},{name:"china", id:"cn"},{name:"columbia", id:"co"},{name:"cuba", id:"cu"},{name:"czech republic", id:"cz"},{name:"egypt", id:"eg"},{name:"france", id:"fr"},{name:"germany", id:"de"},{name:"greece", id:"gr"},{name:"hong kong", id:"hk"},{name:"hungary", id:"hu"},{name:"india", id:"in"},{name:"indonesia", id:"id"},{name:"ireland", id:"ie"},{name:"israel", id:"il"},{name:"italy", id:"it"},{name:"japan", id:"jp"},{name:"latvia", id:"lv"},{name:"lithuania", id:"lt"},{name:"malaysia", id:"my"},{name:"mexico", id:"mx"},{name:"morocco", id:"ma"},{name:"netherlands", id:"nl"},{name:"new zealand", id:"nz"},{name:"nigeria", id:"ng"},{name:"norway", id:"no"},{name:"philippines", id:"ph"},{name:"poland", id:"pl"},{name:"portugal", id:"pt"},{name:"romania", id:"ro"},{name:"russia", id:"ru"},{name:"saudi arabia", id:"sa"},{name:"serbia", id:"rs"},{name:"singapore", id:"sg"},{name:"slovakia", id:"sk"},{name:"slovenia", id:"si"},{name:"south africa", id:"za"},{name:"south korea", id:"kr"},{name:"sweden", id:"se"},{name:"switzerland", id:"ch"},{name:"taiwan", id:"tw"},{name:"thailand", id:"th"},{name:"turkey", id:"tr"},{name:"uae", id:"ae"},{name:"ukraine", id:"ua"},{name:"united kingdom", id:"gb"},{name:"united states", id:"us"},{name:"venezuela", id:"ve"}]



//get form data
var formSubmitHandler = function(event) {
  // prevent page from refreshing
  event.preventDefault();
  // get value from input element
  var country = countryInputEl.value.trim();
  if (country) {
    getSportNews(country);
    // clear old content
    countryInputEl.value = "";
  } else {
    alert("Please enter a country");
  }
};

// https://newsapi.org/v2/everything?q=tesla&from=2022-01-04&sortBy=publishedAt&apiKey=ade84378e67548e5b4ed1e45d4c09606
// https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=ade84378e67548e5b4ed1e45d4c09606

// fetch('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=ade84378e67548e5b4ed1e45d4c09606')

function getNFLnews(){
fetch('https://api.sportsdata.io/v3/nfl/scores/json/News?key=95bd4e03de4e4fe0916f0c77516e239c')
.then(res=> res.json())
.then(data =>{
  console.log(data)
  let article1 = document.querySelector('#NFLNewsList');
  let HTMLcode ="";
  for (let i = 0; i<data.length; i++) {
    HTMLcode += `<li><a href="${data[i].OriginalSourceUrl}" target="_blank">${data[i].Title}</a></li>`
  }
  article1.innerHTML = HTMLcode; 
  
  
});

}

getNFLnews()


// const NflApiUrl = 'https://api.sportsdata.io/v3/nfl/scores/json/News?key=95bd4e03de4e4fe0916f0c77516e239c';
// async function getNflNews() {
//   const response = await fetch(NflApiUrl);
//   const NflData = await response.json();
//   NflArray = NflData;
//   // console.log(NflArray);
// }

// getNflNews();
// let NflPic = document.createElement("img");
// NflPic.src = "./assets/images/NFL.png"
// first blurb
// initial setup to attach the code to the article with id: first
// =====================================================================================================
// let article1 = document.querySelector('#first');
// fetch('https://api.sportsdata.io/v3/nfl/scores/json/News?key=95bd4e03de4e4fe0916f0c77516e239c')
// .then(res => res.json())
// .then(data => {
// article1.innerHTML = '';
// article1.id = 'card-team';
// article1.class = 'card-team';

// let linkTitle = data[0].Title
// let linkURL = data[0].OriginalSourceUrl
// // create dynamic element and assign data from API to it
// let div = document.createElement('li');
// div.id = 'card-content';
// div.classname = 'card-content';
// document.getElementsByTagName('article')[0].appendChild(div);
// div.innerHTML = linkTitle.link(linkURL);
// });

// let article2 = document.querySelector('#second');
// fetch('https://api.sportsdata.io/v3/nfl/scores/json/News?key=95bd4e03de4e4fe0916f0c77516e239c')
// .then(res => res.json())
// .then(data => {
// article2.innerHTML = '';
// article2.id = 'card-team';
// article2.class = 'card-team';

// let linkTitle = data[1].Title
// let linkURL = data[1].OriginalSourceUrl
// // create dynamic element and assign data from API to it
// let div = document.createElement('li');
// div.id = 'card-content';
// div.classname = 'card-content';
// document.getElementsByTagName('article')[1].appendChild(div);
// div.innerHTML = linkTitle.link(linkURL);
// });

// let article3 = document.querySelector('#third');
// fetch('https://api.sportsdata.io/v3/nfl/scores/json/News?key=95bd4e03de4e4fe0916f0c77516e239c')
// .then(res => res.json())
// .then(data => {
// article3.innerHTML = '';
// article3.id = 'card-team';
// article3.class = 'card-team';

// let linkTitle = data[2].Title
// let linkURL = data[2].OriginalSourceUrl
// // create dynamic element and assign data from API to it
// let div = document.createElement('li');
// div.id = 'card-content';
// div.classname = 'card-content';
// document.getElementsByTagName('article')[2].appendChild(div);
// div.innerHTML = linkTitle.link(linkURL);
// });

// let article4 = document.querySelector('#fourth');
// fetch('https://api.sportsdata.io/v3/nfl/scores/json/News?key=95bd4e03de4e4fe0916f0c77516e239c')
// .then(res => res.json())
// .then(data => {
// article4.innerHTML = '';
// article4.id = 'card-team';
// article4.class = 'card-team';

// let linkTitle = data[3].Title
// let linkURL = data[3].OriginalSourceUrl
// // create dynamic element and assign data from API to it
// let div = document.createElement('li');
// div.id = 'card-content';
// div.classname = 'card-content';
// document.getElementsByTagName('article')[3].appendChild(div);
// div.innerHTML = linkTitle.link(linkURL);
// });

// let article5 = document.querySelector('#fifth');
// fetch('https://api.sportsdata.io/v3/nfl/scores/json/News?key=95bd4e03de4e4fe0916f0c77516e239c')
// .then(res => res.json())
// .then(data => {
// article5.innerHTML = '';
// article5.id = 'card-team';
// article5.class = 'card-team';

// let linkTitle = data[4].Title
// let linkURL = data[4].OriginalSourceUrl
// // create dynamic element and assign data from API to it
// let div = document.createElement('li');
// div.id = 'card-content';
// div.classname = 'card-content';
// document.getElementsByTagName('article')[4].appendChild(div);
// div.innerHTML = linkTitle.link(linkURL);
// });

// let article6 = document.querySelector('#sixth');
// fetch('https://api.sportsdata.io/v3/nfl/scores/json/News?key=95bd4e03de4e4fe0916f0c77516e239c')
// .then(res => res.json())
// .then(data => {
// article6.innerHTML = '';
// article6.id = 'card-team';
// article6.class = 'card-team';

// let linkTitle = data[5].Title
// let linkURL = data[5].OriginalSourceUrl
// // create dynamic element and assign data from API to it
// let div = document.createElement('li');
// div.id = 'card-content';
// div.classname = 'card-content';
// document.getElementsByTagName('article')[5].appendChild(div);
// div.innerHTML = linkTitle.link(linkURL);
// });

// let article7 = document.querySelector('#seventh');
// fetch('https://api.sportsdata.io/v3/nfl/scores/json/News?key=95bd4e03de4e4fe0916f0c77516e239c')
// .then(res => res.json())
// .then(data => {
// article7.innerHTML = '';
// article7.id = 'card-team';
// article7.class = 'card-team';

// let linkTitle = data[6].Title
// let linkURL = data[6].OriginalSourceUrl
// // create dynamic element and assign data from API to it
// let div = document.createElement('li');
// div.id = 'card-content';
// div.classname = 'card-content';
// document.getElementsByTagName('article')[6].appendChild(div);
// div.innerHTML = linkTitle.link(linkURL);
// });

// let article8 = document.querySelector('#eighth');
// fetch('https://api.sportsdata.io/v3/nfl/scores/json/News?key=95bd4e03de4e4fe0916f0c77516e239c')
// .then(res => res.json())
// .then(data => {
// article8.innerHTML = '';
// article8.id = 'card-team';
// article8.class = 'card-team';

// let linkTitle = data[7].Title
// let linkURL = data[7].OriginalSourceUrl
// // create dynamic element and assign data from API to it
// let div = document.createElement('li');
// div.id = 'card-content';
// div.classname = 'card-content';
// document.getElementsByTagName('article')[7].appendChild(div);
// div.innerHTML = linkTitle.link(linkURL);
// });

// let article9 = document.querySelector('#ninth');
// fetch('https://api.sportsdata.io/v3/nfl/scores/json/News?key=95bd4e03de4e4fe0916f0c77516e239c')
// .then(res => res.json())
// .then(data => {
// article9.innerHTML = '';
// article9.id = 'card-team';
// article9.class = 'card-team';

// let linkTitle = data[8].Title
// let linkURL = data[8].OriginalSourceUrl
// // create dynamic element and assign data from API to it
// let div = document.createElement('li');
// div.id = 'card-content';
// div.classname = 'card-content';
// document.getElementsByTagName('article')[8].appendChild(div);
// div.innerHTML = linkTitle.link(linkURL);
// });

// let article10 = document.querySelector('#tenth');
// fetch('https://api.sportsdata.io/v3/nfl/scores/json/News?key=95bd4e03de4e4fe0916f0c77516e239c')
// .then(res => res.json())
// .then(data => {
// article10.innerHTML = '';
// article10.id = 'card-team';
// article10.class = 'card-team';

// let linkTitle = data[9].Title
// let linkURL = data[9].OriginalSourceUrl
// // create dynamic element and assign data from API to it
// let div = document.createElement('li');
// div.id = 'card-content';
// div.classname = 'card-content';
// document.getElementsByTagName('article')[9].appendChild(div);
// div.innerHTML = linkTitle.link(linkURL);
// });

// -----------------------------------------------------------------------------------------------------------------------

// let linkTitle = data[0].Title
// let linkURL = data[0].OriginalSourceUrl
// create dynamic element and assign data from API to it
// let innerDiv = document.createElement('li');
// innerDiv.id = 'card-content';
// innerDiv.classname = 'card-content';
// div.appendChild(innerDiv);
// innerDiv.innerHTML = linkTitle.link(linkURL);

// dynamic <br> element added
// let newInnerDiv = document.createElement('p');
// newInnerDiv.id = 'card-source';
// newInnerDiv.classname = 'card-source';
// innerDiv.appendChild(newInnerDiv);
// newInnerDiv.innerHTML = '<br>';

// variables to allow link to be added from API fetch daat


//  dynamic button with link to source page
// ---------------------------------------- would like to add a way to open in a new tab???
// let newerInnerDiv = document.createElement('li');
// newerInnerDiv.id = 'card-content';
// newerInnerDiv.classname = 'card-content';
// newInnerDiv.appendChild(newerInnerDiv);
// newerInnerDiv.innerHTML = linkTitle.link(linkURL);


// // second card
// // initial setup to attach the code to the article with id: second
// let article2 = document.querySelector('#second');
// fetch('https://api.sportsdata.io/v3/nfl/scores/json/News?key=95bd4e03de4e4fe0916f0c77516e239c')
// .then(res => res.json())
// .then(data => {
// article2.innerText = data[1].Team;
// article2.id = 'card-team';
// article2.class = 'card-team';

// // create dynamic element and assign data from API to it
// let div = document.createElement('div');
// div.id = 'card-title';
// div.classname = 'card-title';
// document.getElementsByTagName('article')[1].appendChild(div);
// div.innerText = data[1].Title;

// // create dynamic element and assign data from API to it
// let innerDiv = document.createElement('div');
// innerDiv.id = 'card-content';
// innerDiv.classname = 'card-content';
// div.appendChild(innerDiv);
// innerDiv.innerText = data[1].Content;

// // dynamic <br> element added
// let newInnerDiv = document.createElement('p');
// newInnerDiv.id = 'card-source';
// newInnerDiv.classname = 'card-source';
// innerDiv.appendChild(newInnerDiv);
// newInnerDiv.innerHTML = '<br>';

// // vars to allow dynamic button to link
// let linkText = 'Link to Source';
// let linkURL = data[1].OriginalSourceUrl

// // dynamic button with link created
// let newerInnerDiv = document.createElement('button');
// newerInnerDiv.id = 'card-button';
// newerInnerDiv.classname = 'card-button';
// newInnerDiv.appendChild(newerInnerDiv);
// newerInnerDiv.innerHTML = '' + linkText.link(linkURL);
// });

// // third card
// // initial setup to attach the code to the article with id: third
// let article3 = document.querySelector('#third');
// fetch('https://api.sportsdata.io/v3/nfl/scores/json/News?key=95bd4e03de4e4fe0916f0c77516e239c')
// .then(res => res.json())
// .then(data => {
// article3.innerText = data[2].Team;
// article3.id = 'card-team';
// article3.class = 'card-team';

// // create dynamic element and assign data from API to it
// let div = document.createElement('div');
// div.id = 'card-title';
// div.classname = 'card-title';
// document.getElementsByTagName('article')[2].appendChild(div);
// div.innerText = data[2].Title;

// // create dynamic element and assign data from API to it
// let innerDiv = document.createElement('div');
// innerDiv.id = 'card-content';
// innerDiv.classname = 'card-content';
// div.appendChild(innerDiv);
// innerDiv.innerText = data[2].Content;

// // dynamic <br> element added
// let newInnerDiv = document.createElement('p');
// newInnerDiv.id = 'card-source';
// newInnerDiv.classname = 'card-source';
// innerDiv.appendChild(newInnerDiv);
// newInnerDiv.innerHTML = '<br>';

// // vars to allow link on dynamic button
// let linkText = 'Link to Source';
// let linkURL = data[2].OriginalSourceUrl

// // dymanic button with link to source added
// let newerInnerDiv = document.createElement('button');
// newerInnerDiv.id = 'card-button';
// newerInnerDiv.classname = 'card-button';
// newInnerDiv.appendChild(newerInnerDiv);
// newerInnerDiv.innerHTML = '' + linkText.link(linkURL);
// });


//Sports new API
var getSportNews = function(country) {
    console.log(country)
    var countryId="";
    // for loop populates stories from API
    for(var i=0;i<countryArr.length;i++){
      if(country.toLowerCase()===countryArr[i].name){
        countryId=countryArr[i].id;
        console.log("this is the countryId:"+countryId)
      };
    }
    // error handling if no countryId
    if(!countryId){
      console.log("no country found")
      window.alert("Country is not found")
    }
    // API call 
    else{
      // format the github api url
      var apiUrl = "https://newsapi.org/v2/top-headlines?country="+countryId+"&category=sports&apiKey=ade84378e67548e5b4ed1e45d4c09606";
      // make a get request to url
      fetch(apiUrl)
        .then(function(response) {
          //request was successful
          if(response.ok){
            response.json().then(function(data) {
            sportsArr=data.articles;
            console.log("sports array ", sportsArr)
            userFormEl.classList.add('hide');
            newsContainEl.classList.remove('hide');
            displayNews();

          });
          }else {
            alert("Error: " + response.statusText);
          }
        })
        .catch(function(error) {
          alert("Unable to connect to server");
        });
    }
  };
  
  var displayNews = function() {
    console.log("displayNews function run")
    
    if (sportsArr.length === 0) {
      newsFeedEl.textContent = "no news found";
      return;
    }else{
      console.log("else statement ran")
      for(var i=0; i<sportsArr.length;i++){
        var newsTitle = sportsArr[i].title;
        //news Card creation
        var newsEl = document.createElement("card");
        newsEl.classList = "list-item flex-row justify-space-between align-center news-story";
        //set url
        var newsTitleEl = document.createElement("a");
        newsTitleEl.classList = "title is-5";
        newsTitleEl.setAttribute("href", sportsArr[i].url);
        var newsImg = document.createElement("div")
        newsImg.innerHTML = "<a href='"+sportsArr[i].url+"'><img src='"+sportsArr[i].urlToImage+"' class='countryImg' alt='sports image' /></a>"
        

        
        if(newsTitle){
          newsTitleEl.innerHTML = newsTitle;
        }else {
          statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
        }
        // append container to the dom
        newsEl.appendChild(newsTitleEl)
        newsEl.appendChild(newsImg)
        newsFeedEl.appendChild(newsEl);
      }
    }
  }
  
  //Display news
  var displayRepos = function(repos, searchTerm) {

    // loop over repos
    for (var i = 0; i < repos.length; i++) {
      // format repo name
      var repoName = repos[i].owner.login + "/" + repos[i].name;
  
      // create a link for each repo
      var repoEl = document.createElement("a");
      repoEl.classList = "list-item flex-row justify-space-between align-center";
      //figure this part out
      repoEl.setAttribute("href", "./countrynews.html?repo=" + repoName);
  
      // create a span element to hold repository name
      var titleEl = document.createElement("span");
      titleEl.textContent = repoName;
  
      // append to container
      repoEl.appendChild(titleEl);
  
      // create a status element
      var statusEl = document.createElement("span");
      statusEl.classList = "flex-row align-center";
  
      // check if current repo has issues or not
      if (repos[i].open_issues_count > 0) {
        statusEl.innerHTML =
          "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + " issue(s)";
      } else {
        statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
      }
  
      // append to container
      repoEl.appendChild(statusEl);
  
      // append container to the dom
      repoContainerEl.appendChild(repoEl);
    }


    
  };






// let loginBtn = $('loginBtn');

// $('dropdown-menu').hide();


// // function that allows a user to save their name and country to display on page
// function signIn(){
// // listens for event to toggle modal for page
// $('countries').selectMenu();

// }
// $('loginBtn').click(function(){
//   $('#modal-cta').removeClass('is-active');
// });

// add event listeners to forms
userFormEl.addEventListener("submit", formSubmitHandler);

// userFormEl.addEventListener("submit2",  NFLNews);

