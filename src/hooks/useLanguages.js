import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

export default () => {
    const context = useContext(LanguageContext);

    return context;
};