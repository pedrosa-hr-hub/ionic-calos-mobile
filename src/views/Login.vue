<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>VOTO</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <LoginForm/>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import LoginForm from '@/components/LoginForm.vue';

export default  defineComponent({
  name: 'LoginPage',
  components: { LoginForm, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
});
</script>
