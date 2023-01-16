import Link from "next/link";

const DrawerLink = ({link,label}) => {
  return (
    <Link href={link} className="pl-8 py-4 border-b-2 border-gray-700 ">
      {label}
    </Link>
  );
};

export default DrawerLink;
