//your JS code here. If required.
  
let target = document.getElementById("level");

let level = 1;
while(target.parentElement != null)
{
    level++;
    target = target.parentElement;
}

alert(level);
