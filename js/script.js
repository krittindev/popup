data = [
    `
    \\[
    \\begin{bmatrix}
    0 & 0 \\\\
    1 & 0\\\\
    0 & 1
    \\end{bmatrix} 
    \\begin{bmatrix}
    x \\\\
    y
    \\end{bmatrix} =
    \\begin{bmatrix}
    0 \\\\
    x \\\\
    y
    \\end{bmatrix}
    \\]`,
    `
    \\[
    \\begin{bmatrix}
    0 & -1 \\\\
    1 & 0\\\\
    0 & 0
    \\end{bmatrix} 
    \\begin{bmatrix}
    x \\\\
    y
    \\end{bmatrix} =
    \\begin{bmatrix}
    -y \\\\
    x \\\\
    0
    \\end{bmatrix}
    \\]`,
    `
    \\[
    \\begin{bmatrix}
    d \\\\
    0\\\\
    d
    \\end{bmatrix} +
    \\begin{bmatrix}
    0 & 0 \\\\
    1 & 0\\\\
    0 & 1
    \\end{bmatrix} 
    \\begin{bmatrix}
    x \\\\
    y
    \\end{bmatrix} =
    \\begin{bmatrix}
    d \\\\
    x \\\\
    y
    \\end{bmatrix}
    \\]`,
    `
    \\[
    \\begin{bmatrix}
    d \\\\
    0\\\\
    d
    \\end{bmatrix} +
    \\begin{bmatrix}
    0 & -1 \\\\
    1 & 0\\\\
    0 & 0
    \\end{bmatrix} 
    \\begin{bmatrix}
    x \\\\
    y
    \\end{bmatrix} =
    \\begin{bmatrix}
    -y \\\\
    x \\\\
    d
    \\end{bmatrix}
    \\]`,
    `
    \\[
    \\begin{bmatrix}
    d-f \\\\
    0\\\\
    d
    \\end{bmatrix} 
    \\begin{bmatrix}
    0 & 0 \\\\
    1 & 0\\\\
    0 & 1
    \\end{bmatrix} 
    \\begin{bmatrix}
    x \\\\
    y
    \\end{bmatrix} =
    \\begin{bmatrix}
    d-f \\\\
    x \\\\
    y
    \\end{bmatrix}
    \\]`,
    `
    \\[
    \\begin{bmatrix}
    d \\\\
    0\\\\
    d-f
    \\end{bmatrix} +
    \\begin{bmatrix}
    0 & -1 \\\\
    1 & 0\\\\
    0 & 0
    \\end{bmatrix} 
    \\begin{bmatrix}
    x \\\\
    y
    \\end{bmatrix} =
    \\begin{bmatrix}
    -y \\\\
    x \\\\
    d-f
    \\end{bmatrix}
    \\]`
]
let format = 1,
    a = 0,
    b = 0,
    c = 0,
    d = 0,
    e = 0,
    f = 0,
    x = 0,
    y = 0
