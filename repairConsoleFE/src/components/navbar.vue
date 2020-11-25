<template>
  <v-app-bar fixed color="#fcb69f" dark src="../assets/repairPic.jpg" app>
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
      ></v-img>
    </template>

    <v-toolbar-title>Repair Console</v-toolbar-title>

    <v-spacer />
    <template v-slot:extension>
      <v-tabs align-with-title>
        <v-tab v-for="link in links" :key="link.text" router :to="link.route">
          <v-icon class="mr-2">{{ link.icon }}</v-icon>

          {{ link.text }}
        </v-tab>
      </v-tabs>
      <transition name="fade">
        <v-text-field
          @keyup="filterDevices(filterTerm)"
          v-model="filterTerm"
          v-if="searchBar"
          width="300"
        />
      </transition>
      <v-btn icon>
        <v-icon @click="searchBar = !searchBar">mdi-magnify</v-icon>
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script>
  import { mapMutations } from "vuex";

  export default {
    data() {
      return {
        filterTerm: "",
        drawer: false,
        searchBar: false,
        links: [{ icon: "mdi-briefcase-outline", text: "Aufträge", route: "/" }]
      };
    },

    methods: {
      ...mapMutations(["changeCurrentDevice"]),

      filterDevices() {
        this.changeCurrentDevice(this.filterTerm);
      }
    }
  };
</script>

<style lang="scss" scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
