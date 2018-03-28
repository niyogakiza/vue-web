// eslint-disable-next-line

<template>
    <v-container grid-list-md text-xs-center>
      <router-view :contents="contents"/>
    </v-container>
</template>

<script>
    export default {
       data: () =>({
         contents:{
           heading: 'Tincidunt',
           image:'static/had.jpg',
           subheading:'Etiam erat',
           text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
           Leo urna molestie at elementum eu. Sodales neque sodales ut etiam sit.
           Egestas maecenas pharetra convallis posuere morbi leo urna molestie at.
           Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim.
           Faucibus scelerisque eleifend donec pretium.
           Hac habitasse platea dictumst vestibulum rhoncus est pellentesque.
           Massa ultricies mi quis hendrerit. Neque gravida in fermentum et sollicitudin ac.
           Et egestas quis ipsum suspendisse ultrices.
           Dictum varius duis at consectetur lorem donec massa sapien faucibus.
           Nisi est sit amet facilisis magna.`,
           bottom:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
         }
       })
    }
</script>
