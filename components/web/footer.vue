<template>
  <footer class="footer-top pt-4">
    <b-container>
      <b-row>
        <b-col md="4">
          <h5>TENTANG</h5>
          <hr />
          <p>
            Belajar koding bahasa indonesia terlengkap dan mudah dipahami
            seperti Laravel, CodeIgniter, Vue JS, JavaScript dan masih banyak
            lagi.
          </p>
        </b-col>
        <b-col md="4">
          <h5>TAGS</h5>
          <hr />
          <div>
            <nuxt-link
              :to="{ name: 'tag-slug', params: { slug: tag.slug } }"
              class="btn btn-primary-dark btn-sm mb-2 mr-2 shadow-sm"
              v-for="tag in tags"
              :key="tag.id"
              >{{ tag.name }}</nuxt-link
            >
          </div>
        </b-col>
        <b-col md="4">
          <h5>KONTAK</h5>
          <hr />
          <p>
            <i aria-hidden="true" class="fa fa-map-marker"></i> Jl. KH. Mustofa
            Lingk. Parunglesang, RT.05/RW.10, Banjar, Kec. Banjar, Kota Banjar,
            Jawa Barat 46311 <br /><br /><i class="fas fa-phone"></i>
            (0265) 741722
          </p>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid class="footer-bottom">
      <b-row class="p-3 justify-content-center">
        <div class="text-white font-weight-bold">
          Copyright © 2024 Pribadi Ramadhan. All Rights Reserved.
        </div>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  //data function
  data() {
    return {
      //state tags
      tags: [],
    };
  },

  async fetch() {
    //fething tags on Rest API
    await this.$axios.get("/api/web/tags").then((response) => {
      //assign response to state "tags"
      this.tags = response.data.data;
    });
  },
};
</script>

<style scoped>
.btn-primary-dark {
  background-color: #403d39 !important;
  border-color: #403d39 !important;
}

.footer-bottom {
  background-color: #403d39 !important;
  color: #ffffff;
}

.btn-primary-dark:hover {
  background-color: #252422 !important;
}
</style>
