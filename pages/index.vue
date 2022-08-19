<template>
  <div>
    <div>
      <center>
        <h2>Server Side</h2>
        <template v-if="slideList">
          <div v-for="(slide, index) in slideList" :key="index">
            <img
              :src="
                'https://pchbiz-admin.idevgroup.club/image/upload/sliders/' +
                slide.image
              "
              alt="slide"
              width="50"
              height="50"
            />
          </div>
        </template>
      </center>
    </div>
    <client-only>
      <div>
        <center>
          <h2>Client Side</h2>
          <p>Test Render Html</p>
        </center>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  async asyncData({ $axios, redirect }) {
    try {
      const { data } = await $axios.$post(
        "https://pchbiz-admin.idevgroup.club/api/user_buyer_web/get_slideshow"
      );
      const slideList = data;

      return { slideList };
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
