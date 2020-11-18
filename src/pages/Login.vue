<template>
  <q-layout>
    <q-page-container>
      <q-page
        ><div class=" row ">
          <q-card
            square
            bordered
            flat
            class="my-card fixed-center relative-position"
            style="width: 340px"
          >
            <q-card-section>
              <img
                src="../assets/logo-white.png"
                style="filter: invert(1)"
                class="q-pa-lg nave-logo"
              />
              <br />
              <label for="">Nome</label>
              <q-input
                placeholder="Nome"
                outlined
                square
                dense
                class="q-pb-md"
              />
              <label for="">Senha</label>
              <q-input placeholder="Senha" outlined square dense />
              <q-btn
                color="primary"
                class="full-width no-border-radius q-my-lg	"
                label="Entrar"
              />
            </q-card-section>
          </q-card>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<style lang="stylus" scoped>
.nave-logo
  position:relative;
  left: 50%;
  transform: translateX(-50%);
</style>
<script>
export default {
  name: "PageIndex"
};
</script>
