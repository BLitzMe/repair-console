<template>
  <v-container>
    <v-row>
      <v-col cols="8">
        {{ link.uri }}
      </v-col>

      <v-col cols="4">
        <v-btn text :title="`${rating} sterne`" class="mr-9" @click="sendRating">
          <v-rating hover small length="5" v-model="link.averageRating" />
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    props: {
      link: {
        required: true,
        type: Object
      }
    },

    data() {
      return {
        rating: parseInt(this.link.averageRating)
      };
    },

    methods: {
      sendRating() {
        this.$axios
          .post(this.$api + `/link/${this.link.id}/rating?value=${this.link.averageRating}`)
          .then(() => {
            this.$store.dispatch("getUserDevices");
          });
      }
    }
  };
</script>

<style></style>
