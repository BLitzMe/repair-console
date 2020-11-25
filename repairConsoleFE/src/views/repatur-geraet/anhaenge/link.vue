<template>
  <v-card>
    <v-card-title>Neue Link</v-card-title>

    <v-container>
      <v-row>
        <v-col cols="8">
          <v-text-field v-model="linkInput" label="Link" outlined clearable />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field v-model="description" label="Beschreibung" outlined clearable />
        </v-col>
      </v-row>

      <v-row justify="end">
        <v-btn outlined color="red  lighten-1 " @click="close" class="text-capitalize">
          Abbrechen
        </v-btn>
        <v-btn
          depressed
          @click="sendLinkDetails"
          class="ml-4 text-capitalize"
          color="green lighten-1 white--text"
        >
          Speichern
        </v-btn>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
  export default {
    props: {
      repairDeviceId: {
        required: true,
        type: Number
      }
    },

    data() {
      return { linkInput: "", description: "" };
    },

    methods: {
      sendLinkDetails() {
        this.$axios
          .post(this.$api + `/link`, {
            uri: this.linkInput,
            repairDeviceId: this.repairDeviceId,
            description: this.description
          })
          .then(() => {
            this.$store.dispatch("getUserDevices");
            this.close();
          });
      },

      close() {
        this.$emit("close");
      }
    }
  };
</script>
