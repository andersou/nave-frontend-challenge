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
      <div class="row no-wrap q-gutter-md">
        <div
          v-for="n in 4"
          :key="n"
          style="width: calc((100vw - 80px) / 4)"
          class="q-pt-md "
        >
          <q-img
            src="https://s3-us-east-2.amazonaws.com/maryville/wp-content/uploads/2019/06/25163706/Applications-Software-Developers-1-500x333.jpg"
            spinner-color="white"
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
    <q-dialog square v-model="dialogNaverView">
      <q-card style="width: 800px; max-width: 80vw;">
        <q-card-section horizontal>
          <q-img
            src="https://s3-us-east-2.amazonaws.com/maryville/wp-content/uploads/2019/06/25163706/Applications-Software-Developers-1-500x333.jpg"
            spinner-color="white"
            style="filter: grayscale(1);"
            :ratio="1"
            @click="dialogNaverView = true"
            class="col-6"
          />

          <q-card-section class="full-width ">
            <div class="row full-width">
              <div class="col">
                <p class="text-h6 q-mb-sm">John Doe</p>
                <p>Software Developer</p>
                <p class="text-subtitle2 q-mb-sm">
                  Idade
                </p>
                <p class="text-body2">
                  24 anos
                </p>
                <p class="text-subtitle2 q-mb-sm">
                  Tempo de empresa
                </p>
                <p class="text-body2">
                  24 anos
                </p>
                <p class="text-subtitle2 q-mb-sm">
                  Projetos que participou
                </p>
                <p class="text-body2">
                  24 anos
                </p>
              </div>
            </div>
            <div class="absolute-bottom q-pa-md">
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
          </q-card-section>
          <div class="float-right q-pa-sm">
            <q-btn icon="close" flat round dense v-close-popup />
          </div>
        </q-card-section>
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
<style lang="stylus"></style>
<script>
export default {
  name: "PageIndex",
  data() {
    return {
      dialogConfirm: false,
      dialogDeleteSuccess: false,
      dialogNaverView: true
    };
  }
};
</script>
