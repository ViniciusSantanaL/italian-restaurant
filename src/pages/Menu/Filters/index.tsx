import filtersJson from './filters.json';
import styles from './Filters.module.scss';
import React from "react";
import classNames from 'classnames';

interface Option {
    id: number;
    label: string;
}

interface Props {
    filter: number;
    setFilter: React.Dispatch<React.SetStateAction<number>>;
}

export function Filters(props: Props) {


    function selectFilter(option: Option) {
        if(props.filter === option.id) {
            return props.setFilter(0);
        }
        return props.setFilter(option.id);
    }
    return (
        <div className={styles.filtros}>
            {filtersJson.map(option => (
                <button className={classNames({
                    [styles.filtros__filtro]: true,
                    [styles["filtros__filtro--ativo"]]: props.filter === option.id
                })}
                        key={option.id}
                        onClick={() => selectFilter(option)}>
                    {option.label}
                </button>
            ))}
        </div>
    );
}