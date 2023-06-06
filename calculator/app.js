function getNum(num)
{
    console.log(num)
document.getElementById('result').value+=num;
}
function clrs()
{
    document.getElementById('result').value="";
}
function removenum()
{
    var res = document.getElementById('result').value;
    document.getElementById('result').value=document.getElementById('result').value.slice(0, res.length-1);
}
function getans()
{
    document.getElementById('result').value= eval(document.getElementById('result').value);

}

















