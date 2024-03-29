import bcrypt from 'bcryptjs';

const data ={
    users: [
        {
          name: 'Megha',
          email: 'admin@example.com',
          password: bcrypt.hashSync('123456'),
          isAdmin: true,
        },
        {
          name: 'John',
          email: 'user@example.com',
          password: bcrypt.hashSync('123456'),
          isAdmin: false,
        },
      ],
    products: [
        {   
            // _id:'1',
            name:"Nike Slim shirt",
            slug: "nike-slim-shirt",
            category:"shirts",
            image:"/images/p1.jpg",//679px * 829px
            price: 60,
            countInStock:10,
            brand:"Nike",
            rating:4.5,
            numReviews:10,
            description:"High quality shirts"


        },
        {
            // _id:'2',
            name:"adidas shoes",
            slug: "adidas-shoes",
            category:"Footwear",
            image:"/images/p2.jpg", 
            price: 120,
            countInStock: 15,
            brand:"adidas",
            rating: 4,
            numReviews:10,
            description:"Comfortable shoes"

        },
        {
            name:"Headphones",
            slug: "headphones",
            category:"Electronics",
            image:"/images/p8.jpeg",
            price: 300,
            countInStock: 7,
            brand:"sony",
            rating: 4.5,
            numReviews: 5,
            description:"Noise cancelling headbands"
        },
        {
            // _id:'3',
            name:"Crocs",
            slug: "Crocs-slides",
            category:"Footwear",
            image:"/images/p3.jpg",
            price: 120,
            countInStock:10,
            brand:"Crocs",
            rating:4.5,
            numReviews:10,
            description:"Easy Going"


        },

        {
        
            name:"Watch",
            slug: "watch",
            category:"Accessories",
            image:"/images/p4.jpg",
            price: 120,
            countInStock: 10,
            brand:"Titan",
            rating:4.5,
            numReviews:10,
            description:"Elegant"

        },
        {
            name:"Maxi dress",
            slug: "dress",
            category:"Women's clothing",
            image:"/images/dress.jpeg",
            price: 200,
            countInStock: 10,
            brand:"sristhi",
            rating: 3.5,
            numReviews: 5,
            description:"Maxi dress"
    },
    {
        name:"Choker",
        slug: "choker",
        category:"Accessories",
        image:"/images/p6.jpeg",
        price: 159,
        countInStock: 7,
        brand:"meera",
        rating: 4.5,
        numReviews: 5,
        description:"Designer choker neckpiece "
    },

    {
        name:"cargo pants",
        slug: "pants",
        category:"pants",
        image:"/images/p5.jpeg",
        price: 250,
        countInStock: 10,
        brand:"levis",
        rating: 3.5,
        numReviews: 7,
        description:"comfrtable pants"
}

    ]
}
export default data;