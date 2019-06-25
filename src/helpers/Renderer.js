import background from '../Images/background.jpg';

class RendererHelper{
  constructor(canvas, ctx){
    this.canvas = canvas;
    this.ctx = ctx;
  }

  loadBackground(){
    const img = new Image();
    img.src = background;
    img.onload = () => {
      this.ctx.drawImage(img,0,0,this.canvas.width, this.canvas.height)
    }
    this.ctx.font = "30px Arial";
    this.ctx.fillText("Code Clashers", 10,50);
    this.ctx.textAlign = "center";
  }

}


export default RendererHelper;
