import Link from "next/link";
import { getItem } from 'src/utils/getItems/';
import ShowImages from 'src/components/showImages/';
import styles from './show.module.css';

export default async function Show({ params }) {
  const { id } = await params;
  const item = await getItem(id);

  // Filtrar los atributos que no queremos mostrar
  const filteredAttributes = Object.entries(item).filter(
    ([key]) => key !== 'image' && key !== 'images'
  );

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className={styles.imagesContainer}>
        <ShowImages item={item} styles={styles} />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.buttonsContainer}>
          <Link href={"/"} ><button>volver al home</button></Link>
          <button>Contactar corredor</button>
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
