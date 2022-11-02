<template>
  <div id="container">
    <form v-on:submit.prevent="submitForm">
    <ion-item>
      <ion-label position="stacked">
        E-Mail
      </ion-label>
      <ion-input type="email" placeholder="E-mail" v-model="input.user"></ion-input>
    </ion-item>
    <br>
    <ion-item>
      <ion-label position="stacked">
        Senha
      </ion-label>
      <ion-input type="password" placeholder="*******" v-model="input.pass"></ion-input>
    </ion-item>
    <br>
    <ion-button color="success" type="submit">Entrar</ion-button>
  </form>
  </div>
</template>

<script lang="ts">
import { IonInput, IonItem, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';
import axios from 'axios';
import router from '@/router';
import { RouteLocationRaw } from 'vue-router';

export default defineComponent({
  name: 'LoginForm',
  components:{
    IonInput,
    IonItem,
    IonLabel
  },
  data(){
    return{
      input: {
          user: '',
          pass: '',
      }
    }
  },
  methods: {
    chageRoute(route: RouteLocationRaw){
      router.push(route);
    },
    submitForm(){
      axios.post('/http://localhost:8000/user', this.input)
      .then(() =>{
        this.chageRoute('/dados');
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }
});
</script>

<style scoped>
#container {
  text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 30%;
    padding-left: 30px;
    padding-right: 30px;
}
</style>