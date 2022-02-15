

    


/*La définition de canvas*/
/*------------------------------------------------------------*/
/*------------------------------------------------------------*/
  
    var c = document.getElementById("myCanvas");
    var ctx= c.getContext("2d");

/*------------------------------------------------------------*/
/*------------------------------------------------------------*/

/* La définition des images*/

/*------------------------------------------------------------*/
/*------------------------------------------------------------*/

var select=document.getElementById("select")


const whiterook=document.getElementById("whiterook")
const whitepawn=document.getElementById("whitepawn")
const whitehorse=document.getElementById("whitehorse")
const whiteking=document.getElementById("whiteking")
const whitequeen=document.getElementById("whitequeen")
const whitebishop=document.getElementById("whitebishop")

const blackrook=document.getElementById("blackrook")
const blackhorse=document.getElementById("blackhorse")
const blackking=document.getElementById("blackking")
const blackqueen=document.getElementById("blackqueen")
const blackbishop=document.getElementById("blackbishop")

/*------------------------------------------------------------*/
/*------------------------------------------------------------*/



 
/*Definition des pieces blanches*/



/*------------------------------------------------------------*/
/*------------------------------------------------------------*/


class Piece{
    image=new Image();
    x=null;
    
constructor(nom,image,couleur,x,y){
    this.nom=nom;
    this.image=image

    this.couleur=couleur;
    this.x=x;
    this.y=y;
    
}
draw(){
    ctx.drawImage(this.image,this.x,this.y);
}

move(indexX ,indexY){
    
        throw new Error("Abstract Method has no implementation");

        }    

 getBoardPosition() {
            let posx = (this.x - (this.x % 80)) / 80;
            let posy = (this.y - (this.y % 80)) / 80;
            return [posx, posy];
          }
}


class Rook extends Piece{
 constructor(nom,image,couleur,x,y){
    super(nom,image,couleur,x,y);
}

detectmoves(board){

    let availableplaces=[null]
    let piecestoeat=[]
    let i=Math.floor(this.x/80);
    let j=Math.floor(this.y/80);
    let k=j;
    let f=i;
    let c=i;
    let done1=false;
    let done2=false;
    let done3=false;
    let done4=false;
while(!done1 || !done2 || !done3 || !done4){
    j=j+1;
    k=k-1;
    f=f+1;
    c=c-1;
    if(j>=8){
        done1=true;
    }
    if(k<=-1){
        done2=true;
    }
    if(f>=8){
        done3=true;
    }
    if(c<=-1){
        done4=true;
    }
    if(!done1){
    if(board.board[i][j].piece==null ){
        availableplaces.push({i:i,j:j});
        ctx.fillStyle="#3CAEA3"
        ctx.fillRect(i*80,j*80,80,80);


    }
    else
    if(board.board[i][j].piece.couleur!=this.couleur){
            ctx.fillStyle="#cc1100"
            piecestoeat.push({i:i, j:j});
            ctx.fillRect(i*80,j*80,80,80);
            board.board[i][j].piece.draw;
            done1=true;
            console.log(board.board[i][j].piece.couleur)
        }
            
        else{
          done1=true;
        }
    }
        if(!done2){
        if(board.board[i][k].piece==null && !done2){
            availableplaces.push({i:i,j:k});
            ctx.fillStyle="#3CAEA3"
            ctx.fillRect(i*80,k*80,80,80);
        }
        else
        if(board.board[i][k].piece.couleur!=this.couleur && !done2){
            ctx.fillStyle="#cc1100"
            piecestoeat.push({i:i, j:j});

            ctx.fillRect(i*80,k*80,80,80);
            board.board[i][k].piece.draw;
            done2=true;
        }
 
       
        else{
          done2=true;
        }
    }
    if(!done3){
            if(board.board[f][Math.floor(this.y/80)].piece==null ){
                availableplaces.push({i:f,j:Math.floor(this.y/80)});
                ctx.fillStyle="#3CAEA3"
                ctx.fillRect(f*80,Math.floor(this.y/80)*80,80,80);
        
        
            }
            else
            if(board.board[f][Math.floor(this.y/80)].piece.couleur!=this.couleur){
                    ctx.fillStyle="#cc1100"
                    piecestoeat.push({i:i, j:j});

                    ctx.fillRect(f*80,Math.floor(this.y/80)*80,80,80);
                    board.board[f][Math.floor(this.y/80)].piece.draw;
                    done3=true;
                }
                    
                else{
                  done3=true;
                }
            
    }
    if(!done4){
        if(board.board[c][Math.floor(this.y/80)].piece==null ){
            availableplaces.push({i:c,j:Math.floor(this.y/80)});
            ctx.fillStyle="#3CAEA3"
            ctx.fillRect(c*80,Math.floor(this.y/80)*80,80,80);
    
    
        }
        else
        if(board.board[c][Math.floor(this.y/80)].piece.couleur!=this.couleur){
                ctx.fillStyle="#cc1100"
                piecestoeat.push({i:i, j:j});

                ctx.fillRect(c*80,Math.floor(this.y/80)*80,80,80);
                board.board[c][Math.floor(this.y/80)].piece.draw;
                done4=true;
            }
                
            else{
              done4=true;
            }
        
    }
    


    }
    


 }

}


