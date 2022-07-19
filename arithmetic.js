var a =parseInt(prompt("enter a number"));
var b =parseInt(prompt("enter a number"));
var op=prompt("enter the operator");
switch(op)
{
    case '+':
        console.log("return:" , (a+b));
        break;
        case '*':
        console.log("return:", (a*b));
        break;
        case '-':
            console.log("return:" , (a-b));
            break;
            case '/':
                console.log("return:" , (a/b));
                break;
                default:
                    console.log("enter a number");

}