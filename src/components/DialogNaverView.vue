<template>
  <q-dialog square v-model="show">
    <q-card style="width: 800px; max-width: 80vw;" class="relative">
      <div class="float-right q-pa-sm">
        <q-btn icon="close" flat round dense @click="$emit('close')" />
      </div>
      <q-card-section :horizontal="$q.screen.gt.xs">
        <q-img
          :src="naver.url"
          spinner-color="black"
          style="filter: grayscale(1);"
          :ratio="1"
          class="col-6"
        />

        <q-card-section class="full-width ">
          <div class="row full-width">
            <div class="col">
              <p class="text-h6 q-mb-sm">{{ naver.name }}</p>
              <p>{{ naver.job_role }}</p>
              <p class="text-subtitle2 q-mb-sm">
                Idade
              </p>
              <p class="text-body2">
                {{ idade }}
              </p>
              <p class="text-subtitle2 q-mb-sm">
                Tempo de empresa
              </p>
              <p class="text-body2">
                {{ tempoDeEmpresa }}
              </p>
              <p class="text-subtitle2 q-mb-sm">
                Projetos que participou
              </p>
              <p class="text-body2">
                {{ naver.project }}
              </p>
            </div>
          </div>
          <div class="absolute-bottom q-pa-md">
            <q-btn
              @click="$emit('delete')"
              padding="5px"
              flat
              round
              color="primary"
              icon="delete"
            />
            <q-btn
              padding="5px"
              flat
              round
              color="primary"
              icon="edit"
              @click="editNaver"
            />
          </div>
        </q-card-section>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import moment from "moment";
export default {
  props: ["show", "naver"],
  methods: {
    editNaver() {
      this.$router.push({ path: `/form/${this.naver.id}` });
    }
  },
  computed: {
    idade() {
      return moment
        .duration(moment().diff(this.naver.birthdate))
        .locale("pt")
        .humanize();
    },
    tempoDeEmpresa() {
      //window.mom = moment.duration(moment().diff(this.naver.admission_date));
      return moment
        .duration(moment().diff(this.naver.admission_date))
        .locale("pt")
        .humanize();
    }
  }
};
</script>

<style></style>
