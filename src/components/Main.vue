<template>
  <div class="wrapper">
    <md-toolbar>
      <h1 class="md-title">My Title</h1>
    </md-toolbar>
    <div class="main-content">
      <div class="url-input">
        <form novalidate @submit.stop.prevent="submit">
          <md-input-container>
            <label>your long url</label>
            <md-input placeholder="Paste your URL"></md-input>
            <md-button class="md-raised md-primary">Shorten!</md-button>
          </md-input-container>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
 .url-input {
   width: 60%;
   display: flex;
 }

 .url-input form {
   width: 100%;
 }

 .main-content {
   display: flex;
   align-items: center;
   justify-content: center;
   height: calc(100vh - 65px);
 }

 .wrapper {
   /*background:url('../assets/background.jpg') no-repeat;
   background-size: cover;*/
   height: 100vh;
 }
</style>
