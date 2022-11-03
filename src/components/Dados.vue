<template>
    <div id="container">
      <ion-button @click="getVoto" color="success">Dados Listados</ion-button>
      <ion-button color="success" href="/sintetico">Dados Sinteticos</ion-button>
      <ion-item>
        <div v-for="voto in voto" :key="voto.id">
              <h3>{{voto.id}}.{{voto.voto}}</h3>
              <p>Nome: {{voto.nome}}</p>
              <p>E-mail: {{voto.email}}</p>
              <p>Cidade: {{voto.cidade}}</p>
              <p>Estado: {{voto.estado}}</p>
              <br>
            </div>
      </ion-item>
    </div>
  </template>
  
  <script>
  import { IonItem, IonButton } from '@ionic/vue';
  import { defineComponent } from 'vue';
  import router from '@/router';
  
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
    },
    methods:{
    chageRoute(route){
      router.push(route);
    },
    getVoto(){
      axios.get("http://localhost:8000/consulta")
      .then((response) => {
        console.log(response.data);
        this.voto = response.data;
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