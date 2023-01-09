var controlSlide=document.querySelector(".testimonyCard__slide");

var testimonyCardList=
{
    //atributes
    cards:document.querySelectorAll(".testimonyCard"),
    index:0,

    //methodes
   nextImage:function(){
        
        if(this.index+1==this.cards.length)
            {
                animate('fadeOut 2s running',this.cards[this.index]);
                this.cards[this.index].classList.toggle("inactive");
                this.index=0;
                animate('fadeOut 2s reverse ,translateX 2s reverse',this.cards[this.index]);
                this.cards[this.index].classList.toggle("inactive");
                return 
            }

            animate('fadeOut 2s running',this.cards[this.index]);
        this.cards[this.index++].classList.toggle("inactive");

        animate('fadeOut 2s reverse ,translateX 2s reverse',this.cards[this.index]);
        this.cards[this.index].classList.toggle("inactive");

    },

    prevImage:function(){
        
        if(this.index==0)
            {                
                animate('fadeOut 2s running',this.cards[this.index]);
                this.cards[this.index].classList.toggle("inactive");

                this.index=this.cards.length-1;
                animate('fadeOut 2s reverse ,translate-X 2s reverse',this.cards[this.index]);
                this.cards[this.index].classList.toggle("inactive");
                return 
            }
            
        animate('fadeOut 2s running',this.cards[this.index]);
        this.cards[this.index--].classList.toggle("inactive");
        animate('fadeOut 2s reverse ,translate-X 2s reverse',this.cards[this.index]);
        this.cards[this.index].classList.toggle("inactive");

    }

}

function animate(stringAnimation,target)
{
    target.style.animation=stringAnimation;
    setTimeout(()=>
    {    target.style.animation='';//to re-fire animation
},2300);

}

controlSlide.addEventListener("click",(e)=>
{
    console.log(e.target);
    if(e.target.className=='testimonyCard__nextButton'||e.target.parentNode.className=='testimonyCard__nextButton')
    testimonyCardList.nextImage();
    else
      if(e.target.className=='testimonyCard__prevButton'||e.target.parentNode.className=='testimonyCard__prevButton')
      testimonyCardList.prevImage();
})