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
            price: 120,
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
            category:"shoes",
            image:"/images/p2.jpg",//679px * 829px
            price: 120,
            countInStock: 0,
            brand:"adidas",
            rating:4.5,
            numReviews:10,
            description:"Comfortable shoes"

        },
        {
            // _id:'3',
            name:"Crocs",
            slug: "Crocs-slides",
            category:"Footwear",
            image:"/images/p3.jpg",//679px * 829px
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
            category:"shoes",
            image:"/images/p4.jpg",//679px * 829px
            price: 120,
            countInStock: 10,
            brand:"Titan",
            rating:4.5,
            numReviews:10,
            description:"Stylish"

        }
    ]
}
export default data;