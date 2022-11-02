
//sidebar
const openMenu = document.querySelector("#menu-bars")
const hideMenuIcon=document.querySelector("#hide-menu")
const sideMenu= document.querySelector("#nav-menu")

openMenu.addEventListener("click",function(){
    sideMenu.classList.add('active')
})

hideMenuIcon.addEventListener("click", function(){
    sideMenu.classList.remove('active')
})



//data append

let   arr = JSON.parse(localStorage.getItem("Youtube")) || []

const search_result_div = document.getElementById("search-results");
let key="AIzaSyDTj1t-sZJKsq_g3OVEpOi2B8tn4FHxR90";

const searchVideos = async () =>{
    try{
        let inp = document.getElementById("search").value;
 
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${inp}&key=AIzaSyDTj1t-sZJKsq_g3OVEpOi2B8tn4FHxR90&maxResults=15`);

        let data = await res.json();

        let videos= data.items;

        appendVideos(videos)
// console.log("videos:",videos)
// localStorage.setItem("Youtube", JSON.stringify(videos))

        // return videos;
       // console.log("data:",data)  
    }
catch(error){
console.log("error:",error)
}

    }
const appendVideos = (data)=>{
search_result_div.innerHTML=null;

try{

data.forEach(({snippet:{title,thumbnails}, id:{videoId},snippet})=>{

let div = document.createElement('div')

let name= document.createElement('h3')
name.innerText= title;
// name.style.fontSize="10px"


let img1 = document.createElement("img")
img1.src=thumbnails.medium.url;


let iframe= document.createElement('iframe')
iframe.src= `https://www.youtube.com/embed/${videoId}`
iframe.setAttribute("id","iframe")
// // iframe.style.display="none"
// iframe.allow="fullscreen"
// iframe.width="width: 260px";
// iframe.width="height: 160px";



//  img1.addEventListener("click" , function (a){
    //  el.preventDefault();
   
    // alert("Hiii")
 



    // console.log("url:",a)
    // search_result_div.append(iframe)

// window.location.href="videoplay.html"
//  });


// var sea= document.getElementById("search-results")
// console.log("url:",sea)




div.append(img1,title)

search_result_div.append(div)
// console.log("search_result_div:",search_result_div)

div.addEventListener("click", ()=>{
    window.location.href=`https://www.youtube.com/embed/${videoId}`
})





});
}
catch(error){
    console.log("error",error)
}

}

//  const openMenu = document.querySelector("#ytmenu")



// // const openMenu = document.querySelector("#menu-bars")
// const hideMenuIcon=document.querySelector("#hide-menu")
// const sideMenu= document.querySelector("#nav-menu")

// hideMenuIcon.addEventListener("click",function(){
//     sideMenu.classList.add('active')

//     hideMenuIcon.addEventListener("click",function(){
//         var a= document.querySelector("#nav-menu").style.display="none"
//         a.style.transation="800ms"
//          });

// })




async function showVideo(){
    try {

        //AIzaSyAMJKHxFhk-ze5ft06DY1NgvIa-EMIxsrY
        let key="AIzaSyDTj1t-sZJKsq_g3OVEpOi2B8tn4FHxR90";
        let res = await fetch(`https://youtube.googleapis.com/youtube/v2/search?part=snippet&type=video&key=${key}&maxResults=20`)
        let data = await res.json();
        let videos =data.items;
        
        console.log(videos);
        append(videos);

    } catch (error) {
        console.log(error);
    }
}
showVideo();

const append =  (maindata) => {

document.getElementById("search_results").innerHTML=null;

maindata.forEach(({snippet :{title}, id:{videoId}, snippet})=> {

    let div = document.createElement('div');
    div.width="260px";
    let name = document.createElement('p');
    name.innerHTML =title;

    let pic=document.createElement('img');
    pic.src =snippet.thumbnails.medium.url;
    pic.width="260px";
    pic.width="160px";

    let iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.allow="fullscreen"
    iframe.width="260px";
   

    div.append(pic,title);
    document.getElementById("search_results").append(div);

    div.addEventListener("click", ()=>{
        window.location.href=`https://www.youtube.com/embed/${videoId}`
    })

    // [0].id.videoId
    
});
}







