<template>
  <div class="wrapper">
    <md-toolbar>
      <h1 class="md-title">My Title</h1>
    </md-toolbar>
    <div class="main-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, rerum? Error sunt, aperiam dolores, atque expedita molestiae tenetur. Quis eveniet accusamus velit explicabo adipisci reiciendis modi eaque quas, officia excepturi.</p>
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
   width: 30%;
   margin: 0 auto;
 }

 .wrapper {
   background:url('../assets/background.jpg') top right no-repeat;
   background-attachment:fixed;
 }
</style>
