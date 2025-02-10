friendsList=[];

function addFriends(){
    let friendName= document.getElementById("input-name").value;
    friendsList.push(friendName);
    //console.log(friendsList)
};

function cleanField(){
    document.getElementById("input-name").value="";
};


//Eventos
document.getElementById("input-bt-add").addEventListener("click", ()=>{
    addFriends();
    cleanField();
});