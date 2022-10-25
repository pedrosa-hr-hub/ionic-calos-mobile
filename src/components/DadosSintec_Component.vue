<template>
    <div id="container">
      <ion-button color="success" href="/dados">Dados Listados</ion-button>
      <ion-item>
      </ion-item>
    </div>
  </template>
  
  <script lang="ts">
  import { IonInput, IonItem, IonLabel } from '@ionic/vue';
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'DadosSintecComponent',
    data(){
    return{
      voto: [],
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
      top: 7%;
      padding-left: 30px;
      padding-right: 30px;
  }
  </style>  