class Pawn extends Piece{
    moved=false;
    constructor(nom,image,couleur,x,y){

      super(nom,image,couleur,x,y);

    }





    detectmoves(board){
        let availableplaces=[null]
        let piecestoeat=[]
        let i=Math.floor(this.x/80);
        let j=Math.floor(this.y/80);
        let k;
        if(this.couleur=="white"){
            k=1;
        }
        else
        {
        k=-1;
        }
        if(board.board[i][j+k].piece==null){
            availableplaces.push((i,j+k))
            ctx.fillStyle="#3CAEA3"
            ctx.fillRect(i*80,(j+k)*80,80,80)
            if(!this.moved && board.board[i][j+(2*k)].piece==null){
                availableplaces.push((i,j+(2*k)))
                ctx.fillStyle="#3CAEA3"
                ctx.fillRect(i*80,(j+(2*k))*80,80,80)
            }
        }
    

    }
}  
class Horse extends Piece{
    constructor(nom,image,couleur,x,y){
      super(nom,image,couleur,x,y);
    }
}  
class King extends Piece{
    constructor(nom,image,couleur,x,y){
      super(nom,image,couleur,x,y);
    }
    detectmoves(board){
        let availableplaces=[null]
        let piecestoeat=[]
        let i=Math.floor(this.x/80);
        let j=Math.floor(this.y/80);
        if(!i>=8 && !j>=8){
        if(board.board[i+1][j+1].piece==null ){
            availableplaces.push({i:i+1,j:j+1});
            ctx.fillStyle="#3CAEA3"
            ctx.fillRect((i+1)*80,(j+1)*80,80,80);
    
    
        } else
        if(board.board[i+1][j+1].piece.couleur!=this.couleur){
                ctx.fillStyle="#cc1100"
                piecestoeat.push({i:i+1, j:j+1});
                ctx.fillRect((i+1)*80,(j+1)*80,80,80);
                board.board[i+1][j+1].piece.draw;
            }
    }
    if(!i<0 && !j<0){
        if(board.board[i-1][j-1].piece==null ){
            availableplaces.push({i:i-1,j:j-1});
            ctx.fillStyle="#3CAEA3"
            ctx.fillRect((i-1)*80,(j-1)*80,80,80);
    
    
        } else
        if(board.board[i-1][j-1].piece.couleur!=this.couleur){
                ctx.fillStyle="#cc1100"
                piecestoeat.push({i:i-1, j:j-1});
                ctx.fillRect((i-1)*80,(j-1)*80,80,80);
                board.board[i-1][j-1].piece.draw;
            }
    }
    if(!i<=8 && !j<=8){
        if(board.board[i+1][j+1].piece==null ){
            availableplaces.push({i:i,j:j});
            ctx.fillStyle="#3CAEA3"
            ctx.fillRect(i*80,j*80,80,80);
    
    
        } else
        if(board.board[i++][j++].piece.couleur!=this.couleur){
                ctx.fillStyle="#cc1100"
                piecestoeat.push({i:i++, j:j++});
                ctx.fillRect(i++*80,j++*80,80,80);
                board.board[i++][j++].piece.draw;
            }
    }
    if(!i<=8 && !j<=8){
        if(board.board[i+1][j+1].piece==null ){
            availableplaces.push({i:i,j:j});
            ctx.fillStyle="#3CAEA3"
            ctx.fillRect(i*80,j*80,80,80);
    
    
        } else
        if(board.board[i++][j++].piece.couleur!=this.couleur){
                ctx.fillStyle="#cc1100"
                piecestoeat.push({i:i++, j:j++});
                ctx.fillRect(i++*80,j++*80,80,80);
                board.board[i++][j++].piece.draw;
            }
    }
    

}  
}
class Queen extends Piece{
    constructor(nom,image,couleur,x,y){
      super(nom,image,couleur,x,y);
    }
    detectmoves(board){

        let availableplaces=[null]
        let piecestoeat=[]
        let i=Math.floor(this.x/80);
        let j=Math.floor(this.y/80);
        let k=j;
        let f=i;
        let c=i;
        let done1=false;
        let done2=false;
        let done3=false;
        let done4=false;
        let done5=false;
        let done6=false;
        let done7=false;
        let done8=false;
    while(!done1 || !done2 || !done3 || !done4){
        j=j+1;
        k=k-1;
        f=f+1;
        c=c-1;
        if(j>=8){
            done1=true;
            done5=true;
            done8=true;

        }
        if(k<=-1){
            done2=true;
            done6=true;
            done7=true;

        }
        if(f>=8){
            done3=true;
            done5=true;
            done8=true;

        }
        if(c<=-1){
            done4=true;
            done6=true;
            done7=true;
            
        }
        if(!done1){
        if(board.board[i][j].piece==null ){
            availableplaces.push({i:i,j:j});
            ctx.fillStyle="#3CAEA3"
            ctx.fillRect(i*80,j*80,80,80);
    
    
        }
        else
        if(board.board[i][j].piece.couleur!=this.couleur){
                ctx.fillStyle="#cc1100"
                piecestoeat.push({i:i, j:j});
                ctx.fillRect(i*80,j*80,80,80);
                board.board[i][j].piece.draw;
                done1=true;
                console.log(board.board[i][j].piece.couleur)
            }
                
            else{
              done1=true;
            }
        }
            if(!done2){
            if(board.board[i][k].piece==null && !done2){
                availableplaces.push({i:i,j:k});
                ctx.fillStyle="#3CAEA3"
                ctx.fillRect(i*80,k*80,80,80);
            }
            else
            if(board.board[i][k].piece.couleur!=this.couleur && !done2){
                ctx.fillStyle="#cc1100"
                piecestoeat.push({i:i, j:j});
    
                ctx.fillRect(i*80,k*80,80,80);
                board.board[i][k].piece.draw;
                done2=true;
            }
     
           
            else{
              done2=true;
            }
        }
        if(!done3){
                if(board.board[f][Math.floor(this.y/80)].piece==null ){
                    availableplaces.push({i:f,j:Math.floor(this.y/80)});
                    ctx.fillStyle="#3CAEA3"
                    ctx.fillRect(f*80,Math.floor(this.y/80)*80,80,80);
            
            
                }
                else
                if(board.board[f][Math.floor(this.y/80)].piece.couleur!=this.couleur){
                        ctx.fillStyle="#cc1100"
                        piecestoeat.push({i:i, j:j});
    
                        ctx.fillRect(f*80,Math.floor(this.y/80)*80,80,80);
                        board.board[f][Math.floor(this.y/80)].piece.draw;
                        done3=true;
                    }
                        
                    else{
                      done3=true;
                    }
                
        }
        if(!done4){
            if(board.board[c][Math.floor(this.y/80)].piece==null ){
                availableplaces.push({i:c,j:Math.floor(this.y/80)});
                ctx.fillStyle="#3CAEA3"
                ctx.fillRect(c*80,Math.floor(this.y/80)*80,80,80);
        
        
            }
            else
            if(board.board[c][Math.floor(this.y/80)].piece.couleur!=this.couleur){
                    ctx.fillStyle="#cc1100"
                    piecestoeat.push({i:i, j:j});
    
                    ctx.fillRect(c*80,Math.floor(this.y/80)*80,80,80);
                    board.board[c][Math.floor(this.y/80)].piece.draw;
                    done4=true;
                }
                    
                else{
                  done4=true;
                }
            
        }
        if(!done5){
            if(board.board[f][j].piece==null ){
                availableplaces.push({i:f, j:j});
                ctx.fillStyle="#3CAEA3"
                ctx.fillRect(f*80,j*80,80,80);
        
        
            }
            else
            if(board.board[f][j].piece.couleur!=this.couleur){
                    ctx.fillStyle="#cc1100"
                    piecestoeat.push({i:f, j:j});
    
                    ctx.fillRect(f*80,j*80,80,80);
                    board.board[f][j].piece.draw;
                    done5=true;
                }
                    
                else{
                  done5=true;
                }
            
        }
        if(!done6){
            if(board.board[c][k].piece==null ){
                availableplaces.push({i:c,j:k});
                ctx.fillStyle="#3CAEA3"
                ctx.fillRect(c*80,k*80,80,80);
        
        
            }
            else
            if(board.board[c][k].piece.couleur!=this.couleur){
                    ctx.fillStyle="#cc1100"
                    piecestoeat.push({i:c,j:k});
                    ctx.fillRect(c*80,k*80,80,80);
                    board.board[c][k].piece.draw;
                    done6=true;
                }
                    
                else{
                  done6=true;
                }
            
        }
        if(!done7){
            if(board.board[c][j].piece==null ){
                availableplaces.push({i:c,j:j});
                ctx.fillStyle="#3CAEA3"
                ctx.fillRect(c*80,j*80,80,80);
        
        
            }
            else
            if(board.board[c][j].piece.couleur!=this.couleur){
                    ctx.fillStyle="#cc1100"
                    piecestoeat.push({i:c, j:j});
    
                    ctx.fillRect(c*80,j*80,80,80);
                    board.board[c][j].piece.draw;
                    done7=true;
                }
                    
                else{
                  done7=true;
                }
            
        }
        if(!done8){
            if(board.board[f][k].piece==null ){
                availableplaces.push({i:f,j:k});
                ctx.fillStyle="#3CAEA3"
                ctx.fillRect(f*80,k*80,80,80);
        
        
            }
            else
            if(board.board[f][k].piece.couleur!=this.couleur){
                    ctx.fillStyle="#cc1100"
                    piecestoeat.push({i:f, j:k});
    
                    ctx.fillRect(f*80,k*80,80,80);
                    board.board[f][k].piece.draw;
                    done8=true;
                }
                    
                else{
                  done8=true;
                }
            
        }
        
    
    }
} 
        
    
} 
class Bishop extends Piece{
    constructor(nom,image,couleur,x,y){
      super(nom,image,couleur,x,y);
    }
detectmoves(board){
    
    let availableplaces=[null]
    let piecestoeat=[]
    let i=Math.floor(this.x/80);
    let j=Math.floor(this.y/80);
    let k=j;
    let f=i;
    let c=i;

    let done5=false;
    let done6=false;
    let done7=false;
    let done8=false;
while(!done5 || !done6 || !done7 || !done8){
    j=j+1;
    k=k-1;
    f=f+1;
    c=c-1;
    if(j>=8){
        done5=true;
    }
    if(k<=-1){
        done6=true;
    }
    if(f>=8){
        done7=true;
    }
    if(c<=-1){
        done8=true;
    }
    if(!done5){
        if(board.board[f][j].piece==null ){
            availableplaces.push({i:f, j:j});
            ctx.fillStyle="#3CAEA3"
            ctx.fillRect(f*80,j*80,80,80);
    
    
        }
        else
        if(board.board[f][j].piece.couleur!=this.couleur){
                ctx.fillStyle="#cc1100"
                piecestoeat.push({i:f, j:j});

                ctx.fillRect(f*80,j*80,80,80);
                board.board[f][j].piece.draw;
                done5=true;
            }
                
            else{
              done5=true;
            }
        
    }
    if(!done6){
        if(board.board[c][k].piece==null ){
            availableplaces.push({i:c,j:k});
            ctx.fillStyle="#3CAEA3"
            ctx.fillRect(c*80,k*80,80,80);
    
    
        }
        else
        if(board.board[c][k].piece.couleur!=this.couleur){
                ctx.fillStyle="#cc1100"
                piecestoeat.push({i:c,j:k});
                ctx.fillRect(c*80,k*80,80,80);
                board.board[c][k].piece.draw;
                done6=true;
            }
                
            else{
              done6=true;
            }
        
    }
    if(!done7){
        if(board.board[c][j].piece==null ){
            availableplaces.push({i:c,j:j});
            ctx.fillStyle="#3CAEA3"
            ctx.fillRect(c*80,j*80,80,80);
    
    
        }
        else
        if(board.board[c][j].piece.couleur!=this.couleur){
                ctx.fillStyle="#cc1100"
                piecestoeat.push({i:c, j:j});

                ctx.fillRect(c*80,j*80,80,80);
                board.board[c][j].piece.draw;
                done7=true;
            }
                
            else{
              done7=true;
            }
        
    }
    if(!done8){
        if(board.board[f][k].piece==null ){
            availableplaces.push({i:f,j:k});
            ctx.fillStyle="#3CAEA3"
            ctx.fillRect(f*80,k*80,80,80);
    
    
        }
        else
        if(board.board[f][k].piece.couleur!=this.couleur){
                ctx.fillStyle="#cc1100"
                piecestoeat.push({i:f, j:k});

                ctx.fillRect(f*80,k*80,80,80);
                board.board[f][k].piece.draw;
                done8=true;
            }
                
            else{
              done8=true;
            }
    
}    
}
}
} 
/*------------------------------------------------------------*/
/*------------------------------------------------------------*/


