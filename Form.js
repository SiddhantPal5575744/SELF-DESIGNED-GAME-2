class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Begin');
      this.greeting = createElement('h2');
     // this.title = createElement('h1');
      this.request=createElement('h2');
      //this.background=loadImage("Volcano.png");
      this.name=null;
   
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
     // this.title.hide();
      this.request.hide();
   
    }
  
    display(){
        background(volcanoImg);
       
      //  image(this.background,displayWidth/2,displayHeight/2,10,10)
     // this.title.html("Journey to the center of the Earth");
      this.request.html("Please enter your name");

    //  this.title.position(displayWidth/2 -200, 50);
      this.request.position(displayWidth/2 -50, 200);
  
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);
 
  2
      this.button.mousePressed(()=>{
      this.input.hide();
        gamestate="lobby";
        this.button.hide();
      //  this.title.hide();
        this.request.hide();
        this.name = this.input.value();
       
        this.greeting.html("Hello " + this.name+" I am Robotechnosis a robot made by Professor Chemicalo Scienceman. I will be your guide in our Journey To the Centre of the Earth. In our journey there will be times when you have to make choices, but fast. A wrong choice may kill you though you will be revived from checkpoints.Press SPACE to start")
        this.greeting.position(displayWidth/2 - 300, displayHeight/4);

       
       
       // var name=this.name;
      });
      if(gamestate==="character pick"){
        this.greeting.hide();
      }
  
       
  
    }
  }
  