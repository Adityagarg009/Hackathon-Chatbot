<template>
  <div >
    <div class="container">
      <div class="message-container no-scroll-display" >
        <div class="messages" v-for="data in chats" :key="data.id">
          <messageView :message="data.content" :role="data.role" />
        </div>
        <LoaderVue v-if="inputFreeze"/>
        <avatar v-if="videoStatus"/>
      </div>
      <form @submit.prevent="messageSent()">
      <div class="search-bar">
        <div class="search-inner">
            <input type="text" v-model="inputText" />
          <ph-microphone :size="32" class="icons" @click="ToggleMic" :class="isRecording === true ? 'active' : 'dis'"/>
          <ph-arrow-circle-right
            :size="32"
            class="icons tick"
            @click="messageSent()"
            @keypress.enter="messageSent()"
          />
        </div>
      </div>
    </form>
    </div>
  </div>
</template>

<script setup>
// imports
import OpenAI from "openai";
import { onMounted, ref } from "vue";
import LoaderVue from "../assets/Loader.vue";
import messageView from "./messageView.vue";
import avatar from "./avatar.vue";

// speech Recognition variables
const isRecording = ref(false);
// const micActivity = ref(false);

const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const sr = new Recognition();

// variables

const videoStatus = ref(false)
const inputFreeze = ref(false)
const chats = ref([]);
const inputText = ref("");


onMounted(() => {



  const scrollDiv = document.querySelector(".message-container")
  console.log(scrollDiv.scrollIntoView);
  sr.continuous = false;
  sr.interimResults = true;

  sr.onstart = () => {
    console.log("SR Started");
    isRecording.value = true;
  };

  sr.onend = () => {
    console.log("SR Stopped");
    isRecording.value = false;
    messageSent()
  };

  sr.onresult = (evt) => {
    for (let i = 0; i < evt.results.length; i++) {
      const result = evt.results[i];

      if (result.isFinal) CheckForCommand(result);
    }

    const t = Array.from(evt.results)
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join("");

    inputText.value = t;
  };
});

const CheckForCommand = (result) => {
  // const t = result[0].transcript;
};

const ToggleMic = () => {
  if (isRecording.value) {
    sr.stop();
  } else {
    sr.start();
  }
};

const messageSent = () => {
  if (inputText.value !== "" && !inputFreeze.value) {
    fetchResponse(inputText.value);
    chats.value.push({ role: "user", content: inputText.value });
    inputText.value = "";
    console.log(chats.value);
    // generateResponse();
    // sendPromptToChatGPT();
  }
};

const responses = ref("");

const fetchResponse = async (input) => {
  inputFreeze.value = true
  try {
    const openai = new OpenAI({
      apiKey: import.meta.env.VITE_OPENAI_API_KEY,
      dangerouslyAllowBrowser: true,
    });
    
    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: `You are a chat agent named Eddie and you will only answer questions related " strengthening the system for cleanliness of water bodies." any questions which are not related to " strengthening the system for cleanliness of water bodies" will need to be confirmed from the user only then you can answer that . try to keep your answers short also if there are any grammatical error from the user then please mention it first then continue with the answer`},
        { role: "user", content: input },
      ],
      model: "gpt-4-0613",
      // model: "gpt-3.5-turbo", 
    });
    // changing input freeze state
    inputFreeze.value = false;
    // adding to stack
    console.log(completion);
    chats.value.push(completion.choices[0].message);
    console.log(chats.value);
    console.log(chats.value[0]);
    // start speech to txt
    const utterance = new SpeechSynthesisUtterance(
      completion.choices[0].message.content
      );
    console.log(chats.value[0].content);
    window.speechSynthesis.speak(utterance)
    videoStatus.value = true
    utterance.addEventListener("end", (event) => {
      console.log(
        `Utterance has finished being spoken after ${event.elapsedTime} seconds.`,
        videoStatus.value = false
      );
    })
window.addEventListener("keydown", (event) => {
  if (event.key === "s" || event.key === "S") {
    // Stop speechSynthesis when "S" key is pressed
    window.speechSynthesis.cancel();
        videoStatus.value = false

  }
});
  //     utterance.onend(() => {
  // })
    } catch (error) {
      console.error("Error fetching ChatGPT response:", error);
    }
};
</script>

<style scoped>
.messages {
  background-color: rgba(240, 248, 255, 0);
}
.message-container {
  height: calc(100vh - 12rem);
  overflow-x: hidden;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: 1px;
  background-color: rgba(245, 222, 179, 0);
}
.no-scroll-display {
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}
.no-scroll-display::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}
.container {
  position: relative;

}

.search-inner {
  display: flex;
  position: absolute;
  bottom: 0px;
  width: calc(100vw - 4rem);
  height: 3rem;
  border-radius: 25px;
  margin: 1rem 0.75rem;
  background-color: var(--background);
}
.search-bar input {
  width: calc(100vw - 2rem);
  height: 3rem;
  border: 0px;
  border-radius: 25px;
  color: var(--text);
  caret-color: var(--text);
  padding: 0px 1rem;
}
.search-bar input[type="text"] {
  font-size: 1.5rem;
}
.search-bar input[type="text"]:focus {
  outline: none !important;
}
.icons {
  margin: 7px 10px 0px 0px;
  border-radius: 25px;
  
}
.active{
  margin: 7px 10px 0px 0px;
  border-radius: 25px;
  filter: invert(100%);
}
</style>
