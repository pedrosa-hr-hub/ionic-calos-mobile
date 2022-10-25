<template>
    <div id="container">
      <ion-item>
        <ion-label position="stacked">
          Voto
        </ion-label>
        <ion-input type="text" placeholder="Budweiser ou Heineken" v-model="input.voto"></ion-input>
      </ion-item>
      <br>
      <ion-item>
        <ion-label position="stacked">
          E-mail
        </ion-label>
        <ion-input type="email" placeholder="exemplo@outlook.com" v-model="input.email"></ion-input>
      </ion-item>
      <br>
      <ion-item>
        <ion-label position="stacked">
          Nome
        </ion-label>
        <ion-input type="text" placeholder="Insira seu nome" v-model="input.nome"></ion-input>
      </ion-item>
      <br>
      <ion-item>
        <ion-label position="stacked">
          Cidade
        </ion-label>
        <ion-input type="text" placeholder="Insira sua cidade" v-model="input.cidade"></ion-input>
      </ion-item>
      <br>
      <ion-item>
        <ion-label position="stacked">
          Estado
        </ion-label>
        <ion-input type="text" placeholder="Insira seu estado" v-model="input.estado"></ion-input>
      </ion-item>
      <br>
      <ion-button color="success" href="/login">Enviar Voto</ion-button>
    </div>
  </template>
  
  <script lang="ts">
  import { IonInput, IonItem, IonLabel, IonButton } from '@ionic/vue';
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'LoginForm',
    data(){
    return{
      input: {
          voto: '',
          email: '',
          nome: '',
          cidade: '',
          estado: '',
      }
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
    top: 15%;
    padding-left: 30px;
    padding-right: 30px;
  }
  </style>
  