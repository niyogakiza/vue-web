// eslint-disable-next-line

<template>
 <v-container grid-list-md text-xs-center>
   <v-layout row wrap>
     <v-flex xs12>
       <h3 class="display-1 heading">About</h3>
     </v-flex>
     <v-flex xs12 sm8 offset-sm2 class="text">
       <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br><br>
         Amet cursus sit amet dictum sit amet justo.
         Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae.
         Condimentum mattis pellentesque id nibh tortor id aliquet.
         Magna ac placerat vestibulum lectus mauris ultrices eros.<br><br>
       </p>
     </v-flex>
     <v-flex sm12 sm6>
       <p class="bottom">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
     </v-flex>
   </v-layout>
 </v-container>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .heading{
    margin-bottom: 20px;
  }
  .text{
    font-size: 15px;
    text-align: left;
  }
  .bottom{
    margin: 40px auto;
    font-weight: bold;
    font-size: 16px;
  }
  .heading, .text{
    color:black;
  }
</style>
