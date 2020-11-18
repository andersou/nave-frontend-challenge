<template>
  <q-page class="q-px-lg row justify-center">
    <div class="q-mt-xl" style="width: 800px; max-width:80vw">
      <div class="row items-center">
        <q-btn
          size="1.5rem"
          flat
          round
          color="primary"
          icon="keyboard_arrow_left"
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
      <div class="row items-right">
        <q-btn></q-btn>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {};
</script>

<style></style>
