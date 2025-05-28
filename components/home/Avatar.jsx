import Image from "next/image";
import { assets } from '../../assets/assets'

const Avatar = () => {
    return (
    <div className="ml-5">
      <Image src={assets.avatar} alt="" className="w-36 h-36 flex-col md:w-48 md:h-48 transition-all duration-300 hover:scale-102"/>
    </div>
    );
  };

export default Avatar;