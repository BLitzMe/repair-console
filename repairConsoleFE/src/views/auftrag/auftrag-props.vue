<template>
  <v-container>
    <v-row>
      <h2 class="ml-3 mb-5">Mehr Information</h2>

      <v-col cols="12">
        <v-list-item
          class="elevation-1"
          v-for="(prop, propName) in transformedProps"
          :key="propName"
        >
          <v-list-item-content>
            <v-row id="auftragProp">
              <v-col cols="4">
                {{ propName }}
              </v-col>

              <v-col cols="8">
                <p v-if="prop != null && propName == 'Repaturgerät'">
                  Reparaturanleitung vorhanden
                  <v-btn
                    text
                    class="ml-3 text-capitalize"
                    depressed
                    color="green white--text"
                    @click="reparaturGeraetDialog = true"
                  >
                    Details Anzeigen
                    <v-icon class="ml-1">mdi-arrow-right-circle</v-icon>
                  </v-btn>
                </p>

                <v-btn
                  v-else-if="propName == 'Repaturgerät'"
                  text
                  @click="newReparaturGeraetDialog = true"
                  class="text-capitalize"
                >
                  Antleitung Hinzufügen

                  <v-icon class="ml-3">mdi-plus-circle-outline</v-icon>
                </v-btn>

                <p v-else>{{ prop }}</p>
              </v-col>
            </v-row>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>

    <v-dialog v-model="reparaturGeraetDialog">
      <repatur-geraet device :repair-device="getAnleitung" @close="reparaturGeraetDialog = false" />
    </v-dialog>

    <v-dialog v-model="newReparaturGeraetDialog">
      <neue-repatur-geraet
        @close="newReparaturGeraetDialog = false"
        :userDeviceId="auftragProps.id"
      />
    </v-dialog>
  </v-container>
</template>

<script>
  import NeueRepaturGerät from "../repatur-geraet/neue-repatur-geraet.vue";
  import ReparaturGerät from "../repatur-geraet/repatur-geraet.vue";

  export default {
    components: {
      "neue-repatur-geraet": NeueRepaturGerät,
      "repatur-geraet": ReparaturGerät
    },

    props: {
      auftragProps: {
        required: true,
        type: Object
      }
    },

    data() {
      return {
        newReparaturGeraetDialog: false,
        reparaturGeraetDialog: false
      };
    },

    computed: {
      transformedProps() {
        return this.getTransformedProps();
      },

      getAnleitung() {
        return this.auftragProps.repairDevice;
      }
    },

    methods: {
      getTransformedProps() {
        let props = { ...this.auftragProps };

        props = {
          Alter: props.age,
          Kategorie: props.category,
          Defekt: props.defect,
          Lieferdatum: props.deliveryDay,
          Beschreibung: props.description,
          Hersteller: props.manufacturer,
          Modell: props.model,
          Netzteil: props.powersupply,
          Repaturgerät: props.repairDevice,
          Seirennümmer: props.serialNumber
        };

        return props;
      }
    }
  };
</script>

<style lang="scss" scoped>
  #auftragProp:hover {
    cursor: pointer;
  }
</style>
