<template>
  <q-page class="q-px-md">
    <div class="row q-pt-xl">
      <h4 class="q-my-none">Navers</h4>
      <q-space></q-space>
      <q-btn
        color="primary"
        padding="xs xl"
        class="no-border-radius"
        dense
        label="Adicionar Naver"
        no-caps
      />
    </div>

    <q-scroll-area horizontal style="height: calc(100vh - 140px); width: 100%;">
      <div class="row no-wrap">
        <div
          v-for="n in 10"
          :key="n"
          style="width: 25vw"
          class="q-pr-lg q-pt-md"
        >
          <q-img
            src="https://s3-us-east-2.amazonaws.com/maryville/wp-content/uploads/2019/06/25163706/Applications-Software-Developers-1-500x333.jpg"
            spinner-color="white"
            style="filter: grayscale(1);"
            :ratio="1"
          />
          <br />
          <p class="q-mt-sm q-mb-none text-weight-bold">John Doe</p>
          <p class="q-mb-none">Software Developer</p>

          <q-btn
            @click="dialogConfirm = true"
            padding="5px"
            flat
            round
            color="primary"
            icon="delete"
          />
          <q-btn
            @click="dialogDeleteSuccess = true"
            padding="5px"
            flat
            round
            color="primary"
            icon="edit"
          />
        </div>
      </div>
    </q-scroll-area>
    <q-dialog v-model="dialogNaverView">
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section>
          <div class="text-h6">Medium</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Click/Tap on the backdrop.
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="dialogDeleteSuccess" square>
      <q-card style="width: 600px; max-width: 80vw;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Naver Excluído</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="q-pb-lg">
          Naver Excluído com sucesso!
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="dialogConfirm" persistent>
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section class="row items-center">
          <q-avatar icon="signal_wifi_off" color="primary" text-color="white" />
          <span class="q-ml-sm"
            >You are currently not connected to any network.</span
          >
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancelar" color="primary" v-close-popup />
          <q-btn flat label="Deletar" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>
<style lang="stylus"></style>
<script>
export default {
  name: "PageIndex",
  data() {
    return {
      dialogConfirm: false,
      dialogDeleteSuccess: false,
      dialogNaverView: false
    };
  }
};
</script>
