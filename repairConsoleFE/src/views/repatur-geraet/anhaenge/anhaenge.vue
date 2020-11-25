<template>
  <div>
    <v-menu>
      <template v-slot:activator="{ on, attrs }">
        <v-btn text title="Datei oder Link speichern" v-bind="attrs" v-on="on">
          <v-icon>mdi-link-variant-plus</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item>
          <v-btn text @click="dokumentInputMode = true">Dokument</v-btn>
        </v-list-item>

        <v-list-item>
          <v-btn text @click="linkInputMode = true">Link</v-btn>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-dialog v-model="linkInputMode">
      <linky :repair-device-id="repairDevice.id" @close="linkInputMode = false" />
    </v-dialog>

    <v-dialog v-model="dokumentInputMode">
      <dokument :repair-device-id="repairDevice.id" @close="dokumentInputMode = false" />
    </v-dialog>
  </div>
</template>

<script>
  import Dokument from "./dokument";
  import Link from "./link";

  export default {
    components: {
      dokument: Dokument,
      linky: Link
    },

    props: {
      repairDevice: {
        required: true,
        type: Object
      }
    },

    data() {
      return {
        dokumentInputMode: false,
        linkInputMode: false
      };
    }
  };
</script>
