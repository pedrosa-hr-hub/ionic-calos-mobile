<template>
    <div id="container">
      <ion-button color="success" href="/dados">Dados Listados</ion-button>
      <ion-button @click="getVotoPercent" color="success"> Ver Dados</ion-button>
      <ion-item>
        <div>
            <div v-for="percent in percent" :key="percent.voto">
              <h3>{{percent.voto}}</h3>
              <p>Quantidade: {{percent.qtd}}</p>
              <br>
            </div>
          </div>
      </ion-item>
    </div>
  </template>
  
  <script>
  import { IonItem, IonButton } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import axios from 'axios';
  
  export default defineComponent({
    name: 'DadosSintecComponent',
    components:{
      IonItem,
      IonButton
    },
    data(){
    return{
      percent: [],
    }
  },
  methods:{
    getVotoPercent(){
      axios.get("http://localhost:8000/sintect")
      .then((response) => {
        console.log(response.data);
        this.percent = response.data;
      })
      .catch((error) => {
        console.log(error);
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
      top: 7%;
      padding-left: 30px;
      padding-right: 30px;
  }
  </style>  