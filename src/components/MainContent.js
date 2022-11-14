import React from "react"
import styles from "./styles.css"

class MainContent extends React.Component {
    render() {
        return (
            <><><><><p>Народилась у м. Жмеринка, Вінницької області, 3 квітня 2002 року</p>
                <div>
                    <h5>Освіта:</h5>
                    <p>Здобула середню освіту в ЗОШ 1-3 ступенів №4 м. Жмеринки.
                    <br /> З 2019 року є студенткою НТУУ КПІ ім. Ігоря Сікорського.
                    <br />  Здобуваю вищу освіту на факультеті інженерії та обчислювальної техніки.
                    <br />  Kафедрa інформатики та програмної інженерії</p>
                </div></>
                <div id="div2">
                    <h5 id="element7" onClick={changeColorById}>Мої хоббі:</h5>
                    <ul>
                        <li class="use-selector" onClick={changeColorBySelector}>Читати книги</li>
                        <li>Грати на укулеле</li>
                        <li>Проводити час з друзями</li>
                    </ul>
                </div></><div id="div3">
                    <h5>Улюблені книги:</h5>
                    <ol>
                        <li>"Останній лист від твого коханого" <i>Джоджо Мойєс</i></li>
                        <li>"Провина зірок" <i>Джон Грін</i></li>
                        <li>"День, що навчив мене жити" <i>Лоран Гунель</i></li>
                    </ol>
                </div></>
                <h5>Улюблене місто:</h5>
                <p><i>Київ.</i> Це коротке звучне слово – назва міста, корені якого йдуть глибоко в сиву давнину.
                <br /> Його історія нараховує більш ніж 1500 років.
                <br />  Це одне з найстаріших слов'янських міст  - столиця ранньофеодальної держави Київська Русь, місто, відоме в історії як «мати міст руських».
                <br />  Один із центрів, де зароджувалася рання слов'янська культура  як  важлива  складова  світової цивілізації.
                <br /> “В усьому світі немає міста красивіше за Київ” - Михайло Булгаков.
                </p></>
        );
      }
}

function random(mn, mx) {
    return Math.random() * (mx - mn) + mn;
    }
function changeColorById() {
    const elem = document.getElementById("element7");
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    elem.style.backgroundColor = '#' + randomColor;

    var arr = ['#ffffff', '#663300', '#000000', '#005266', '#004d00'];

    elem.style.color = arr[Math.floor(random(1, 5))-1];
  }

function changeColorBySelector() {
    const elem = document.querySelector(".use-selector");
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    elem.style.backgroundColor = '#' + randomColor;

    var arr = ['#ffffff', '#663300', '#000000', '#005266', '#004d00'];

    elem.style.color = arr[Math.floor(random(1, 5))-1];
  }


export default MainContent;
