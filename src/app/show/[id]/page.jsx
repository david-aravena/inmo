import Link from "next/link";
import { getItem } from 'src/utils/getItems/';
import ShowImages from 'src/components/showImages/';
import styles from './show.module.css';

export default async function Show({ params }) {
  const { id } = await params;
  const item = await getItem(id);

  const filteredAttributes = Object.entries(item).filter(
    ([key]) => key !== 'image' && key !== 'images'
  );

  return (
    <div className={styles.containerShow}>
      <div className={styles.imagesContainer}>
        <ShowImages item={item} styles={styles} />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.buttonsContainer}>
          <Link href={"/"} ><button className={styles.buttonBackHome}>volver al home</button></Link>
          <button className={styles.buttonContact}>Contactar corredor</button>
        </div>
        {filteredAttributes.map(([key, value]) => (
          <div key={key} className={styles.itemContainer}>
            <strong style={{ color: 'white', textTransform: 'capitalize' }}>
              {key}:
            </strong>{' '}
            <span style={{ color: 'lightgray' }}>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
