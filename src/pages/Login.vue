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
              <label for="">E-mail</label>
              <q-input
                placeholder="E-mail"
                outlined
                square
                dense
                class="q-pb-md"
                v-model="email"
              />
              <label for="">Senha</label>
              <q-input
                placeholder="Senha"
                outlined
                square
                dense
                v-model="password"
                type="password"
              />
              <q-btn
                color="primary"
                class="full-width no-border-radius q-my-lg	"
                label="Entrar"
                @click="logar()"
                :loading="logando"
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
import LoginHelper from "../helpers/login";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      logando: false
    };
  },
  methods: {
    logar() {
      this.logando = true;
      let logHelper = new LoginHelper();
      logHelper
        .login(this.email, this.password)
        .then(() => {
          this.$router.push("/");
        })
        .catch(err => {
          this.$q.notify({
            message: "Ocorreu um erro ao fazer login",
            caption: err.statusText
          });
        })
        .finally(() => {
          this.logando = false;
        });
    }
  }
};
</script>
