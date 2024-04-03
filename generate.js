const ele = "abcdefghijABCDEFGIHJklmnopqrsLMNOPQRSTUVWXYZtuvwxyz1234567890!@~#$%^&*()_+-={}[]:;''<,>."


function generate()
{
    const text = document.getElementById("txt1");

    let result = "";

    tLen = 15;

    let i = 0;

    while(i<tLen)
    {
        result += ele[Math.floor(Math.random()*ele.length)];
        i++;
    }

    text.value = result;
}

function clean()
{
    const text = document.getElementById("txt1");

    text.value = "";
}
