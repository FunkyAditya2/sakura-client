function dis(){
    window.open("https://discord.gg/dnXkhWGeVD")
}

const downloadButton = document.querySelector(".downloadButton");

    downloadButton.addEventListener("click", function() {
        const imageSrc = "xD.png"; // Replace with the actual image file name

        // Create a temporary anchor element
        const tempLink = document.createElement("a");
        tempLink.href = imageSrc;
        tempLink.download = "xD.png"; // Specify the file name

        // Simulate a click event to trigger the download
        tempLink.click();
    });