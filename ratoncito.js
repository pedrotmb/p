class Ratoncito {
  constructor() {
    this.x= width/2;
    this.y= height/2;
    this.ancho=75;
     this.alto=92;
    this.velocidad = 8;
    this.limiteY=20;

    
    this.imagenRaton=[2];
  }
  flechas(teclas) {
    if (keyCode === UP_ARROW && this.y > this.limiteY) {
      this.y -=  this.velocidad;
      this.imagenRaton= [2];
    } else if (keyCode === DOWN_ARROW) {
       this.y  +=  this.velocidad;
      this.imagenRaton= [8];
    } else if (keyCode === LEFT_ARROW ) {
      this.x -=  this.velocidad;
       this.imagenRaton= [1];
    } else if (keyCode === RIGHT_ARROW) {
      this.x += this.velocidad;
      this.imagenRaton= [3];
    }
  
 this.x = constrain(this.x,0, width - this.ancho);
  this.y = constrain( this.y,this.limiteY, height -  this.alto); 
  } 
  
  dibujar (imgArray) {
    image(imgArray[this.imagenRaton], this.x, this.y,this.ancho,this.alto);
    fill(255);
    text("Puntos: ", 400,50);
  }
  colisionConTaco(enemigos) {
    let distanciaColision = 30 ;
    for ( let i = 0; i < enemigos.length; i++ ) {  //recorro cada posicion de la lista
      let distanciaTacoRaton = dist( this.x, this.y, enemigos[i].x, enemigos[i].y, enemigos[i].size );
      //
      if ( distanciaTacoRaton < distanciaColision ) {
        this.estado = "ganaste"
         //this.puntos++;
    
      }
    }
  }
    
 //getpuntos(){
 //  return this.puntos;
 //}
  

  
}