/* Board initialisation */


/*------------------------------------------------------------*/
/*------------------------------------------------------------*/


class Case{            
  
   piece=new Piece()
    constructor(posi,posj,color,x,y,piece) {
        this.posi=posi
        this.posj=posj
        this.color=color
        this.x=x
        this.y=y    
        this.piece=piece;
    }
   
   
    draw(){
        if (this.color=="White")
            ctx.fillStyle = '#FFFFFF '
        
        else
            ctx.fillStyle = '#000000'
        
        ctx.fillRect(this.x,this.y,80,80);
    
    }

}

function initialise(){
    var whiterook1=new Rook("whiterook1",whiterook,"white",0,0)
    var whiterook2=new Rook("whiterook2",whiterook,"white",560,0)
    var whitehorse1=new Horse("whitehorse1",whitehorse,"white",80,0);
    var whitehorse2=new Horse("whitehorse2",whitehorse,"white",480,0);
    var whiteking1=new King("whiteking",whiteking,"white",240,0);
    var whitequeen1=new Queen("whitequeen",whitequeen,"white",320,0)
    var whitebishop1=new Bishop("whitebishop1",whitebishop,"white",160,0)
    var whitebishop2=new Bishop("whitebishop2",whitebishop,"white",400,0)
    var whitepawn1=new Pawn("whitepawn1",whitepawn,"white",0,80)
    var whitepawn2=new Pawn("whitepawn2",whitepawn,"white",80,80)
    var whitepawn3=new Pawn("whitepawn3",whitepawn,"white",160,80)
    var whitepawn4=new Pawn("whitepawn4",whitepawn,"white",240,80)
    var whitepawn5=new Pawn("whitepawn5",whitepawn,"white",320,80)
    var whitepawn6=new Pawn("whitepawn6",whitepawn,"white",400,80)
    var whitepawn7=new Pawn("whitepawn7",whitepawn,"white",480,80)
    var whitepawn8=new Pawn("whitepawn8",whitepawn,"white",560,80)
    
    //Definition des pieces Noires
    
    
    var blackrook1=new Rook("blackrook",blackrook,"black",0,560)
    var blackrook2=new Rook("blackrook1",blackrook,"black",560,560)
    var blackhorse1=new Horse("blackhorse",blackhorse,"black",80,560);
    var blackhorse2=new Horse("blackhorse1",blackhorse,"black",480,560);
    var blackking1=new King("blackking",blackking,"black",240,560);
    var blackqueen1=new Queen("blackqueen",blackqueen,"black",320,560)
    var blackbishop1=new Bishop("blackbishop1",blackbishop,"black",160,560)
    var blackbishop2=new Bishop("blackbishop2",blackbishop,"black",400,560)
    var blackpawn1=new Pawn("blackpawn1",blackpawn,"black",0,480)
    var blackpawn2=new Pawn("blackpawn2",blackpawn,"black",80,480)
    var blackpawn3=new Pawn("blackpawn3",blackpawn,"black",160,480)
    var blackpawn4=new Pawn("blackpawn4",blackpawn,"black",240,480)
    var blackpawn5=new Pawn("blackpawn5",blackpawn,"black",320,480)
    var blackpawn6=new Pawn("blackpawn6",blackpawn,"black",400,480)
    var blackpawn7=new Pawn("blackpawn7",blackpawn,"black",480,480)
    var blackpawn8=new Pawn("blackpawn8",blackpawn,"black",560,480)
    
    var pieces=[whitebishop1,whitepawn1,whitepawn2,whitepawn3,whitepawn4,whitepawn5,whitepawn6,whitepawn7,whitepawn8,whiteking1,whitequeen1,whitebishop2,whitehorse1,whitehorse2,whiterook1,whiterook2,blackpawn1,blackpawn2,blackpawn3,blackpawn4,blackpawn5,blackpawn6,blackpawn7,blackpawn8,blackqueen1
        ,blackking1,blackbishop1,blackbishop2,blackhorse1,blackhorse2,blackrook1,blackrook2];
    
let board={
     board:[[],[],[],[],[],[],[],[]],
   draw(){
       for(i=0;i<8;i++){
           for(j=0;j<8;j++){
               this.board[i][j].draw();
           }
        }
      

   }
   ,
   drawpiece(){ 
        for(i=0;i<8;i++){
    for(j=0;j<8;j++){
       if (board.board[i][j].piece!=null)
       board.board[i][j].piece.draw()
   }
}}
}


for(i=0;i<8;i++){
           for(j=0;j<8;j++){
            if((i+j)%2==0) {   
                color="White"}
            else
            {
                color="Black"
            }
            for(k=0;k<pieces.length;k++){
                if (pieces[k].x==j*80 && pieces[k].y==i*80){
                    board.board[j][i]=new Case(i,j,color,pieces[k].x,pieces[k].y,pieces[k]);
                    break
                }
                
                    board.board[j][i]=new Case(i,j,color,j*80,i*80,null)
                    
                }
            }

}
board.board[5][4].piece=new Queen("whiterook",whitequeen,"white",400,320);
board.board[3][3].piece=new Bishop("blackrook",whitebishop,"white",240,240);
return board
}







