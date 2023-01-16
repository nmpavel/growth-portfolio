import Image from "next/image";

const PhotoCard=({picture})=>{
    return(
        <div
            key={picture.id}
            className=" cursor-pointer border border-transparent rounded-xl overflow-hidden hover:scale-125 hover: transition duration-300 ease-in-out "
          >
            <Image src={picture.logo} width={350} height={300} alt="Clients Logo" />
          </div>
    )
}
export default PhotoCard;