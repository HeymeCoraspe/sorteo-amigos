/**import Swal from 'sweetalert2'*/

let friendsList=[];

function addFriends(){
    let friendName= document.getElementById("input-name").value.toLowerCase();

    if (friendName==""){
        Swal.fire("Error", "Debes agregar un nombre", "warning");
        } else{
            if (friendsList.includes(friendName)){
                Swal.fire("Error", "Nombre repetido", "error");;
            }else{
                friendsList.push(friendName);
                return friendName;
        };
    };
};    
       
function updateList(){
    let newListElement= document.querySelector(".name-list");
    newListElement.innerHTML="";

    friendsList.forEach(name => {
        let listItem= document.createElement("li");
        listItem.textContent=name;
        newListElement.append(listItem);
    });    
};

function cleanField(){
    document.getElementById("input-name").value="";
};


//Eventos
document.getElementById("input-bt-add").addEventListener("click", ()=>{
    addFriends();
    cleanField();
    updateList();
});

/** updated footer, alert's style changed to sweetalert */