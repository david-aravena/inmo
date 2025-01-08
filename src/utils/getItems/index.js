export const getItem = async (id) => {
  const properties = await getItems();
  const property = properties.find(item => item.id === parseInt(id));
  return property || null;
}

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
      image: "https://firebasestorage.googleapis.com/v0/b/inmobiliario-e6a3e.appspot.com/o/properties%2Fimage_fx_%20(1).jpg?alt=media&token=54e6fbd2-f87d-4e63-98f4-5e61bc318013",
      images: [
        "https://firebasestorage.googleapis.com/v0/b/inmobiliario-e6a3e.appspot.com/o/properties%2Fdetails%2Fimage_fx_%20(18).jpg?alt=media&token=7761e611-5620-4544-9f4d-40a9551acabb",
        "https://firebasestorage.googleapis.com/v0/b/inmobiliario-e6a3e.appspot.com/o/properties%2Fdetails%2Fimage_fx_%20(19).jpg?alt=media&token=64b26aad-0558-4d4a-9034-2454cb636a1b"
      ],
      features: "Amplio jardín y terraza con vista panorámica",
      yearBuilt: 2015,
      hasGarden: true,
      hasPool: false,
      hasBalcony: true,
      furnished: false,
      nearbyAmenities: ["Parque central", "Escuela primaria", "Supermercado"],
      energyRating: "A+",
      heatingType: "Eléctrica",
      floor: null,
      monthlyMaintenanceFee: null
    },
    {
      id: 2,
      price: 1200,
      ubication: "Ciudad B, Avenida 45",
      type: "departamento",
      state: "arriendo",
      mts: 85,
      bedRooms: 2,
      bathrooms: 2,
      parking: 1,
      image: "https://firebasestorage.googleapis.com/v0/b/inmobiliario-e6a3e.appspot.com/o/properties%2Fapartmens%2Fimage_fx_%20(12).jpg?alt=media&token=99b1c0ee-a754-4d24-b286-c1c44aacbb69",
      images: [
        "https://firebasestorage.googleapis.com/v0/b/inmobiliario-e6a3e.appspot.com/o/properties%2Fdetails%2Fimage_fx_%20(20).jpg?alt=media&token=10e52127-def9-4dd0-b353-1d4cc5d05d26",
        "https://firebasestorage.googleapis.com/v0/b/inmobiliario-e6a3e.appspot.com/o/properties%2Fdetails%2Fimage_fx_%20(21).jpg?alt=media&token=566cf7cc-0cb5-49e1-8589-ccf1b009d2a0"
      ],
      features: "Excelentes vistas y ubicación céntrica",
      yearBuilt: 2018,
      hasGarden: false,
      hasPool: false,
      hasBalcony: true,
      furnished: true,
      nearbyAmenities: ["Centro comercial", "Hospital", "Parada de autobús"],
      energyRating: "B",
      heatingType: "Gas natural",
      floor: 3,
      monthlyMaintenanceFee: 150
    },
    {
      id: 3,
      price: 90000,
      ubication: "Ciudad C, Barrio Central",
      type: "casa",
      state: "venta",
      mts: 180,
      bedRooms: 3,
      bathrooms: 2,
      parking: 1,
      image: "https://firebasestorage.googleapis.com/v0/b/inmobiliario-e6a3e.appspot.com/o/properties%2Fimage_fx_%20(3).jpg?alt=media&token=eda4a79f-22ef-4a5b-b8d8-40e4cc5b05a0",
      images: [
        "https://firebasestorage.googleapis.com/v0/b/inmobiliario-e6a3e.appspot.com/o/properties%2Fdetails%2Fimage_fx_%20(24).jpg?alt=media&token=7e78eb2b-0998-41dc-baf5-3a0ecfa4a7ac",
        "https://firebasestorage.googleapis.com/v0/b/inmobiliario-e6a3e.appspot.com/o/properties%2Fdetails%2Fimage_fx_%20(25).jpg?alt=media&token=a9ac53cd-185b-455c-b199-424d1bb9b4ce"
      ],
      features: "Recién remodelada con cocina moderna",
      yearBuilt: 2000,
      hasGarden: true,
      hasPool: false,
      hasBalcony: false,
      furnished: false,
      nearbyAmenities: ["Mercado local", "Plaza", "Escuela secundaria"],
      energyRating: "C",
      heatingType: "Panel solar",
      floor: null,
      monthlyMaintenanceFee: null
    },
    // Puedes agregar más objetos con estas nuevas propiedades.
  ];
  
      
      return properties;
      
}