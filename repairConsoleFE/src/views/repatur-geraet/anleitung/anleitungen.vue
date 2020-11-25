<template>
  <v-expansion-panels flat>
    <v-expansion-panel>
      <v-expansion-panel-header>{{ anleitungen.length }} {{ name }}</v-expansion-panel-header>
      <v-expansion-panel-content>
        <div v-for="anleitung in anleitungen" :key="anleitung.id">
          <dokument :dokument="anleitung" v-if="name == 'Dokumente'" />

          <linky :link="anleitung" v-if="name == 'Linke'" />
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
  import Link from "./link";
  import Dokument from "./dokument";

  export default {
    components: {
      dokument: Dokument,
      linky: Link
    },

    props: {
      anleitungen: {
        required: true,
        type: Array
      },

      name: {
        required: true,
        type: String
      }
    }
  };
</script>

<style></style>
