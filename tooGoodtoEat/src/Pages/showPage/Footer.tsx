import {accountIcon, favoritIcon, ordersIcon, searchIcon} from "../../icons/icons.tsx";

interface Props {
    setPage: (page:string) => void;
}

const Footer = ({setPage}:Props) => {

    const icons=[searchIcon(),ordersIcon(),favoritIcon(),accountIcon()]
    const values=["search","orders","favorite","account"]

    return (
        <div className="flex flex-row justify-around border-t-2 border-gray-200 pb-2 pt-3">
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