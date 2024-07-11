const state={
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
}
const getters={
stock: (state) => state.stockDetails,
}
const actions={

}
const mutations={

}

export default{
    state,
    getters,
    actions,
    mutations,
}