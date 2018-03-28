// eslint-disable-next-line
/* eslint-disable */
<template>
  <v-container grid-list-md text-xs-center class="container">
    <v-layout row wrap>
      <v-flex xs12>
        <h3 class="display-1 heading">mattis molestie a iaculis</h3>
      </v-flex>
      <v-flex xs12 sm6>
        <v-card raised hover>
          <v-card-media class="px-0">
            <img src="static/scb.jpg">
          </v-card-media>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 class="description">
        <h2>mattis molestie</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec feugiat in fermentum. Purus semper eget duis at tellus at. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu. Pellentesque adipiscing commodo elit at imperdiet dui. Integer vitae justo eget magna fermentum iaculis eu non. Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Est velit egestas dui id ornare arcu odio ut. Habitant morbi tristique senectus et netus et. Lectus vestibulum mattis ullamcorper velit sed.
        </p>
      </v-flex>
      <v-flex sm12 class="divide"></v-flex>
      <v-flex xs12 sm6 offset-sm3>
        <v-list dense v-for="(content, title) in contents" :key="title" style="background-color:darkgrey;">
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>{{title}}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-list-tile-action>{{content}}</v-list-tile-action>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider></v-divider>
        </v-list>
      </v-flex>
      <v-flex sm12 sm6>
        <p class="bottom">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
  export default{
    data: () =>({
      contents:{
        Title:'mattis molestie a iaculis',
        Subtitle:'mattis molestie a iaculis',
        Author:'mattis molestie a iaculis',
        No_of_pages:'40',
        ISBN:'',
        Softback:'7.66 - unavailable',
        e_book:'4.76',
        CD:' 2.76 - unavailable',
        T_shirt: '8.76 - unavailable'
      }
    })

  }

</script>
<style scoped>
  .heading{
    margin-bottom: 20px;
  }
  .bottom{
    margin: 40px auto;
    font-weight: bold;
    font-size: 16px;
  }
  .heading, h2{
    color:black;
  }
  .description{
    padding: 12px;
    color: black;
  }
  .description p{
    font-size: 15px;
    text-align: left;
  }
  .divide{
    margin-top: 15px;
  }

</style>
