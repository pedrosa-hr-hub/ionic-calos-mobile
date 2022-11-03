<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>VOTO</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <VotoForm/>
      </ion-content>
    </ion-page>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
  import VotoForm from '@/components/VotoForm.vue';
  
  export default  defineComponent({
    name: 'VotoPage',
    components: { VotoForm, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
  });
  </script>
  