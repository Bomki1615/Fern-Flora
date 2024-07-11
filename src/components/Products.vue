<template>
    <h1>Gardenia Gallery</h1>
    <p>{{ total }}</p>

    
    <div>
        <v-row>
            <v-col cols="12" md="4"  v-for="product in stock" :key=product>
  <v-card
    
    class="mx-auto my-12"
    max-width="374"
  >
    <v-img
      height="250"
      :src="product.itemImage"
      cover
    ></v-img>

    <v-card-item>
      <v-card-title>{{ product.itemName }}</v-card-title>

    </v-card-item>

    <v-card-text>
     

      <div class="my-4 text-subtitle-1">
        {{ product.itemPrice }}
      </div>

      <div>
      </div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-actions>
      <v-btn
        color="light-blue-darken-3"
        text="Add to basket"
        block
        border
        @click="addToBasket(product)"
      ></v-btn>
    </v-card-actions>
  </v-card>
            </v-col>
        </v-row>
    </div>
    
    </template>
    <script>
import { computed } from 'vue';
import { mapActions, mapGetters } from 'vuex';

    import(mapActions)
    export default{
    data(){
        return{
            products: [1,2,3,4,5,6,7,8,9,10],
            stockDetails : [
            {
                itemNumber: 10,
                itemName : "Iris",
                itemPrice : 5,
                itemQuantity : 30,
                itemImage: '../images/marites-allen-58hkEq9j4qw-unsplash.jpg',
                
            },
            {
                itemNumber: 5,
                itemName : "Hydrangea",
                itemPrice : 10,
                itemQuantity : 40,
                itemImage: '../images/yunan-wang-0-wFEJekeuc-unsplash.jpg',
                
            },
            {
                itemNumber: 787,
                itemName : "White rose",
                itemPrice : 20,
                itemQuantity : 100,
                itemImage: '../images/tengyart-Rvs3jSQU5Ag-unsplash.jpg',
                
            },
            {
                itemNumber: 200,
                itemName : "Daffodils",
                itemPrice : 10,
                itemQuantity : 200,
                itemImage: '../images/jay-gomez-ynnbKPaftus-unsplash.jpg',
                
            },
            {
                itemNumber: 1615,
                itemName : "Lavender",
                itemPrice : 50,
                itemQuantity : 50,
                itemImage: '../images/nikolett-emmert-QddD-WlBwoM-unsplash.jpg',
                
            },
            {
                itemNumber: 110,
                itemName : "Magnolia",
                itemPrice : 30,
                itemQuantity : 100,
                itemImage: '../images/justin-ha-9YBxb9mTIRw-unsplash.jpg',
                
            },
            {
                itemNumber: 248,
                itemName : "Camelia",
                itemPrice : 100,
                itemQuantity : 50,
                itemImage: '../images/note-thanun-XvBy5G-IdK8-unsplash.jpg',
                
            },
            {
                itemNumber: 3060,
                itemName : "Lotus",
                itemPrice : 10,
                itemQuantity : 50,
                itemImage: '../images/saffu-Ct1Mx5OTn9A-unsplash.jpg',
                
            }
      ],
              total: 0,
              basketItemsItems: [],
      



            }
                


              },
              

    methods:{
         calculateTotal(itemPrice){
         this.total+= itemPrice
         },
         addToBasket(product){
          this.basketItemsItems.push(product)
          this.calculateTotal(product.itemPrice)
         },
         removeFromBasket(product){
          this.basketItems.pop(product)
          this.total-=product.itemPrice
         }
         
    },
    computed:{
            ...mapGetters({
              stock: 'stock'
            })
          }
    
    }
    
    </script>