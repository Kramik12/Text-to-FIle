const textarea = document.querySelector("textarea");
fineNameInput = document.querySelector(".file-name input");
selectMenu = document.querySelector(".save-as select");
saveBtn = document.querySelector(".save-btn");

selectMenu.addEventListener("change", () => {
    // getting selected option text
    let selectedOption = selectMenu.options[selectMenu.selectedIndex].text;
    saveBtn.innerText = `Save As ${selectedOption.split(" ")[0]} File`;

});


saveBtn.addEventListener("click", () => {
    const blob = new Blob([textarea.value], {type: selectMenu.value});

    //URL.createObjectURL creates a URL that represent passed object
    const fileURL = URL.createObjectURL(blob);
    const link = document.createElement("a");//creating <a> tag
    link.download = fileNameInput.value; //passing filename as download
    link.href = fileURL; //passing fileURL as href value of link
    link.click(); //clicking link so the file downloads.
})
