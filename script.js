const saveBtn = document.getElementById("confirmsavebtn");
const genbtn = document.getElementById("generatebtn");
const starttimesaved = document.getElementById("starttimeentry");
const starttimebase = document.getElementById("startbasetimeentry");
const endtimesaved = document.getElementById("endtimeentry");
const endtimebase = document.getElementById("endbasetimeentry");
const arr1 = document.getElementById("arrivalresult1");
const arr2 = document.getElementById("arrivalresult2");

saveBtn.disabled = true;
genbtn.disabled = false;

let starttime = starttimesaved.value;
let startbase = starttimebase.value;
let endtime = endtimesaved.value;
let endbase = endtimebase.value;



starttimesaved.addEventListener("change", function(event){

    const entry = event.target.value.toString();
    const comptime = starttime.toString();
    
    if (entry !== comptime){
        starttime = entry;
        saveBtn.disabled = false;
        genbtn.disabled = true;
    }

});

starttimebase.addEventListener("change", function(event){

    const entry = event.target.value.toString();
    const comptime = startbase.toString();
    
    if (entry !== comptime){
        startbase = entry;
        saveBtn.disabled = false;
        genbtn.disabled = true;
    }

});
endtimesaved.addEventListener("change", function(event){

    const entry = event.target.value.toString();
    const comptime = endtime.toString();
    
    if (entry !== comptime){
        endtime = entry;
        saveBtn.disabled = false;
        genbtn.disabled = true;
    }

});
endtimebase.addEventListener("change", function(event){

    const entry = event.target.value.toString();
    const comptime = endbase.toString();

    if (entry !== comptime){
        endbase = entry;
        saveBtn.disabled = false;
        genbtn.disabled = true;
    }

});

saveBtn.addEventListener("click", function(){

    saveBtn.disabled = true;
    genbtn.disabled = false;

});

genbtn.addEventListener("click", function(){

    const startDisp = StartCalc();
    const endDisp = EndCalc();

    arr1.innerText = startDisp.toString();
    arr2.innerText = endDisp.toString();

});

function GetRandomNumber(min, max){

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function StartCalc(){
    const [h1, m1] = starttime.split(':').map(Number);
    const [h2, m2] = startbase.split(':').map(Number);
    const initialStart = (h1 * 60 + m1);
    const initialBase = (h2 * 60 + m2);
    const initialTotal = initialStart + initialBase;

    let randomMinutes = GetRandomNumber(1, 6);

    let finalMinutes = initialTotal + randomMinutes;

    const hours = Math.floor(finalMinutes / 60) % 24;
    const minutes = finalMinutes % 60;

    const pad = (num) => String(num).padStart(2, '0');
    let finalReturnTime = `${pad(hours)}:${pad(minutes)}`;
    return finalReturnTime;

}

function EndCalc(){
const [h1, m1] = endtime.split(':').map(Number);
    const [h2, m2] = endbase.split(':').map(Number);
    const initialStart = (h1 * 60 + m1);
    const initialBase = (h2 * 60 + m2);
    const initialTotal = initialStart + initialBase;

    let randomMinutes = GetRandomNumber(2, 12);

    let finalMinutes = initialTotal + randomMinutes;

    const hours = Math.floor(finalMinutes / 60) % 24;
    const minutes = finalMinutes % 60;

    const pad = (num) => String(num).padStart(2, '0');
    let finalReturnTime = `${pad(hours)}:${pad(minutes)}`;
    return finalReturnTime;

}