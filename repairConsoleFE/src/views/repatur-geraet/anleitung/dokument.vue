<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        <v-btn text class="text-capitalize" @click="openFile">{{ dokument.fileName }}</v-btn>
      </v-col>
      <v-col cols="4">
        <v-btn text class="mr-9 " @click="sendRating">
          <v-rating hover small length="5" v-model="rating" />
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    props: {
      dokument: {
        required: true,
        type: Object
      }
    },

    data() {
      return {
        rating: 0
      };
    },

    methods: {
      sendRating() {
        console.log("this shit is not available");
      },

      openFile() {
        this.$axios.get(this.$api + `/repairDevices/file/${this.dokument.id}`).then(response => {
          console.log(response);
          const blob = new Blob([response.data]);
          const link = document.createElement("a");

          link.href = window.URL.createObjectURL(blob);

          link.download = "newfile.pdf";

          link.click();
        });
      }
    }
  };
</script>
