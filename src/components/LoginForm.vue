<template>
  <div id="container">
    <ion-item>
      <ion-label position="stacked">
        E-Mail
      </ion-label>
      <ion-input type="email" placeholder="E-mail"></ion-input>
    </ion-item>
    <ion-item>
      <ion-label position="stacked">
        Senha
      </ion-label>
      <ion-input type="password" placeholder="*****"></ion-input>
    </ion-item>
  </div>
</template>

<script lang="ts">
import { IonInput, IonItem, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginForm',
});
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 30%;
}
</style>
