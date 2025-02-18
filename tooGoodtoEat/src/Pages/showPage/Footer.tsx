import {accountIcon, favoritIcon, ordersIcon, searchIcon} from "../../icons/icons.tsx";

interface Props {
    setPage: (page:string) => void;
}

const Footer = ({setPage}:Props) => {

    const icons=[searchIcon(),ordersIcon(),favoritIcon(),accountIcon()]
    const values=["search","orders","favorite","account"]

    return (
        <div className="flex flex-row justify-around">
            {icons.map((icon,i) => (
                <div className={"p-2"}
                onClick={() => setPage(values[i])} key={i}>
                    {icon}
                </div>
            ))}

        </div>
    );
};

export default Footer;