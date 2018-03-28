// eslint-disable-next-line
<template>
  <v-app id="inspire" dark>
    <v-navigation-drawer
      class="nav-drawer"
      clipped
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile to="home" class="nav">
          <v-spacer></v-spacer>
          <v-list-tile-content>
            <v-list-tile-title class="navlist">Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="about" class="nav">
          <v-spacer></v-spacer>
          <v-list-tile-content>
            <v-list-tile-title class="navlist">About</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="hisangrydove" class="nav">
          <v-spacer></v-spacer>
          <v-list-tile-content>
            <v-list-tile-title class="navlist">Page one</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="outrageinthealtar" class="nav">
          <v-spacer></v-spacer>
          <v-list-tile-content>
            <v-list-tile-title class="navlist">Page 2</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="sovereigncitybookstore" class="nav">
          <v-spacer></v-spacer>
          <v-list-tile-content>
            <v-list-tile-title class="navlist"> Bookstore</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="priesthoodinthepoet" class="nav">
          <v-spacer></v-spacer>
          <v-list-tile-content>
            <v-list-tile-title class="navlist">Page 4</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="contact" class="nav">
          <v-spacer></v-spacer>
          <v-list-tile-content>
            <v-list-tile-title class="navlist">contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile class="navinfo">
          <v-spacer></v-spacer>
          <v-list-tile-content class="infocontent">
            <p>bibendum est ultricies integer</p>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile class="navinfo">
          <v-spacer></v-spacer>
          <v-list-tile-content class="infocontent">
            <p>bibendum est ultricies integer<br>674-456-3435</p>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile class="navinfo">
          <v-spacer></v-spacer>
          <v-list-tile-content>
            <v-avatar tile class="arrimage">
              <img src="static/arrs.jpg">
            </v-avatar>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left id="toolbar">
      <v-toolbar-side-icon @click.stop="drawer = !drawer" style="color: black"></v-toolbar-side-icon>
      <v-toolbar-title>
        <div class="avatarSize">
          <img src="static/logo.jpg" alt="logo">
        </div>
      </v-toolbar-title>
    </v-toolbar>
    <v-content id="content">
      <router-view/>
    </v-content>
    <v-footer app fixed id="footer">
      <span style="color: black;">All Rights Reserved 2018. Designed by <a style="text-decoration: none;" :href="githuburl">Aimable Niyogakiza</a></span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data:() =>({
      drawer: false,
      tile: true,
      githuburl:'https://github.com/niyogakiza'
    }),
    props:{
      source: String
    }
  }
</script>

<style scoped>
  p{
    font-size: 10px;
  }
  .avatarSize{
    width: 200px;
  }
  .infocontent{
    text-align:center;
  }
  .navlist{
    color:black;
    font-size: 13px;
  }
  .nav:hover{
    background-color: rgb(14, 13, 13) !important;
  }
  .navinfo{
    margin-top: 15px;
    color: white;
  }
  .arrimage{
    width: 100px !important;
    height: 50px !important;
  }
  .nav-drawer{
    overflow-y: hidden !important;
    background-color: darkgrey !important;
  }
  #content{
    background-color: darkgrey;
  }
  #toolbar, #footer{
    background-color: lightgray !important;
  }

</style>
