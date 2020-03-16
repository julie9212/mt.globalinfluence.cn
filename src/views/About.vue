<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  data(){
    return{
        
    }
  },
  mounted() {
      this.indexList();
  },
  methods: {
    async indexList(){
      let res = await this.$api.indexList();
      if (res) {
          console.log(res);
      }
    },
    
  },
}
</script>