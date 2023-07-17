let info=[];
let btn=document.getElementById("btn");
let searchField=document.getElementById('search-field');
let keyword="";
btn.addEventListener("click",(e)=>{
  e.preventDefault();
const fetchMe=()=>{
  keyword=searchField.value;
  
    fetch(
        `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=${keyword}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "f97c0db904mshd1d8f73149eae17p1cb851jsnafd7d24209cc",
          "X-RapidAPI-Host": 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        info=data.results;
        console.log(info);
        ihtml=""
        for(item in info){
            console.log(info[item]);
            ihtml +=`
            <div class="card" style="width: 18rem;">
            <img src="https://spoonacular.com/recipeImages/${info[item].id}-312x231.jpg"
             class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${info[item].title}</h5>
              <p class="card-text">Ready In Minutes:${info[item].readyInMinutes}<br>
              Serving:${info[item].servings}
              
              </p>
              <a href=${info[item].sourceUrl} class="btn btn-primary">Click Here For More Info</a>
            </div>
          </div>
      
            `
        }
        cardcontainer.innerHTML=ihtml;

      })
      .catch((err) => {
        console.error(err);
      });
    }
    fetchMe();
  })
  