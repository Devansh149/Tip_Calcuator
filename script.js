document.querySelector(".calc").addEventListener("click",function(){
    let bill=parseFloat(document.querySelector(".bill").value);
    let tip_p=parseFloat(document.querySelector(".tip_p").value);
    let people=parseFloat(document.querySelector(".people").value); 
    
    if(isNaN(bill) || isNaN(tip_p) || isNaN(people) || people<=0){
        alert("Please enter valid numbers");
        return;
    }

    let tip=(tip_p/100)*bill;
    let total=tip+bill;
    let per_person=total/people;
    
    document.querySelector(".t").innerText='$'+tip;
    document.querySelector(".to").innerText='$'+total;
    document.querySelector(".per").innerText='$'+per_person;
    document.querySelector(".bottom").style.display="grid";  
});