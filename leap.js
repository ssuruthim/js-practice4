var year = prompt("enter the year");
function checkleapyear(year)
{
    const leap = new Date(year,1,29).getDate() ===29;
    if (leap)
    {
        console.log(year+ 'is a leap year');
    }else{
        console.log(year+ 'is not a leap year');
    }
}
checkleapyear(year);