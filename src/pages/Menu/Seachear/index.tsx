import styles from './Searchear.module.scss';
import {CgSearch} from "react-icons/cg";
interface Props {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}
export function Searchear(props: Props) {
    return (
      <div className={styles.buscador}>
          <input value={props.search}
                 placeholder="Search"
                 onChange={event => props.setSearch(event.target.value)}/>
          <CgSearch size={20} color="#4C4D5E"/>
      </div>

    );
}