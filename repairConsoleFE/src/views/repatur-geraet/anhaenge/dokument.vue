<template>
  <v-card>
    <v-card-title>Neues Dokument</v-card-title>
    <v-container>
      <v-row>
        <v-col>
          <v-row>
            <v-file-input label="File input" v-model="file" outlined dense show-size counter />
          </v-row>

          <v-row justify="end">
            <v-btn outlined color="red" class="text-capitalize" @click="$emit('close')">
              Abbrechen
            </v-btn>

            <v-btn
              color="green lighten-1 white--text"
              depressed
              class="ml-4 text-capitalize"
              @click="upload"
            >
              Hinzufügen
            </v-btn>
          </v-row>
        </v-col>
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
      return {
        file: undefined
      };
    },

    methods: {
      upload() {
        const formData = new FormData();

        formData.append("files", this.file);

        this.$axios
          .post(this.$api + `/repairDevices/${this.repairDeviceId}/document`, formData)
          .then(resp => {
            console.trace(resp);

            if (resp.status == 200) {
              this.$emit("close");

              this.$store.dispatch("getUserDevices");
            }
          });
      }
    }
  };
</script>

<style></style>
