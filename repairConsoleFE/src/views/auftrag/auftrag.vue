<template>
  <v-card>
    <v-card-title class="headline pl-5 pt-7">Auftrag Nr.{{ auftrag.id }}</v-card-title>

    <v-list>
      <auftrag-props :auftragProps="auftrag" />
    </v-list>
    <v-card-actions>
      <v-spacer />

      <v-btn outlined color="red darken-1" text @click="close" class="text-capitalize">
        Informationen Schliesen
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  import AuftragProps from "./auftrag-props.vue";

  export default {
    components: {
      "auftrag-props": AuftragProps
    },

    props: {
      auftrag: {
        required: true,
        type: Object
      }
    },

    data() {
      return {};
    },

    methods: {
      close() {
        this.$emit("close");
      }
    }
  };
</script>
