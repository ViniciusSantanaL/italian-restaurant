import styles from './Itens.module.scss';
import menuJson from './itens.json';
import {Item} from "./Item";
import {useEffect, useState} from "react";


interface Props {
    search: string;
    filter: number;
    order: string;
}
export function Itens(props: Props) {
    const [list, setList] = useState(menuJson);

    function searchTest(title: string) {
        const regex = new RegExp(props.search,'i');
        return regex.test(title);
    }
    function filterTest(id: number) {
        if(props.filter > 0)
            return props.filter === id;
        return true;
    }
    function order(newList: typeof menuJson) {
        switch (props.order) {
            case 'portion':
                return newList.sort((a,b) => a.size > b.size ? 1: -1);
            case 'count_people':
                return newList.sort((a,b) => a.serving > b.serving ? 1 : -1);
            case 'price':
                return newList.sort((a,b) => a.price > b.price ? 1 : -1);
            default:
                return newList;

        }
    }
    useEffect(() => {
        const newList = menuJson.filter(item => searchTest(item.title) &&
            filterTest(item.category.id));
        setList(order(newList));
    },[props.search, props.filter, props.order])
    return (
      <div className={styles.itens}>
          {list.map(item => (
              <Item key={item.id} {...item}/>
          ))}
      </div>
    );
}