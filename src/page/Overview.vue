<template>
  <div class="hero-body">
    <div class="container">
      <b-field label="Kurs suchen..." :label-position="labelPosition">
        <b-input type="search" v-model="searchString"></b-input>
      </b-field>
    </div>
    <div class="container">
      <div class="section">
        <div class="row columns is-multiline" v-if="displayData.length > 0">
          <div
            v-for="item in displayData"
            :key="item.name"
            class="column is-4"
            @click="openCourse(item)"
          >
            <div class="card large">
              <div class="card-image is-16by9">
                <b-image ratio="16by9" :src="item.img"></b-image>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4 no-padding">{{ item.name }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <img style="zoom: 0.5" :src="require('@/assets/not_found.svg')" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchString: "",
      labelPosition: "on-border",
      data: [],
      displayData: []
    };
  },
  methods: {
    openCourse(item) {
      location.href = window.location.href + item.path;
    }
  },
  mounted() {
    fetch("courses.json?time=" + new Date().getTime())
      .then(response => response.json())
      .then(data => {
        this.data = data;
        this.displayData = this.data.slice();
      });
  },
  watch: {
    searchString: function(newSearch) {
      this.displayData.length = 0;
      if (!newSearch || 0 === newSearch.length) {
        this.displayData = this.data.slice();
      } else {
        for (var i = 0; i < this.data.length; i++) {
          if (
            this.data[i].name.toLowerCase().includes(newSearch.toLowerCase())
          ) {
            this.displayData.push(this.data[i]);
          }
        }
      }
    }
  }
};
</script>
