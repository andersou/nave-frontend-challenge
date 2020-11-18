<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="text-primary bg-white q-pt-md">
        <router-link to="/" style="display: inline-flex">
          <img style="filter: invert(1)" src="../assets/logo-white.png" />
        </router-link>
        <q-space />
        <q-btn @click="logout" flat label="Sair" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import LoginHelper from "../helpers/login";
export default {
  name: "MainLayout",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    logout() {
      console.log("logout");
      let logHelper = new LoginHelper();
      logHelper.logout();
      window.lh = logHelper;
      this.$router.go("/login");
    }
  }
};
</script>
