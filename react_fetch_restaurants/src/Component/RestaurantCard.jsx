import styles from "./RestaurantCard.module.css"
function RestaurantCard({ name, image,type,rating,price_starts_from,number_of_votes }) {
  return (
  <div data-testid="restaurant-card" className={styles.container}>
   {/* display the props */}
    </div>
  );
}

export default RestaurantCard;
