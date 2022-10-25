<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>VOTO</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <Dados/>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
  import Dados from '@/components/Dados.vue';
  
  export default  defineComponent({
    name: 'DadosPage',
    components: { Dados, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
  });
  </script>
  