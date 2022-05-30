import styles from "./Order.module.scss";
import optionsJson from "./options.json";
import classNames from "classnames";
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from "react-icons/md";
import React, {useState} from "react";

interface Props {
    order: string;
    setOrder: React.Dispatch<React.SetStateAction<string>>;
}

export function Order(props: Props) {
    const [open, setOpen] = useState<boolean>(false);
    const orderName = props.order &&
        optionsJson.find(option => option.value === props.order)?.nome;
    return (
      <button className={classNames({
          [styles.ordenador]: true,
          [styles["ordenador--ativo"]]: props.order !== ""
      })}
              onClick={() => setOpen(!open)}
              onBlur={() => setOpen(false)}
      >
          <span>{orderName || "Order By"}</span>
          {open ? <MdKeyboardArrowUp/> :<MdKeyboardArrowDown/>}
          <div className={classNames({
              [styles.ordenador__options]: true,
              [styles["ordenador__options--ativo"]]: open
          })}>
              {optionsJson.map(option => (
                  <div className={styles.ordenador__option}
                       key={option.value}
                       onClick={() => props.setOrder(option.value)}
                  >
                      {option.nome}
                  </div>
              ))}
          </div>
      </button>
    );
}