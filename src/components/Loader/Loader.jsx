import {ImSpinner3} from "react-icons/im";
import css from "./Loader.module.css";
import PropTypes from 'prop-types';

export const Loader = ({size}) => {
    return (
        <div className={css.loader}>
            <ImSpinner3 size={size} className={css['icon-spin']}/> 
            <span className={css['loader-text']}>Loading...</span>
        </div>
    )
}

Loader.propTypes = {
    size: PropTypes.number,
}
// size for list = 16