



const product=[
    {
    id:1,
    image:'badminton.jpg',
    title:'Badminton',
    price:"$16",

    },
    {
        id:2,
        image:'football.jpg',
        title:'Football',
        price:"$18",
    
        },

        {
            id:3,
            image:'gym.jpg',
            title:'Gym Gadget',
            price:"$50",
        
            },

            {
                id:4,
                image:'hockey.jpg',
                title:'Hockey',
                price:"$35",
            
                },

                {
                    id:5,
                    image:'javelin.jpg',
                    title:'Javelin',
                    price:"$30",
                
                    },

                    {
                        id:6,
                        image:'rugby.jpg',
                        title:'Rugby',
                        price:"$10",
                    
                        },
                        {
                            id:7,
                            image:'tennis.jpg',
                            title:'Tennis',
                            price:"$20",
                        
                            },



                            {
                                id:1,
                                image:'badminton.jpg',
                                title:'Badminton',
                                price:"$16",
                            
                                },
                                {
                                    id:2,
                                    image:'football.jpg',
                                    title:'Football',
                                    price:"$18",
                                
                                    },
                            
                                    {
                                        id:3,
                                        image:'gym.jpg',
                                        title:'Gym Gadget',
                                        price:"$50",
                                    
                                        },
                            
                                        {
                                            id:4,
                                            image:'hockey.jpg',
                                            title:'Hockey',
                                            price:"$35",
                                        
                                            },
                            
                                            {
                                                id:5,
                                                image:'javelin.jpg',
                                                title:'Javelin',
                                                price:"$30",
                                            
                                                },
                            
                                                {
                                                    id:6,
                                                    image:'rugby.jpg',
                                                    title:'Rugby',
                                                    price:"$10",
                                                
                                                    },
                                                    {
                                                        id:7,
                                                        image:'tennis.jpg',
                                                        title:'Tennis',
                                                        price:"$20",
                                                    
                                                        },
                                                        {
                                                            id:8,
                                                            image:'img6.jpg',
                                                            title:'Ball',
                                                            price:"$5",
                                                        
                                                            },
                                                            {
                                                                id:9,
                                                                image:'img2.jpg',
                                                                title:'Dumble(10kg)',
                                                                price:"$17.4",
                                                            
                                                                },
                                                                {
                                                                    id:10,
                                                                    image:'img3.jpg',
                                                                    title:'cork',
                                                                    price:"$11",
                                                                
                                                                    },
                                                                    {
                                                                        id:11,
                                                                        image:'img5.jpg',
                                                                        title:'Excercise ball',
                                                                        price:"$7",
                                                                    
                                                                        },
];

    const categories=[...new Set(product.map((item)=>
        {
        return item }))]

        let i=0;
        document.getElementById('root').innerHTML=categories.map((item)=>{
            var {image,title,price}=item;
            return(
                `<div class='box'>
                <div class='img-box'>
                <img class='image' src=${image}></img>
                </div>
                <div class='bottom'>
                <p>${title}</p>
                <h2>${price}.00</h2>`+
                "<button onclick='addtocart("+(i++)+")'>Addd to cart</button>"+
                `</div>
                </div>`
            )
        }).join('');

        function add_to_cart(pid,price,title){
            let cart=localStorage.getItem("cart")
            if(cart==null){
                //no cart 
                let products=[];
                let product={productId:pid,productPrice:price,productTitle:title}
                products.push(product);
                localStorage.setItem("cart",JSON.stringify(products));

            }else{
                //cart is not present
                

            }
        }



























  



