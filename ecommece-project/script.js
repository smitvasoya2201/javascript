// var product = {
//   "mobiles" : [
//     {
//       "model": "iPhone 16",
//       "price": 69999,
//       "brand": "Apple",
//       "img": "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=80",
//       "description": "Premium smartphone with a stylish design, powerful performance, and an advanced camera."
//     },
//     {
//       "model": "Samsung Galaxy S25",
//       "price": 80999,
//       "brand": "Samsung",
//       "img": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
//       "description": "Premium smartphone with a vibrant display, smooth performance, and impressive photography."
//     },
//     {
//       "model": "OnePlus 13",
//       "price": 69999,
//       "brand": "OnePlus",
//       "img": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
//       "description": "High-performance smartphone designed for fast multitasking, entertainment, and everyday use."
//     },
//     {
//       "model": "Google Pixel 9",
//       "price": 59999,
//       "brand": "Google",
//       "img": "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=800&q=80",
//       "description": "Modern smartphone with intelligent features, a clean interface, and excellent photography capabilities."
//     },
//     {
//       "model": "Xiaomi 14",
//       "price": 49999,
//       "brand": "Xiaomi",
//       "img": "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=800&q=80",
//       "description": "Feature-packed smartphone with a premium appearance, responsive performance, and versatile cameras."
//     }
//   ],
//   "laptops" : [
//     {
//       "model": "MacBook Air",
//       "price": 99900,
//       "brand": "Apple",
//       "img": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
//       "description": "Lightweight laptop suitable for students, professionals, creative work, and everyday productivity."
//     },
//     {
//       "model": "Dell XPS 15",
//       "price": 149999,
//       "brand": "Dell",
//       "img": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
//       "description": "Premium laptop designed for professional workloads, multitasking, and entertainment."
//     },
//     {
//       "model": "HP Pavilion 15",
//       "price": 59999,
//       "brand": "HP",
//       "img": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
//       "description": "Versatile laptop for students, office tasks, online learning, and daily computing."
//     },
//     {
//       "model": "Lenovo IdeaPad Slim 5",
//       "price": 64999,
//       "brand": "Lenovo",
//       "img": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80",
//       "description": "Slim and portable laptop for productivity, browsing, document editing, and entertainment."
//     },
//     {
//       "model": "ASUS Zenbook 14",
//       "price": 89999,
//       "brand": "ASUS",
//       "img": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
//       "description": "Elegant, portable laptop designed for working professionals and users who need mobility."
//     }
//   ],
//     "shoes" : [
//     {
//       "model": "Air Max Running Shoes",
//       "price": 8999,
//       "brand": "Nike",
//       "img": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
//       "description": "Sporty red sneakers with a bold appearance, suitable for casual outfits and everyday styling."
//     },
//     {
//       "model": "Ultraboost Running Shoes",
//       "price": 9999,
//       "brand": "Adidas",
//       "img": "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
//       "description": "Modern athletic-style sneakers designed for a comfortable feel during walking and daily activities."
//     },
//     {
//       "model": "Classic Lifestyle Sneakers",
//       "price": 4999,
//       "brand": "Puma",
//       "img": "https://images.unsplash.com/photo-1460353581641-37baddaab7fa?auto=format&fit=crop&w=800&q=80",
//       "description": "Versatile sneakers that pair easily with jeans, casual wear, and everyday outfits."
//     },
//     {
//       "model": "Court Classic Sneakers",
//       "price": 3999,
//       "brand": "Reebok",
//       "img": "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
//       "description": "Minimalist sneakers with a clean design for casual outings and relaxed everyday styling."
//     },
//     {
//       "model": "Premium Casual Sneakers",
//       "price": 5999,
//       "brand": "New Balance",
//       "img": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=800&q=80",
//       "description": "Contemporary sneakers with a versatile silhouette, ideal for casual wear and everyday comfort."
//     }
//   ]
// }
// localStorage.setItem("product",JSON.stringify(product));
const product = JSON.parse(localStorage.getItem("product"));

// for (const key in product) {
//     for (const element of product[key]) {
//           console.log(element.brand);
//     }
  
    
    
// }
// console.log(product.mobiles[0].brand);
for (const key in product) {
    let h1 = document.createElement("h1");
    let section= document.createElement("section");

    h1.append(key);
    section.appendChild(h1);
    const aside = document.createElement("aside");

    for (const element of product[key]) {
        let img = document.createElement("img");
        let h2 = document.createElement("h2");
        let h3 = document.createElement("h3");
        let b = document.createElement("b");
        let p = document.createElement("p");

        let div = document.createElement("div");
        // let aside = document.createElement("aside");

        img.src = element.img;
        h2.append(element.model);
        h3.append(element.price);
        b.append(element.brand);
        p.append(element.description);

        div.appendChild(img);
        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(b);
        div.appendChild(p);

       


       aside.appendChild(div);
       
       
    }
    section.appendChild(aside);
    document.querySelector("main").appendChild(section);



}