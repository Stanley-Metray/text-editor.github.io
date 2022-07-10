console.clear();

const textArea = document.getElementById('textarea');
const words = document.getElementById('words');
const sentences = document.getElementById('sentences');
const paragraphs = document.getElementById('paragraphs');

textArea.addEventListener('keyup', function(){
    let text = textArea.value;
    if(text!="")
    {
        words.innerHTML = "Words &nbsp;|&nbsp; "+(text.split(" ")).length;
        if(text.split(".").length==1)
            sentences.innerHTML = "Sentences &nbsp;|&nbsp; 0";
        else
        {
            let l = (text.split(".").length)-1;
            sentences.innerHTML = "Sentences &nbsp;|&nbsp; "+l;
        }
        paragraphs.innerHTML = "Paragraphs &nbsp;|&nbsp; "+(text.split("\n\n")).length;
    }
    else
    {
        words.innerHTML = "Words &nbsp;|&nbsp; 0";
        sentences.innerHTML = "Sentences &nbsp;|&nbsp; 0";
        paragraphs.innerHTML = "Paragraphs &nbsp;|&nbsp; 0";
    }
});

document.getElementById('btn-italic').addEventListener('click', function(){
    textArea.classList.toggle('italic');
    this.classList.toggle('italic-selected');
});

document.getElementById('btn-bold').addEventListener('click', function(){
    textArea.classList.toggle('bold');
    this.classList.toggle('bold-selected');
});

document.getElementById('text-left').addEventListener('click', function(){
    textArea.style.textAlign = 'left';
});

document.getElementById('text-right').addEventListener('click', function(){
    textArea.style.textAlign = 'right';
});

document.getElementById('text-center').addEventListener('click', function(){
    textArea.style.textAlign = 'center';
});

document.getElementById('text-justify').addEventListener('click', function(){
    textArea.style.textAlign = 'justify';
});

document.getElementById('btn-uppercase').addEventListener('click', function(){
    textArea.classList.toggle('font-case');
    this.classList.toggle('bold-selected');
});

document.getElementById('btn-underline').addEventListener('click', function(){
    textArea.classList.toggle('underline');
    this.classList.toggle('bold-selected');
});

document.getElementById('btn-font').addEventListener('click', function(){
    const fonts = document.getElementById('fonts');
    let fontName = fonts.options[fonts.selectedIndex].value;
    if(fontName!="default")
        textArea.style.fontFamily = fontName;
    else
        textArea.style.fontFamily = "'Poppins', sans-serif";
});

document.getElementById('input-font').addEventListener('click', function(){
    textArea.style.fontSize = this.value+"px";
    if(this.value>=50)
    {
        textArea.style.fontSize = 50+"px";
        this.value = 50;
    }
});

document.getElementById('input-font').addEventListener('keyup', function(){
    if(this.value<12)
    {
        textArea.style.fontSize = 12+"px";
    }
    else if(this.value>50)
    {
        textArea.style.fontSize = 50+"px";
        this.value = 50;
    }
    else
        textArea.style.fontSize = this.value+"px"; 
});

document.getElementsByTagName('body')[0].addEventListener('resize', ()=>{
    if(this.width<991)
    document.getElementsByClassName('.main').classList.toggle('container');
});


let str = "Practice makes a   man  ";
str.replace(/\s{2,}/g, ' ').trim()
let count = str.split(" ");

console.log(count.length);