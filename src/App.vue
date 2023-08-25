<script setup>
import Nav from "./components/Nav.vue"
import Footer from "./components/Footer.vue";

const deviceWidth = window.innerWidth < 600;

</script>

<template>
  <section class="accept-display" id="accept-display">
    <Nav></Nav>
    <section class="router-content">
      <router-view></router-view>
    </section>
    <Footer id="footer"></Footer>
  </section>
  <section class="unaccept-display" id="unaccept-display">
    Sorry, this site is not available on your device &hearts;
  </section>
  <section class="chatbot-container" id="chatbot-container">
        <b id="chatbot-icon" @click="displayInput()">&phone;</b>
        <section id="chatbot-input">
            <section class="chatbot-title"><span>Chatbot...</span><span @click="hideChatX()" id="chatbot-x">&times;</span></section>
            <input type="text" placeholder="say hi..." id="chatbot-user-text"/>
            <section id="chatbot-reply"></section>
            <section @click="startBot()" class="chatbot-submit">ENTER</section>
        </section>
  </section>
</template>

<style scoped>
header {
  line-height: 1.5;
}

body {
  margin: 0px;
}

.unaccept-display {
  color: var(--primary-light);
  background-color: var(--primary-dark);
  display: none;
}

.router-content {
  background-color: var(--secondary-dark);
  height: auto;
  color: white;
  padding-top: 3.7%;
}

#footer {
  position: relative;
}

.chatbot-container {
  display: block;
  position: fixed;
  z-index: 100;
  top: 85%;
  right: 4%;
  
}

#chatbot-input {
  display: none;
  border: solid 1px var(--primary-light);
  background-color: var(--primary-dark);
  color: white;
  border-radius: 5px;;
  width: 300px;
}

#chatbot-icon {
  font-size: 2.3em;;
  border: solid var(--primary-light) 1px;;
  background-color: white;
  border-radius: 22px;
  padding: 5px;
  
}

#chatbot-icon:hover {
  cursor: pointer;
}

#chatbot-x:hover {
  cursor: pointer;
}

#chatbot-reply {
  display: none;
  border-bottom: solid .5px silver;;
  border-top: solid .5px silver;;
  padding: 2%;
}

.chatbot-title {
  padding: 2%;
  text-align: center;
  display: grid;
  grid-template-columns: 90% 10%;
}

input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease-in-out;
}

/* Style for the input when focused */
input:focus {
  border-color: var(--primary-light);
  box-shadow: 0 0 12px rgba(255, 106, 0, 0.5);
}

.chatbot-submit {
  padding: 1px;
  text-align: center;
  background-color: var(--secondary-dark)
}

.chatbot-submit:hover {
  background-color: rgb(102, 102, 102);
  cursor: pointer;
}

.bot-weather-title {
  text-align: center;
}

@media screen and (max-width: 900px) {
  .router-content {
    padding-top: 4%;
  }
}

@media screen and (max-width: 750px) {
  .router-content {
    padding-top: 5%;
  }
}

@media screen and (max-width: 600px) {
  .router-content {
    padding-top: 6%;
  }
}

@media screen and (max-width: 450px) {
  .router-content {
    padding-top: 8%;
  }

  #chatbot-icon {
    font-size: 2.5em;
    padding: 6px;
  }

  .chatbot-title {
    font-size: 1.2em;;
  }

  input {
    font-size: 17px;;
  }

}

@media screen and (max-width: 350px) {
  .router-content {
    padding-top: 12%;
  }
}

@media screen and (max-width: 300px) {
  .router-content {
    padding-top: 15%;
  }
}



</style>

<script>
  import {getWeather} from './fetchWeather'; 

 function displayInput() {
    var inputDisplay = document.getElementById("chatbot-input");
    inputDisplay.style.display = "grid";
    inputDisplay.style.gridTemplateRows = "auto auto";
    var iconDisplay = document.getElementById("chatbot-icon");
    iconDisplay.style.display = "none";

    var container = document.getElementById("chatbot-container");
    container.style.top = "74%";

    startBot()
 }

 function hideChatX() {
    var x = document.getElementById("chatbot-input")
    x.style.display = "none";
    var iconDisplay = document.getElementById("chatbot-icon");
    iconDisplay.style.display = "inline";

    var container = document.getElementById("chatbot-container");
    container.style.top = "83%";
 }

  function startBot() {
    const userInput = document.getElementById("chatbot-user-text").value

    const chatReply = document.getElementById("chatbot-reply")
    chatReply.style.display = "block"

    const clearInputField = document.getElementById("chatbot-user-text")
    clearInputField.value = ""
    
    var lowerInput = userInput.toLowerCase()
    if (lowerInput.includes("hello") || lowerInput.includes("hi") ) {
      var arrayOfHi = ["Hi there!", "Hey there", "Well, story lad", "What's up" ]
      chatReply.innerHTML = arrayOfHi[Math.floor(Math.random() * (2 - 0 + 1)) + 0]
    } else if (lowerInput.includes("how are you?") || lowerInput.includes("how are you") || lowerInput.includes("how's things?")) {
      var arrayOfHay = ["I'm feeling good today and you?", "I'm doing fine. How are you?", "All good here, you?", "I'm great today! How are you?"]
      chatReply.innerHTML = arrayOfHay[Math.floor(Math.random() * (2 - 0 + 1)) + 0];
    } else if ( lowerInput.includes("weather") ) {
      getWeather().then((weatherData) => {
        console.log(weatherData)
        var daily = weatherData.daily
        chatReply.innerHTML = "<span style='display:flex; justify-content:center;'>Today's weather: </span>"
        chatReply.innerHTML += "Temperature Range: <b>" + daily.temperature_2m_min[0] + "&deg;C" + " - " + daily.temperature_2m_max[0] + "&deg;C </b><br>"
        chatReply.innerHTML += "Rain: <b>" + daily.precipitation_sum[0] + "mm</b>"
      })
    }
    else {
      chatReply.innerHTML = ""
    }
 }


</script>
