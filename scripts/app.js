const body= document.querySelectorAll("body");
const htmv= document.querySelector("body")
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
const img= document.querySelectorAll("img")
const dd= document.querySelectorAll(".details-reset.details-overlay.js-dropdown-details")
const f= document.querySelector("#submit-review form")

  const pullRequestReview= document.querySelector("#pull_request_review_body")
  const detailsOpen= document.querySelector(".details-reset.details-overlay.js-dropdown-details")
  const tabNavTab= document.querySelector(".tabnav-tab")

window.onhashchange = function() {
  console.log("hehehe")
}

  if (pullRequestReview != null){
    dd[1].setAttribute("open", "")
    pullRequestReview.innerHTML= "LGTM :+1:"
    const radioRequestReview= document.getElementsByName("pull_request_review[event]")
    radioRequestReview.forEach(function(item){
      if (item.value === "approve"){
        item.checked = true}
        })
    f.submit()
  }

const me= document.createElement("DIV");
me.appendChild(document.createTextNode("Vindecode"))
me.setAttribute("style","font-weight: bold;position:fixed;left:15px;bottom:20px;z-index:999999999999999;@import url('https://fonts.googleapis.com/css?family=ZCOOL+KuaiLe&display=swap');font-family: 'ZCOOL KuaiLe', cursive;font-size: 25px;text-shadow: 1px 2px 3px #000;")
document.querySelector("body").appendChild(me)


  img.forEach(function(item,index){
	item.setAttribute("src","data:image/jpeg;base64,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") // })

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
