export const getItems = async () => {
    const properties = [
        {
          id: 1,
          price: 150000,
          ubication: "Ciudad A, Calle 123",
          type: "casa",
          state: "venta",
          mts: 250,
          bedRooms: 4,
          bathrooms: 3,
          parking: 2,
          image: "https://firebasestorage.googleapis.com/v0/b/inmobiliario-e6a3e.appspot.com/o/properties%2Fimage_fx_%20(1).jpg?alt=media&token=54e6fbd2-f87d-4e63-98f4-5e61bc318013"
        },
        {
          id:2,
          price: 1200,
          ubication: "Ciudad B, Avenida 45",
          type: "departamento",
          state: "arriendo",
          mts: 85,
          bedRooms: 2,
          bathrooms: 2,
          parking: 1,
          image: "https://firebasestorage.googleapis.com/v0/b/inmobiliario-e6a3e.appspot.com/o/properties%2Fimage_fx_%20(2).jpg?alt=media&token=97df605c-8793-4df1-bcff-4475e3f391ec"
        },
        {
          id:3,
          price: 90000,
          ubication: "Ciudad C, Barrio Central",
          type: "casa",
          state: "venta",
          mts: 180,
          bedRooms: 3,
          bathrooms: 2,
          parking: 1,
          image:"https://firebasestorage.googleapis.com/v0/b/inmobiliario-e6a3e.appspot.com/o/properties%2Fimage_fx_%20(3).jpg?alt=media&token=eda4a79f-22ef-4a5b-b8d8-40e4cc5b05a0"
        },
        {
          id:4,
          price: 800,
          ubication: "Ciudad D, Calle Vista",
          type: "departamento",
          state: "arriendo",
          mts: 60,
          bedRooms: 1,
          bathrooms: 1,
          parking: 0,
          image:"https://firebasestorage.googleapis.com/v0/b/inmobiliario-e6a3e.appspot.com/o/properties%2Fimage_fx_%20(4).jpg?alt=media&token=102e3203-55bb-403f-8cd6-add15011d9c9"
        },
        {
          id:5,
          price: 200000,
          ubication: "Ciudad E, Zona Residencial",
          type: "casa",
          state: "venta",
          mts: 300,
          bedRooms: 5,
          bathrooms: 4,
          parking: 3,
          image: "https://firebasestorage.googleapis.com/v0/b/inmobiliario-e6a3e.appspot.com/o/properties%2Fimage_fx_%20(5).jpg?alt=media&token=714fabdf-8d89-4023-a057-9a4246ed9882"
        },
        {
          price: 1500,
          ubication: "Ciudad F, Edificio Altos",
          type: "departamento",
          state: "arriendo",
          mts: 100,
          bedRooms: 3,
          bathrooms: 2,
          parking: 2,
          image:"https://firebasestorage.googleapis.com/v0/b/inmobiliario-e6a3e.appspot.com/o/properties%2Fimage_fx_%20(6).jpg?alt=media&token=b7ab3b7d-76bc-40f1-9c74-827d15ba4a8d"
        },
        {
          price: 70000,
          ubication: "Ciudad G, Periferia",
          type: "casa",
          state: "venta",
          mts: 150,
          bedRooms: 3,
          bathrooms: 2,
          parking: 1,
          image:"https://firebasestorage.googleapis.com/v0/b/inmobiliario-e6a3e.appspot.com/o/properties%2Fimage_fx_%20(7).jpg?alt=media&token=15b59ad3-ad1b-4ff1-b148-dc4e4fc11352"
        },
        {
          price: 600,
          ubication: "Ciudad H, Centro Histórico",
          type: "departamento",
          state: "arriendo",
          mts: 50,
          bedRooms: 1,
          bathrooms: 1,
          parking: 0,
          image:"https://firebasestorage.googleapis.com/v0/b/inmobiliario-e6a3e.appspot.com/o/properties%2Fimage_fx_.jpg?alt=media&token=6223ea24-40cf-465e-9155-6b8b2d4c2419"
        }
      ];
      
      return properties;
      
}