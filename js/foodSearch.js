
  const api_url = "https://api.spoonacular.com/recipes/complexSearch?apiKey=a241af333bb742a69b3f484cc1941f4b&"

  async function link(keyword){
    var srcurl=new Array();
    var imagerec=new Array();
    var rectitle=new Array();
    const url=api_url+"query="+keyword;
      const response=await fetch(url);
      var data=await response.json();

      data.results.forEach(async (item)=>{
        let id=item.id;
        let rurl="https://api.spoonacular.com/recipes/informationBulk?apiKey=a241af333bb742a69b3f484cc1941f4b&ids="+id;
        let res=await fetch(rurl);
        let inst=await res.json();
        var imageUrl =inst[0].image ; 
        var title = inst[0].title;
        var imageTag =  "<img src='" + imageUrl +"'>";
        var recipeThumbnail = "<a href='"+ inst[0].sourceUrl+"' target='blank'><div class='col-sm-6 col-md-4'><div class='thumbnail'>" + imageTag + "<div class='caption'><a href='" + inst[0].sourceUrl +  "' target='blank'><h4>" + title + "</h4></a></div></div></div></a>"
        document.getElementById("feed").innerHTML +=recipeThumbnail;
      })
    };
 function gt(keyword){
   link(keyword);
   
 }

 $(document).ready(function(){
  $("#search").click(function(){
  $("div").remove(".thumbnail");
  });
});
