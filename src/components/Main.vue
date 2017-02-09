<template>
  <div class="wrapper">
    <md-toolbar>
      <h1 class="md-title">Grizz.ly</h1>
      <span class="description">url shortener</span>
    </md-toolbar>
    <div class="main-content">
      <div class="url-input">
        <form novalidate @submit.stop.prevent="submit">
          <md-input-container>
            <label>your long url</label>
            <md-input placeholder="Paste your URL"></md-input>
            <md-button class="md-raised md-primary">Shorten</md-button>
          </md-input-container>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  @font-face {
    font-family: 'logo-font';
    src: url('../assets/fonts/logo-font.woff.woff2') format('woff2'),
    url('../assets/fonts/logo-font.woff') format('woff');
    font-weight: normal;
    font-style: normal;

  }

  .description {
    font-size: 15px;
    padding: 8px 0 0 7px;
    text-transform: uppercase;
  }

 .md-toolbar {
   padding: 16px 0;
 }

 .md-title {
   font-family: 'logo-font', Arial;
   font-size: 40px;
   letter-spacing: 3px;
 }
 .url-input {
   width: 60%;
   height: 300px;
   display: flex;
   input {
     padding: 10px;
     margin: 7px 3px 7px 0;
     height: 40px;
     background: rgba(57, 73, 171, 0.08);
     line-height: 1.5em;
   }
   form {
     width: 100%;
   }
 }

 .main-content {
   display: flex;
   align-items: center;
   justify-content: center;
   height: calc(100vh - 65px);
 }

 .wrapper {
   height: 100vh;
 }
</style>
