import { Image } from "react-native";


export const Products={
    category:[
    {   
        category:"Shilwar Qameez",
        data:[
            {
                name:"Dress_1",
                price:4000,
                color:'white',
                image:require("../Images/whiteSK.png")

            },
            {
                name:"Dress_2",
                price:4500,
                color:'Blue',
                image:require("../Images/blueSK.png")

            },
            {
                name:"Dress_3",
                price:4600,
                color:'brown',
                image:require("../Images/brownSK.png")
    
            },
            {
                name:"Dress_4",
                price:5000,
                color:'black',
                image:require("../Images/blackSK.png")

            }

        ]
    },
    {
        category:" Sun Glasses",
        data:[
            {
              name:"Glasses_1",
              price:3000,
              image:require("../Images/sunglasses_1.png")
            },
            {
                name:"Glasses_2",
                price:3000,
                Image:require("../Images/sunglasses_2.png")
            },
            {
              name:"Glasses_3",
              price:3000,
              image:require("../Images/sunglasses_3.png")    
            }
        ]
    },
    {
        category:" Captain Chapal",
        data:[
            {
                name:"Captain Chapal_1",
                price:3000,
                image:require("../Images/chapal_1.png"),
                color:"Black"
            },
            {
                name:"Captain Chapal_2",
                price:3500,
                image:require("../Images/chapal_2.png"),
                color:"Black"
            },
            {
                name:"Captain Chapal_3",
                price:4500,
                image:require("../Images/chapal_3.png"),
                color:"Brown"

            },{
                name:"Captain Chapal_4",
                price:4000,
                image:require("../Images/chapal_1.png"),
                color:"Black"
            }
        ]
    }


   ]

}