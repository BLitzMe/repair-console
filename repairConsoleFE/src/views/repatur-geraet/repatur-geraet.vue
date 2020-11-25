<template>
  <v-card>
    <v-card-title>
      Reparaturanleitung
      <v-spacer />

      <anhaenge :repair-device="repairDevice" />
    </v-card-title>

    <v-card-text>
      <v-list>
        <v-container>
          <v-row>
            <v-list-item
              class="elevation-1"
              v-for="(prop, propName) in transformedRepairDevice"
              :key="propName"
            >
              <v-col cols="4">{{ propName }}</v-col>

              <v-col cols="8">
                <p v-if="prop == null">Nicht vorhanden</p>

                <anleitungen
                  :anleitungen="prop"
                  :name="propName"
                  v-else-if="propName == 'Dokumente' || propName == 'Linke'"
                />

                <p v-else>{{ prop }}</p>
              </v-col>
            </v-list-item>
          </v-row>
        </v-container>
      </v-list>

      <v-card-actions class="justify-end">
        <v-btn outlined color="red  lighten-1 " @click="close" class="text-capitalize">
          Abbrechen
        </v-btn>
      </v-card-actions>
    </v-card-text>
  </v-card>
</template>

<script>
  import Anhaenge from "./anhaenge/anhaenge.vue";
  import Anleitungen from "./anleitung/anleitungen";

  export default {
    components: {
      anhaenge: Anhaenge,
      anleitungen: Anleitungen
    },

    props: {
      repairDevice: {
        type: Object,
        required: true
      }
    },

    computed: {
      transformedRepairDevice() {
        let props = {
          "Name des Geräts": this.repairDevice.name,
          Notizen: this.repairDevice.notes,
          Dokumente: this.repairDevice.documents,
          Linke: this.repairDevice.links
        };
        return props;
      }
    },

    methods: {
      close() {
        this.$emit("close");
      }
    }
  };
</script>
