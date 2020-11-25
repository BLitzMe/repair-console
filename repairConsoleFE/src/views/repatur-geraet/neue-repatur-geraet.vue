<template>
  <v-card>
    <v-card-title>Neue Anleitung</v-card-title>

    <v-container>
      <v-row>
        <v-col cols="12">
          <h3>Name</h3>

          <v-text-field v-model="name" placeholder="Geben Sie der Name Ein" />
        </v-col>
      </v-row>

      <v-row class="my-4">
        <v-col cols="12">
          <v-container>
            <v-row class="pb-2">
              <h3>Notiz</h3>

              <v-spacer />
            </v-row>
            <v-row>
              <v-textarea v-model="notes" placeholder="Geben Sie Notizen Ein" outlined />
            </v-row>
          </v-container>
        </v-col>
      </v-row>

      <v-card-actions class="justify-end pr-0">
        <v-btn outlined color="red  lighten-1 " @click="close" class="text-capitalize">
          Abbrechen
        </v-btn>

        <v-btn
          depressed
          @click="sendDeviceDetails"
          class="ml-4 text-capitalize"
          color="green lighten-1 white--text"
        >
          Speichern
        </v-btn>
      </v-card-actions>
    </v-container>
  </v-card>
</template>

<script>
  import axios from "axios";
  import https from "https";
  import { mapGetters } from "vuex";

  export default {
    props: {
      userDeviceId: {
        required: true,
        type: Number
      }
    },

    data() {
      return {
        name: null,
        notes: null
      };
    },

    methods: {
      ...mapGetters(["api"]),

      close() {
        this.$emit("close");
        this.name = null;
        this.notes = null;
      },

      sendDeviceDetails() {
        axios
          .post(
            this.$api + "/repairdevices",
            { name: this.name, notes: this.notes },
            {
              "Content-Type": "application/json",
              httpAgent: new https.Agent({
                rejectUnauthorized: false
              })
            }
          )
          .then(response => {
            this.patchDeviceId(response.data.id);
          })
          .catch(err => {
            console.log(err);
          });
      },

      patchDeviceId(repairDeviceId) {
        axios
          .patch(this.$api + `/devices/${this.userDeviceId}/setRepairDevice?id=${repairDeviceId}`, {
            httpAgent: new https.Agent({
              rejectUnauthorized: false
            })
          })
          .then(() => {
            this.$store.dispatch("getUserDevices");
            this.close();
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  };
</script>
