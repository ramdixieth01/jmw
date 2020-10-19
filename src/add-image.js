import jmw from './jmw.png'

function addImage(){
    const img=document.createElement('img');
    img.alt='jmw';
    img.width=300;
    img.src=jmw;
}

const body= document.querySelector('body');
body.appendChild(img);

export default addImage;