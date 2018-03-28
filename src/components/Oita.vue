/* eslint-disable */
<template>
  <v-container grid-list-md text-xs-center>
    <router-view :contents="contents"/>
  </v-container>
</template>

<script>
  export default {
    data:() =>({
      contents:{
        heading:'quis blandit turpis',
        image:'static/oita.jpg',
        subheading:'quis blandit turpis',
        text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue neque gravida in fermentum et sollicitudin. Lacus viverra vitae congue eu consequat ac felis. In massa tempor nec feugiat nisl pretium fusce id velit. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Nulla pharetra diam sit amet nisl suscipit. Eu scelerisque felis imperdiet proin. Massa sed elementum tempus egestas sed sed. Nunc pulvinar sapien et ligula. Aliquet risus feugiat in ante. Risus sed vulputate odio ut enim. Odio ut sem nulla pharetra diam sit amet. Tincidunt id aliquet risus feugiat in ante. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Neque gravida in fermentum et sollicitudin ac.`,
        bottom:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    })

  }
</script>



