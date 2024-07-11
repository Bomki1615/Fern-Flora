<template>
    <v-app-bar :elevation="2" color="light-blue-darken-3">
  <template v-slot:prepend>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
  </template>

  <v-app-bar-title>FloraVista</v-app-bar-title>
  <v-btn to="/">Home</v-btn>
<v-btn to="/aboutus">AboutUs</v-btn>
<v-btn to="/contactus">ContactUs</v-btn>
<v-btn to="/products">Products</v-btn>
<v-btn to="/basket">Basket</v-btn>
<v-btn to="/serivcesoffered">ServicesOffered</v-btn>
</v-app-bar>
</template>