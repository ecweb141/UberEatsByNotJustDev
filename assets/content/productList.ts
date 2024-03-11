export type ProductListType = {
  name: string;
  image: string;
  price: number;
  id?: string; // Optional property
  type: "VEG" | "N-VEG";
};

export const ProductList: ProductListType[] = [
  {
    name: "pizza",
    image:
      "https://firebasestorage.googleapis.com/v0/b/food-orderd.appspot.com/o/5038.jpg?alt=media&token=46946b5e-0dd8-4a5b-9c61-fb05e9b3328a",
    id: "pizza123",
    price: 12,
    type: "VEG",
  },
  {
    name: "McFries",
    image:
      "https://firebasestorage.googleapis.com/v0/b/food-orderd.appspot.com/o/2151083732.jpg?alt=media&token=e7a0416d-ec1b-4ad7-8a28-47b22fc8cb54",
    price: 10,
    id: "Mcfires99394u98",
    type: "VEG",
  },
  {
    name: "Taco",
    image:
      "https://firebasestorage.googleapis.com/v0/b/food-orderd.appspot.com/o/2150770545.jpg?alt=media&token=ea11fae1-ae0f-411b-ba6c-2a39ac2d2008",
    price: 8,
    id: "TacoID",
    type: "VEG",
  },
  {
    name: "Samosa",
    image:
      "https://firebasestorage.googleapis.com/v0/b/food-orderd.appspot.com/o/13491.jpg?alt=media&token=0439e1ec-450f-4aa0-ad17-03f82c6e70cb",
    id: "samosa123", // Example of an optional property
    type: "VEG",
    price: 20,
  },
];
