if (document.readyState === "complete" || document.readyState === "interactive"){
const body= document.querySelectorAll("body");
const tags= document.querySelectorAll("span.State");
const headerRepoNav= document.querySelectorAll(".repohead.experiment-repo-nav");
const anchor= document.querySelectorAll("a");
const label= document.querySelectorAll(".Label--outline");
const labelCounter= document.querySelectorAll(".reponav-item .Counter");
const counter= document.querySelectorAll(".Counter");
const reponavItemActive= document.querySelectorAll(".reponav-item.selected");
const btn= document.querySelectorAll(".btn");
const socialCount= document.querySelectorAll(".social-count");
const reponavOctiIcon= document.querySelectorAll(".reponav-item .octicon");
const repoHeadOctiIcon= document.querySelectorAll(".repohead h1.private .octicon");
const boxHeader= document.querySelectorAll(".Box-header");
const tblHeaderToggle= document.querySelectorAll(".table-list-header-toggle .btn-link");
const ghHeader= document.querySelector(".gh-header");
const ghHeaderNumber= document.querySelectorAll(".gh-header-number");
const ghHeaderMeta= document.querySelector(".gh-header-meta");
const timelineCommentHeader= document.querySelectorAll(".timeline-comment-header");
const linkGray= document.querySelectorAll(".link-gray");
const branchIconStateClean= document.querySelectorAll(".branch-action-state-clean .branch-action-body");
const header= document.querySelectorAll(".Header");
const overallSummary= document.querySelectorAll(".overall-summary")
const commitTease= document.querySelectorAll(".commit-tease")
const rect= document.querySelectorAll("rect.day")

const me= document.createElement("DIV");
me.appendChild(document.createTextNode("Vindecode"))
document.querySelector("body").appendChild(me)



  rect.forEach(function(item,index){
    var cc = item.getAttribute("data-count")
    item.setAttribute("rx","100")
    item.style.shapeRendering= "geometricprecision";
    if (cc > 0){
    item.style.stroke= "#000"
    item.style.strokeWidth= "1"
    }
    if (cc > 0 && cc <= 5){
      item.setAttribute("fill","#ff9090")
    }
    if (cc > 5 && cc <= 10){
      item.setAttribute("fill", "#ff4e4e")
    }
    if(cc > 10 && cc <= 15){
      item.setAttribute("fill", "#f93535")
    }
    if(cc > 15){
      item.setAttribute("fill", "red")
    }
    if(cc <= 0){
      item.setAttribute("fill", "#000")
      item.style.stroke= "#00f708"
      item.style.strokeWidth= "1"
    }
  })
  commitTease.forEach(function(item,index){
    item.style.background= "#ffada8"
    item.style.border="1px solid red"
  })
  overallSummary.forEach(function(item,index){
    item.style.border= "1px solid red"
    item.style.borderBottom= "none"
  })
// body.style.background= "#101010";
// body.style.color= "#fff";
  repoHeadOctiIcon.forEach(function(item,index){
    item.style.color= "#fff";
  })
// ghHeader.style.background= "#101010";
  ghHeaderNumber.forEach(function(item,index){
    item.style.color= "#3F51B5";
  })
// ghHeaderMeta.style.color= "#fff";
  branchIconStateClean.forEach(function(item,index){
    item.style.borderColor= "red";
  })
  header.forEach(function(item,index){
    item.style.background= "#3a0101";
  })

tags.forEach(function(item,index){
  item.style.color= "#fff";
  item.style.background= "#000";
});
headerRepoNav.forEach(function(item,index){ 
  item.style.color= "#fff";
  item.style.background= "#000";
});
anchor.forEach(function(item,index){
  item.style.color= "red";
});
label.forEach(function(item,index){ 
  item.style.color= "red";
});
labelCounter.forEach(function(item,index){ 
  item.style.color= "#fff";
});
counter.forEach(function(item,index){ 
  item.style.color= "#fff";
  item.style.background= "#3F51B5";
});
reponavItemActive.forEach(function(item,index){
  item.style.background= "#fff";
  item.style.borderTop= "3px solid red";
  item.style.color= "#000";
});
btn.forEach(function(item,index){ 
  item.style.color= "#fff";
  item.style.background= "#3F51B5";
});
socialCount.forEach(function(item,index){ 
  item.style.color= "#fff";
  item.style.background= "red";
});
reponavOctiIcon.forEach(function(item,index){
  item.style.color= "red";
});
boxHeader.forEach(function(item,index){ 
  item.style.background= "#3F51B5";
  item.style.color= "#fff"
});
tblHeaderToggle.forEach(function(item,index){
  item.style.color= "#000";
});
// timelineCommentHeader.forEach(function(item,index){
  // item.style.background= "#3F51B5"
  // item.style.color= "#fff"
// })
linkGray.forEach(function(item,index){
  item.style.color= "#3F51B5!important";
});
}
