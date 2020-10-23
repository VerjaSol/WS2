var mood = document.getElementsByName('moodform')[0];
mood.addEventListener('change', colorChange);

function colorChange(){
    var body = document.getElementById('body');
    var select = document.getElementById("mood").selectedIndex;
    switch (select) {
        case 0:
            body.style.backgroundColor ="#b3ffb3";
          break;
        case 1:
            body.style.backgroundColor ="#6699ff";
          break;
        case 2:
            body.style.backgroundColor ="#ffffb3";
          break;
        case 3:
            body.style.backgroundColor ="#ffb3cc";
        }
    
}

var addto = document.getElementById('addto');
addto.addEventListener("click", validateForm);


function validateForm(event){
    var y = document.forms["input"]["addtask"].value;
        if (y.length>0){
        addToList(event);
        event.preventDefault();
        }
        else {
        var b = document.forms.input.addtask;
        b.style.borderColor = "red";
        document.getElementById('error').innerHTML="<b>*Please add a task</b>";
        }
     event.preventDefault();
  }
var i=1;
var j =0;
function addToList(event){
    var newRow = document.createElement('li');
    newRow.setAttribute('id','row'+i)
    document.getElementById('list').appendChild(newRow);
    var task = document.createElement('span')
    var text = document.getElementById('addtask').value;
    var date = document.getElementById('dl').value;
    task.innerHTML = text + " " + date;
    task.setAttribute('id','new'+i);
    task.addEventListener('dblclick', delRow);
    newRow.appendChild(task);
    var check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    newRow.appendChild(check);
    document.getElementById('myBar').style.width=(j/i*100)+ '%';
            document.getElementById('myBar').innerHTML=(j/i*100)+ '%';
    check.addEventListener('click', function(){task.style.textDecoration = 'line-through';
             j++;
            document.getElementById('myBar').style.width=(j/i*100)+ '%';
            document.getElementById('myBar').innerHTML=(j/i*100)+ '%';
             });
    event.preventDefault();
    i++;
}

function delRow(){
    var item = document.getElementById(this.id);
    var parent = item.parentNode;
  parent.parentNode.removeChild(parent);
  }

  var extra = document.getElementById('myComment');
    extra.style.display = 'none';

var leaveComment = document.getElementById('leaveComment');
leaveComment.addEventListener('click', function(){extra.style.display = 'block' });

