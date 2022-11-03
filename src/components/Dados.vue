<template>
    <div id="container">
      <ion-button color="success">Dados Listados</ion-button>
      <ion-button color="success" href="/sintetico">Dados Sinteticos</ion-button>
      <ion-item>
      </ion-item>
    </div>
  </template>
  
  <script>
  import { IonItem, IonButton } from '@ionic/vue';
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'DadosComponent',
    components:{
      IonButton,
      IonItem
    },
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