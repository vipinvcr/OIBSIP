function calc()
{

    var exp=document.getElementById('ent').value;
    try{
        var a=eval(exp);
        if(a==undefined)
        {
            window.alert("Please Enter a Valid Expression");
        }
        else{
            document.getElementById('ent').value=a;
        }

    }
    catch
    {
        window.alert("Please Enter a Valid Expression");
    }

}
function srt()
{
    var exp=document.getElementById('ent').value;
    try{
        var a=eval((exp)**(1/2));
        if(a==undefined)
        {
            window.alert("Please Enter a Valid Expression");
        }
        else{
            document.getElementById('ent').value=a;
        }

    }
    catch
    {
        window.alert("Please Enter a Valid Expression");
    }

}
function disp(a)
{
    var exp=document.getElementById('ent').value;
    document.getElementById('ent').value=exp+a;
}

function del()
{
    document.getElementById('ent').value="";
}

function clrscr()
{
    var ex=document.getElementById('ent').value;
    var ex1=ex.substring(0,ex.length-1);
    document.getElementById('ent').value=ex1;
}

function rt(n)
{
    var an=Math.sqrt(n);

}

function feat()
{
    document.getElementById("f1").classList.add("active");
    document.getElementById("f2").classList.add("active");
    document.getElementById("f3").classList.add("active");
} 