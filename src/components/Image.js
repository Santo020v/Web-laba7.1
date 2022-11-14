import React from "react"
import styles from "./styles.css"

function Image() {
    return (
        <> <div id="header"></div>
        <a href="https://en.wikipedia.org/wiki/Kyiv"><img src="https://www.worldatlas.com/r/w768/upload/97/8a/05/shutterstock-594440360.jpg" id="img1" width="500px" height="400px"  /></a>
            <center>
                <button id="add-image" onClick={addImage}><i>Додати</i></button>
                <button id="enlarge-image" onClick={enlargeImage}><i>Збільшити</i></button>
                <button id="reduce-image" onClick={reduceImage}><i>Зменшити</i></button>
                <button id="delete-image" onClick={deleteImage}><i>Видалити</i></button>
            </center></>
    )
}

function enlargeImage() {
    const elem = document.getElementById("img1");
    elem.style.width = "700px";
    elem.style.height = "600px";
  }

  function reduceImage() {
    const elem = document.getElementById("img1");
    elem.style.width = "400px";
    elem.style.height = "300px";
  }

  function deleteImage() {
    var image_x = document.getElementById('img1');
    image_x.parentNode.removeChild(image_x);
  }

  function addImage() {
    var img1 = document.createElement("img");
    img1.style.width = '600px'
    img1.style.height = "400px";
    img1.src = "https://wondersholidays.com/wp-content/uploads/2018/02/kiev1.jpg";
    var src = document.getElementById("header");
    src.appendChild(img1);
  }

export default Image