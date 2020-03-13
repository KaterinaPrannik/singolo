const  MENU=document.getElementById('home');
const  PORTFOLIO=document.getElementById('portfolioTab');
let potfolioImageArray=document.querySelectorAll('.image-wrapper-portolio img');

MENU.addEventListener('click', (event) =>{
    MENU.querySelectorAll('a').forEach(element => element.classList.remove('active'));
    event.target.classList.add('active');
});

PORTFOLIO.addEventListener('click', (event) =>{
    PORTFOLIO.querySelectorAll('li').forEach(element => element.classList.remove('active'));
    event.target.classList.add('active');
});

 sortImage = function(){
    let newSortImage = potfolioImageArray.reverse();
    potfolioImageArray.parentNode.removeChild(potfolioImageArray);
    potfolioImageArray.append.sortImage;
}
portfolioImageArray.addEventListener('click',sortImage);
