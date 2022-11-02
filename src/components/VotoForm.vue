<template>
    <div id="container">
      <form v-on:submit.prevent="submitForm">
      <ion-item>
        <ion-label position="stacked">
          Voto
        </ion-label>
        <ion-input type="text" placeholder="Budweiser ou Heineken" name="voto" v-model="form.voto"></ion-input>
      </ion-item>
      <br>
      <ion-item>
        <ion-label position="stacked">
          E-mail
        </ion-label>
        <ion-input type="email" placeholder="exemplo@outlook.com" name="email" v-model="form.email"></ion-input>
      </ion-item>
      <br>
      <ion-item>
        <ion-label position="stacked">
          Nome
        </ion-label>
        <ion-input type="text" placeholder="Insira seu nome" name="nome" v-model="form.nome"></ion-input>
      </ion-item>
      <br>
      <ion-item>
        <ion-label position="stacked">
          Cidade
        </ion-label>
        <ion-input type="text" placeholder="Insira sua cidade" name="cidade" v-model="form.cidade"></ion-input>
      </ion-item>
      <br>
      <ion-item>
        <ion-label position="stacked">
          Estado
        </ion-label>
        <ion-input type="text" placeholder="Insira seu estado" name="estado" v-model="form.estado"></ion-input>
      </ion-item>
      <br>
      <ion-button color="success" type="submit">Enviar Voto</ion-button>
    </form>
    </div>
  </template>
  
  <script lang="ts">
  import { IonInput, IonItem, IonLabel, IonButton } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import router from '@/router';
  import axios from 'axios';
  import { RouteLocationRaw } from 'vue-router';
  
  export default defineComponent({
    name: 'VotoForm',
    components:{
      IonButton,
      IonInput,
      IonLabel,
      IonItem
    },
    data(){
    return{
      form: {
          voto: '',
          email: '',
          nome: '',
          cidade: '',
          estado: '',
      }
    }
  },
    methods: {
      alert_sucess(response: number){
        alert(response);
    },
    alert_error(error: number){
      alert(error);
    },
    chageRoute(route: RouteLocationRaw){
      router.push(route);
    },
    submitForm(){
      axios.post('http://localhost:8000/voto', this.form)
      .then((res) =>{
          this.alert_sucess(res.status);
          this.chageRoute('/login');
      })
      .catch((error) => {
          this.alert_error(error);
          console.log(error)
      })
      }
    },
  });
  
  </script>
  
  <style scoped>
  #container {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 15%;
    padding-left: 30px;
    padding-right: 30px;
  }
  </style>
  