var v= prompt("enthe the number");
let temp;
var lastdigit;
var reversenumber=0;
temp=v;
while(temp>0)
{
    lastdigit=temp%10;
    temp=temp-lastdigit;
    temp=temp/10;
    reversenumber=reversenumber*10+lastdigit;
    


if(lastdigit==0)
{
    console.log("zero");
}
else if(lastdigit==1)
{
    console.log("one");
}
else if(lastdigit==2)
{
    console.log("two");
}
else if(lastdigit==3)
{
    console.log("three");
}
else if(lastdigit==4)
{
    console.log("four");
}
else if(lastdigit==5)
{
    console.log("five");
}
else if(lastdigit==6)
{
    console.log("six");
}
else if(lastdigit==7)
{
    console.log("seven");
}
else if(lastdigit==8)
{
    console.log("eight");
}
else if(lastdigit==9)
{
    console.log("nine");
}
}console.log("reverse number:",reversenumber);