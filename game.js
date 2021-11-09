var app  = new Vue({
    el: "#app",
    data:{
        default : 0,
        loadClass:"board",
        squareClass:"square",
        appClass:"app",
        scoreClass:"scoreboard",
        playerOne:"player",
        playerTwo:"player",
        players:"players",
        nav:"nav",
        name:"name",
        score:"score",
        diceClass:"dice",
        dicealt:"dice Image",
        dice:"https://elements-cover-images-0.imgix.net/4452067a-740e-4bae-b81c-bb9f8e972ac4?auto=compress%2Cformat&fit=max&w=1170&s=5abe8368a3dc7d49e8f244428f113e23",
        dicestyle:{
            width:"100px",
            height:"100px",
            rolled: false ? roll() : flip()
        },
    },
    methods:{
        roll: function(){
            document.getElementById("roll").style.transform="rotateY(180deg)";
            console.log(document.getElementById("roll"));
            this.rolled= true
        },

        flip: function(){
            document.getElementsByClassName("square").style.transform="rotateY(180deg)"
            document.getElementsByClassName("square").innerHTML = Math.floor(Math.random()*10);
            this.rolled=false
        }
    }
})