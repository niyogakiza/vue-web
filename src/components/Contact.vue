// eslint-disable-next-line

<template>
    <v-container grid-list-md text-xs-center>
      <router-view :contents="contents"/>
    </v-container>
</template>

<script>
    export default {
        data:() =>({
          contents:{
            heading:`eget nullam non`,
            image:'static/contact.jpg',
            subheading:'elementum eu facilisis sed',
            text: '',
            bottom:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          }
        })
    }
</script>

<style scoped>

</style>
