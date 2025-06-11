import Avatar from "./Avatar";
import ActionButtons from "./ActionButtons";
import SocialLinks from "./SocialLinks";

const Profile = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-6 pt-10 md:gap-13 md:pt-15 md:pb-30">
      {/* <Avatar /> */}
      <div className="flex-1 text-center">
        <h1 className="flex items-center justify-center text-3xl pb-3 md:text-5xl font-bold text-sage-dark mb-3 md:pt-18">
          hi! i'm <span className="text-sage-medium px-2">max</span> ⋆˙⟡
        </h1>

        <p className="text-sage-dark text-base pb-3 d:text-lg leading-relaxed">
          a fresh Computer Science graduate specializing in Artificial
          Intelligence and Web Development from Cebu City, PH.
        </p>
        <ActionButtons />
      </div>
    </div>
  );
};

export default Profile;