;
function format1(){
    document.getElementById('inputformat1').style.display ='flex';
    document.getElementById('inputformat2').style.display ='none';
    document.getElementById('inputformat3').style.display ='none';
    format = 1;
}
function format2(){
    document.getElementById('inputformat1').style.display ='flex';
    document.getElementById('inputformat2').style.display ='flex';
    document.getElementById('inputformat3').style.display ='none';
    format = 2;
}
function format3(){
    document.getElementById('inputformat1').style.display ='flex';
    document.getElementById('inputformat2').style.display ='flex';
    document.getElementById('inputformat3').style.display ='flex';
    format = 3;
}
function transforms(){
    document.getElementById('points').innerHTML = "";
    switch(format){
        case 1:
            a = parseFloat(document.getElementById('a').value);
            b = parseFloat(document.getElementById('b').value);
            x = parseFloat(document.getElementById('x').value);
            y = parseFloat(document.getElementById('y').value);
            if(y>=0){
                MathJax.Hub.Queue(["Text", MathJax.Hub.getAllJax("formation")[0],data[0]]);
                document.getElementById('points').innerHTML += "("+ (0).toString() +","+ (x).toString() +","+ (y).toString() +")<br>";
            }
            if(y<=0){
                MathJax.Hub.Queue(["Text", MathJax.Hub.getAllJax("formation")[0],data[1]]);
                document.getElementById('points').innerHTML += "("+ (-y).toString() +","+ (x).toString() +","+ (0).toString() +")<br>";
            }
            break;
        case 2:
            a = parseFloat(document.getElementById('a').value);
            b = parseFloat(document.getElementById('b').value);
            c = parseFloat(document.getElementById('c').value);
            d = parseFloat(document.getElementById('d').value);
            x = parseFloat(document.getElementById('x').value);
            y = parseFloat(document.getElementById('y').value);
            if(y>=0 && !(-c<=x && x<=c && 0<=y && y<=d)){
                MathJax.Hub.Queue(["Text", MathJax.Hub.getAllJax("formation")[0],data[0]]);
                document.getElementById('points').innerHTML += "("+ (0).toString() +","+ (x).toString() +","+ (y).toString() +")<br>";
            }
            if(y<=0 && !(-c<=x && x<=c && -d<=y && y<=0)){
                MathJax.Hub.Queue(["Text", MathJax.Hub.getAllJax("formation")[0],data[1]]);
                document.getElementById('points').innerHTML += "("+ (-y).toString() +","+ (x).toString() +","+ (0).toString() +")<br>";
            }
            if(-c<=x && x<=c && -d<=y && y<=0){
                MathJax.Hub.Queue(["Text", MathJax.Hub.getAllJax("formation")[0],data[2]]);
                document.getElementById('points').innerHTML += "("+ (d).toString() +","+ (x).toString() +","+ (y).toString() +")<br>";
            }
            if(-c<=x && x<=c && 0<=y && y<=d){
                MathJax.Hub.Queue(["Text", MathJax.Hub.getAllJax("formation")[0],data[3]]);
                document.getElementById('points').innerHTML += "("+ (-y).toString() +","+ (x).toString() +","+ (d).toString() +")<br>";
            }
            break;
        case 3:
            a = parseFloat(document.getElementById('a').value);
            b = parseFloat(document.getElementById('b').value);
            c = parseFloat(document.getElementById('c').value);
            d = parseFloat(document.getElementById('d').value);
            e = parseFloat(document.getElementById('e').value);
            f = parseFloat(document.getElementById('f').value);
            x = parseFloat(document.getElementById('x').value);
            y = parseFloat(document.getElementById('y').value);
            if(y>=0 && !(-c<=x && x<=c && 0<=y && y<=d)){
                MathJax.Hub.Queue(["Text", MathJax.Hub.getAllJax("formation")[0],data[0]]);
                document.getElementById('points').innerHTML += "("+ (0).toString() +","+ (x).toString() +","+ (y).toString() +")<br>";
            }
            if(y<=0 && !(-c<=x && x<=c && -d<=y && y<=0)){
                MathJax.Hub.Queue(["Text", MathJax.Hub.getAllJax("formation")[0],data[1]]);
                document.getElementById('points').innerHTML += "("+ (-y).toString() +","+ (x).toString() +","+ (0).toString() +")<br>";
            }
            if(-c<=x && x<=c && -d<=y && y<=0 && !(-e<=x && x<=e && -f<=y && y<=0)){
                MathJax.Hub.Queue(["Text", MathJax.Hub.getAllJax("formation")[0],data[2]]);
                document.getElementById('points').innerHTML += "("+ (d).toString() +","+ (x).toString() +","+ (y).toString() +")<br>";
            }
            if(-c<=x && x<=c && 0<=y && y<=d && !(-e<=x && x<=e && 0<=y && y<=f)){
                MathJax.Hub.Queue(["Text", MathJax.Hub.getAllJax("formation")[0],data[3]]);
                document.getElementById('points').innerHTML += "("+ (-y).toString() +","+ (x).toString() +","+ (d).toString() +")<br>";
            }
            if(-e<=x && x<=e && -f<=y && y<=0){
                MathJax.Hub.Queue(["Text", MathJax.Hub.getAllJax("formation")[0],data[4]]);
                document.getElementById('points').innerHTML += "("+ (d-f).toString() +","+ (x).toString() +","+ (y).toString() +")<br>";
            }
            if(-e<=x && x<=e && 0<=y && y<=f){
                MathJax.Hub.Queue(["Text", MathJax.Hub.getAllJax("formation")[0],data[5]]);
                document.getElementById('points').innerHTML += "("+ (-y).toString() +","+ (x).toString() +","+ (d-f).toString() +")<br>";
            }
            break;
    }
}