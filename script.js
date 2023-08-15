function myFunction(){
    var name1 = prompt('ENTER YOUR NAME')
var eng  = +prompt('ENTER YOUR ENG MARKS')
var urdu  = +prompt('ENTER YOUR URDU MARKS')
var math = +prompt('ENTER YOUR MATH MARKS')
var sci = +prompt('ENTER YOUR SCI MARKS')
var sst  = +prompt('ENTER YOUR S.ST MARKS')
var total = eng + urdu + math + sci + sst 
var perc = (total / 500)*100
// document.write(perc)


var grade;
if(perc >= 90 && perc < 101 ){
    grade='A+'
}
else if(perc >= 80 && perc < 90 ){
    grade='A'
}
else if(perc >= 70 && perc < 80 ){
grade='B'
}
else if(perc >= 60 && perc < 70 ){
grade='C'
}
else{
grade=('FAIl')
}
document.write (
    '<table border="1px">'+'<tr>'+
   '<th>'+'NAME'+'</th>'+
   '<th>'+'ENG-MARKS'+'</th>'+
   ' <th>'+'URDU-MARKS'+'</th>'+
   ' <th>'+'MATH-MARKS'+'</th>'+
   ' <th>'+'SCI-MARKS'+'</th>'+
   ' <th>'+'S.ST-MARKS'+'</th>'+
   ' <th>'+'PERCENTAGE'+'</th>'+
   ' <th>'+'GRADE'+'</th>'
    +'</tr>' +
    '<tr>'+

   '<td>'+name1+'</td>'+
   '<td>'+eng+'</td>'+
   '<td>'+urdu+'</td>'+
   '<td>'+math+'</td>'+
   '<td>'+sci+'</td>'+
   '<td>'+sst+'</td>'+
   '<td>'+perc+'</td>'+
   '<td>'+grade+'</td>'+

    +'</tr>'
    
    
    +'</table>'
)
}