<template>
  <div id="container">
    <ion-item>
      <ion-label position="stacked">
        E-Mail
      </ion-label>
      <ion-input type="email" placeholder="E-mail" v-model="input.email"></ion-input>
    </ion-item>
    <br>
    <ion-item>
      <ion-label position="stacked">
        Senha
      </ion-label>
      <ion-input type="password" placeholder="*****" v-model="input.voto"></ion-input>
    </ion-item>
    <br>
    <ion-button color="success">Entrar</ion-button>
  </div>
</template>

<script lang="ts">
import { IonInput, IonItem, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginForm',
  data(){
    return{
      input: {
          email: '',
          voto: '',
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
    top: 30%;
    padding-left: 30px;
    padding-right: 30px;
}
</style>
