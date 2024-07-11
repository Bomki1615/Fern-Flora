<script>
export default{
  data() {
      return {
        image: '../images/vinicius-amnx-amano-dbOV1qSiL-c-unsplash.jpg',
        url: 'https://www.vuejs.org/',
        stockDetails : [
            {
                itemNumber: 1,
                itemName : "Sweets",
                itemPrice : 5,
                itemQuantity : 30,
                itemImage: '../images/customerbox-aXq1oCCjlVM-unsplash.jpg'
            },
            {
                itemNumber: 27466,
                itemName : "Lollipop",
                itemPrice : 10,
                itemQuantity : 4,
                itemImage: '../images/jamie-albright-AHF_ZktTL6Q-unsplash.jpg'
            }
        ],
    
      }
    },
    methods(){

    },
    computed(){
        
    }
}
</script>

<template>
     <v-card
    class="mx-auto"
    width="1000"
  >
   

    <v-carousel>
  <v-carousel-item
    src="../images/fiona-murray-degraaff-rZi_go_qmZ0-unsplash.jpg"ash.jpg
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="../images/l-odyssee-belle-rie4Ec7JwD0-unsplash.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="../images/frederick-marschall-3dKHfC7_1j0-unsplash.jpg"
    cover
  ></v-carousel-item>
</v-carousel>
  </v-card>
  <v-card align="center">
        <v-card-item>
          <v-card-title>FloraVista</v-card-title>

          <v-card-subtitle>My Flower Shop</v-card-subtitle>
        </v-card-item>

        <v-card-text>
        Step into the world of Botanical bliss.
        </v-card-text>
      </v-card>
    
  <v-row>
    <v-col cols="12" md="4">
      <v-card
        subtitle="Welcome to our blooming sanctuary"
        text="Explore exquisite bouquets and vibrant blooms at our newly opened flower shop."
        title="Every stem tells a story"
      ></v-card>

      
    </v-col>

    <v-col cols="12" md="4">
      <v-card>
        <template v-slot:title>
          Fresh blooms and heartfelt arrangements
        </template>

        <template v-slot:subtitle>
          Experience our magical flowers
        </template>

        <template v-slot:text>
          Celebrate life's moments with our beautiful blossoms!
        </template>
      </v-card>

      
    </v-col>

    <v-col cols="12" md="4">
      <v-card>
        <v-card-item>
          <v-card-title>A haven of floral wonders</v-card-title>

          <v-card-subtitle>Embrace the fragrance of joy</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          Experience elegance and charm with our curated selection of flowers!
        </v-card-text>
      </v-card>

      
    </v-col>
  </v-row>

  
</template>

