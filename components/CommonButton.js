import Link from "next/link";

const CommonButton= ({link,label})=>{
    return(
        <Link
              href={link}
              className="transition-all duration-300 whitespace-nowrap px-8 py-2 border-2 border-myColor-100 text-myColor-100 hover:bg-myColor-100 hover:text-black "
            >
              {label}
            </Link>
    )
}
export default CommonButton;