var a=[10,20,30,89,65,31,56,78];
document.write("a=[10,20,30,89,65,31,56,78]"+"<br>"+"<br>");
var b=[];
for(let i=0;i<a.length;i++)
{
if(a[i]%2==0){
	b.push(a[i]);
	}
}
console.log(b);
document.write("put even no in new array"+"<br>"+"<br>"+"b="+b);