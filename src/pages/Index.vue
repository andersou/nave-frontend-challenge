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
        to="/create"
      />
    </div>

    <q-scroll-area horizontal style="height: calc(100vh - 140px); width: 100%;">
      <div class="row no-wrap q-gutter-md">
        <div v-for="n in 4" :key="n" class="q-pt-md naver-card">
          <q-img
            src="https://s3-us-east-2.amazonaws.com/maryville/wp-content/uploads/2019/06/25163706/Applications-Software-Developers-1-500x333.jpg"
            spinner-color="black"
            style="filter: grayscale(1);"
            :ratio="1"
            @click="dialogNaverView = true"
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
          <q-btn padding="5px" flat round color="primary" icon="edit" />
        </div>
      </div>
    </q-scroll-area>
    <dialog-naver-view
      :show="dialogNaverView"
      :naver="naverSelecionado"
      @close="dialogNaverView = false"
      @delete="
        dialogNaverView = false;
        dialogDeleteSuccess = true;
      "
    />
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
    <q-dialog square v-model="dialogConfirm" persistent>
      <q-card style="width: 470px; max-width: 80vw;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Excluir Naver</div>
        </q-card-section>
        <q-card-section class="">
          <span class="">Tem certeza que deseja excluir esse Naver?</span>
        </q-card-section>

        <q-card-actions align="right" class="q-pr-md q-pb-md">
          <q-btn
            outline
            class="no-border-radius q-mr-sm"
            label="Cancelar"
            color="primary"
            v-close-popup
            padding="xs xl"
          />
          <q-btn
            class="no-border-radius"
            label="Excluir"
            color="primary"
            @click="
              dialogConfirm = false;
              dialogDeleteSuccess = true;
            "
            padding="xs xl"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>
<style lang="stylus">
.naver-card
  width: calc((100vw - 80px) / 4)
</style>
<script>
import dialogNaverView from "../components/DialogNaverView";
export default {
  name: "PageIndex",
  data() {
    return {
      dialogConfirm: false,
      dialogDeleteSuccess: false,
      dialogNaverView: false,
      naverSelecionado: ""
    };
  },
  components: {
    dialogNaverView
  }
};
</script>