/*------------------------------------------------------------*/
             /*            Main               */
/*------------------------------------------------------------*/



window.requestAnimFrame = (function() {
	return (window.requestAnimationFrame 	||
		window.webkitRequestAnimationFrame 	||
		window.mozRequestAnimationFrame 	||
		window.oRequestAnimationFrame 		||
		window.msRequestAnimationFrame 		||
		function (callback) {
			return window.setTimeout(callback, 10);
		});
})();
window.cancelRequestAnimFrame = (function() {
	return (window.cancelAnimationFrame 			||
		window.webkitCancelRequestAnimationFrame 	||
		window.mozCancelRequestAnimationFrame 		||
		window.oCancelRequestAnimationFrame 		||
		window.msCancelRequestAnimationFrame 		||
		clearTimeout);
})();


function getMousePosition(canvas, event){
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    let cords={
        i:(x-(x%80))/80,
        j:(y-(y%80))/80,
        x:x,
        y:y
    }
   console.log("Coordinate x: " + x, 
                "Coordinate y: " + y); 
return cords;
    }

    window.onload=function(){
   
        var board=initialise();
        board.draw()
        board.drawpiece()
       c.addEventListener("click", async function(x)
        {

            var l=getMousePosition(c, x);
            console.log(board.board[l.i][l.j].piece)
         await (c.addEventListener("click",()=>{console.log("HAHAHA")
        return;}));
        if(board.board[l.i][l.j].piece!=null){
            board.draw()
        
            board.board[l.i][l.j].piece.detectmoves(board);
           console.log(l);
           board.drawpiece()
           console.log(board)
        }
      
        return;
        })
        
        };

   
