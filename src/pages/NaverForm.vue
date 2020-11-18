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
        <span class="q-pl-md text-h5"
          >{{ updatingMode ? "Editar" : "Adicionar" }} Naver</span
        >
      </div>
      <div class="row q-gutter-md q-my-xs">
        <div class="col-xs-12 col-sm ">
          <label class="text-bold" for="">Nome</label>
          <q-input
            ref="name"
            v-model="naver.name"
            placeholder="Nome"
            outlined
            square
            dense
            :rules="[val => !!val || 'Campo obrigatório']"
          />
        </div>
        <div class="col-sm col-xs-12">
          <label class="text-bold" for="">Cargo</label>
          <q-input
            ref="job_role"
            v-model="naver.job_role"
            placeholder="Cargo"
            outlined
            square
            dense
            :rules="[val => !!val || 'Campo obrigatório']"
          />
        </div>
      </div>
      <div class="row q-gutter-md q-my-xs">
        <div class="col-sm  col-xs-12">
          <label class="text-bold" for="">Data de nascimento</label>

          <q-input
            ref="birthdate"
            v-model="dataDeNascimento"
            placeholder="Data de nascimento"
            type="date"
            outlined
            square
            dense
            :rules="[val => !!val || 'Campo obrigatório']"
          />
        </div>
        <div class="col-sm  col-xs-12">
          <label class="text-bold" for="">Data de admissão</label>
          <q-input
            ref="admission_date"
            v-model="dataAdmissao"
            type="date"
            placeholder="Data de admissão"
            outlined
            square
            dense
            :rules="[val => !!val || 'Campo obrigatório']"
          />
        </div>
      </div>
      <div class="row q-gutter-md q-my-xs">
        <div class="col-sm  col-xs-12">
          <label class="text-bold" for="">Projetos que participou</label>
          <q-input
            ref="project"
            placeholder="Projetos que participou"
            outlined
            square
            dense
            v-model="naver.project"
            :rules="[val => !!val || 'Campo obrigatório']"
          />
        </div>
        <div class="col-sm col-xs-12">
          <label class="text-bold" for="">URL da foto do Naver</label>
          <q-input
            ref="url"
            placeholder="URL da foto do Nave"
            outlined
            square
            dense
            v-model="naver.url"
            :rules="[val => !!val || 'Campo obrigatório']"
          />
        </div>
      </div>
      <div class="row justify-end">
        <q-btn
          color="primary"
          padding="xs 4rem"
          class="no-border-radius q-my-sm"
          dense
          label="Salvar"
          @click="saveOrUpdate"
          :loading="saving"
          no-caps
        />
      </div>
    </div>
    <q-dialog v-model="dialogSaveSuccess" square>
      <q-card style="width: 600px; max-width: 80vw;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">
            Naver {{ updatingMode ? "atualizado" : "criado" }}
          </div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="q-pb-lg">
          Naver {{ updatingMode ? "atualizado" : "criado" }} com sucesso!
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { mapState, mapActions } from "vuex";
import moment from "moment";
import { formDateComputed } from "../helpers/dateUtils";

export default {
  name: "NaverForm",
  data() {
    return {
      dialogSaveSuccess: false,
      updatingMode: false,
      saving: false,
      naver: {
        job_role: "",
        admission_date: "",
        birthdate: "",
        project: "",
        name: "",
        url: ""
      }
      /**naver: {
        job_role: "Desenvolvedor",
        admission_date: "19/08/2018",
        birthdate: "12/04/1992",
        project: "Project Backend Test",
        name: "John Doe",
        url: "https://hackernoon.com/hn-images/1*Y0UYuGcFGSCfs5Eexafq6A.png"
      } */
    };
  },
  computed: {
    dataAdmissao: formDateComputed("admission_date"),
    dataDeNascimento: formDateComputed("birthdate"),
    ...mapState({ navers: state => state.navers.navers })
  },
  methods: {
    resetFormValidation() {
      this.$refs.name.resetValidation();
      this.$refs.job_role.resetValidation();
      this.$refs.birthdate.resetValidation();
      this.$refs.admission_date.resetValidation();
      this.$refs.project.resetValidation();
      this.$refs.url.resetValidation();
    },
    formValidation() {
      this.$refs.name.validate();
      this.$refs.job_role.validate();
      this.$refs.birthdate.validate();
      this.$refs.admission_date.validate();
      this.$refs.project.validate();
      this.$refs.url.validate();

      if (
        this.$refs.name.hasError ||
        this.$refs.job_role.hasError ||
        this.$refs.birthdate.hasError ||
        this.$refs.admission_date.hasError ||
        this.$refs.project.hasError ||
        this.$refs.url.hasError
      ) {
        return false;
      }
      return true;
    },
    clearFields() {
      this.naver = {
        job_role: "",
        admission_date: "",
        birthdate: "",
        project: "",
        name: "",
        url: ""
      };
      setTimeout(() => {
        this.resetFormValidation();
      }, 0);
    },
    saveOrUpdate() {
      if (!this.formValidation()) return;
      this.saving = true;
      if (this.naver.id) {
        this.atualizarNaver(this.naver)
          .then(res => {
            console.log(res);
            if (res.status == 200) this.dialogSaveSuccess = true;
            else
              this.$q.notify({
                message: "Ocorreu um erro ao atualizar",
                caption: res.statusText
              });
          })
          .finally(() => {
            this.saving = false;
          });
        this.saving = true;
      } else {
        this.criarNaver(this.naver)
          .then(res => {
            if (res.status == 200) {
              this.dialogSaveSuccess = true;
              this.clearFields();
              //this.$router.go("/");
            } else {
              this.$q.notify({
                message: "Ocorreu um erro ao criar",
                caption: res.statusText
              });
            }
          })
          .finally(() => {
            this.saving = false;
          });
      }
    },

    ...mapActions({
      criarNaver: "navers/criarNaver",
      atualizarNaver: "navers/atualizarNaver",
      listarNavers: "navers/listarNavers"
    })
  },
  mounted() {
    let id = this.$route.params.id;
    if (id) {
      this.updatingMode = true;
      this.listarNavers().then(() => {
        this.naver = Object.assign(
          {},
          this.navers.find(naver => naver.id == id)
        );
        //forço a atualização dos formatos
        this.dataAdmissao = this.naver.admission_date;
        this.dataDeNascimento = this.naver.birthdate;
      });
    } else {
      this.dataAdmissao = moment().toISOString();
      this.dataDeNascimento = moment().toISOString();
    }
  }
};
</script>

<style></style>
