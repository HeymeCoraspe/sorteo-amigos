friendsList=[];

function addFriends(){
    let friendName= document.getElementById("input-name").value.toLowerCase();

    if (friendName==""){
        alert("Debes agregar un nombre");
        } else{
            if (friendsList.includes(friendName)){
                alert("Ya agregaste ese nombre");
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

/** */