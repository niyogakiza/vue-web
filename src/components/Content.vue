// eslint-disable-next-line
<template>
  <v-layout row wrap>
    <v-flex xs12>
      <h3 class="display-1 heading">{{contents.heading}}</h3>
    </v-flex>
    <v-flex xs12 sm8 offset-sm2>
      <v-card raised hover style="background-color:darkgrey;">
        <v-card-media class="px-0">
          <img :src="contents.image"/>
        </v-card-media>
        <v-card-text>
          <h2>{{contents.subheading}}</h2>
          <p class="text">{{contents.text}}</p>
        </v-card-text>
      </v-card>
      <p class="bottom">{{contents.bottom}}</p>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    props:{
      contents: {
        required: true
      }
    }
  }
</script>

<style scoped>
  .heading{
    margin-bottom: 20px;
  }
  .text{
    margin-top: 20px;
    font-size: 15px;
    text-align: left;
  }
  .bottom{
    margin: 40px auto;
    font-weight: bold;
    font-size: 15px;
  }
  .heading, .text, h2{
    color: black;
  }
</style>
