// app/user/page.js
import { getUser } from 'src/utils/getUser/';
import ShowItems from './components/showItems/'
import FormContact from 'src/components/formContact/';
import ShowImages from 'src/components/showImages/';
import BackButton from 'src/components/backButton/';
import styles from './user.module.css';

export default async function User({ params }) {
  const { id } = await params;
  const decodedName = decodeURIComponent(id);
  const user = await getUser(decodedName);


  // Filtrar atributos (quitar 'image' y 'images')
  const filteredAttributes = Object.entries(user.user).filter(
    ([key]) => key !== 'image' && key !== 'images'
  );

  return (

    <div style={{width:"100%", height:"100%"}}>
      <div className={styles.containerShow}>
        <div className={styles.imagesContainer}>
          <ShowImages item={user.user} styles={styles} />
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.buttonsContainer}>
            <BackButton />
            <FormContact styles={styles} />
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

      <ShowItems user={user} styles={styles} />

      
    </div>
  );
}

