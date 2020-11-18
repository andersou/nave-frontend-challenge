<template>
  <q-page class="q-px-lg row justify-center">
    <div class="q-mt-xl" style="width: 700px; max-width:80vw">
      <div class="row items-center">
        <q-btn
          size="1.5rem"
          padding="0"
          flat
          round
          color="primary"
          icon="keyboard_arrow_left"
          to="/"
        />
        <span class="q-pl-md text-h5">Adicionar Naver</span>
      </div>
      <div class="row q-gutter-md q-my-xs">
        <div class="col">
          <label class="text-bold" for="">Nome</label>
          <q-input placeholder="Nome" outlined square dense />
        </div>
        <div class="col">
          <label class="text-bold" for="">Cargo</label>
          <q-input placeholder="Cargo" outlined square dense />
        </div>
      </div>
      <div class="row q-gutter-md q-my-xs">
        <div class="col">
          <label class="text-bold" for="">Idade</label>
          <q-input placeholder="Idade" outlined square dense />
        </div>
        <div class="col">
          <label class="text-bold" for="">Tempo de empresa</label>
          <q-input placeholder="Tempo de empresa" outlined square dense />
        </div>
      </div>
      <div class="row q-gutter-md q-my-xs">
        <div class="col">
          <label class="text-bold" for="">Projetos que participou</label>
          <q-input
            placeholder="Projetos que participou"
            outlined
            square
            dense
          />
        </div>
        <div class="col">
          <label class="text-bold" for="">URL da foto do Naver</label>
          <q-input placeholder="URL da foto do Nave" outlined square dense />
        </div>
      </div>
      <div class="row justify-end">
        <q-btn
          color="primary"
          padding="xs 4rem"
          class="no-border-radius q-my-sm"
          dense
          label="Salvar"
          @click="dialogSaveSuccess = true"
          no-caps
        />
      </div>
    </div>
    <q-dialog v-model="dialogSaveSuccess" square>
      <q-card style="width: 600px; max-width: 80vw;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">
            Naver {{ updating ? "atualizado" : "criado" }}
          </div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="q-pb-lg">
          Naver {{ updating ? "atualizado" : "criado" }} com sucesso!
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  name: "NaverForm",
  data() {
    return {
      dialogSaveSuccess: false,
      updating: false
    };
  }
};
</script>

<style></style>
