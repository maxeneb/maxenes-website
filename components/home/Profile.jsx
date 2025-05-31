import Avatar from './Avatar'
import ActionButtons from "./ActionButtons";
import SocialLinks from './SocialLinks';

const Profile = () => {
    return (
      <div className="flex items-center justify-center flex-col md:flex-row md:items-start gap-6 md:gap-20 md:pt-20 md:pb-30">
        <Avatar />
        <div className="flex-1 text-center md:text-start">
          <h1 className="flex items-center justify-center md:justify-start text-3xl md:text-5xl font-bold text-sage-dark mb-3">
            hi! i'm max ⋆˙⟡
          </h1>
          <p className="text-sage-dark text-base md:text-lg leading-relaxed">
            a fresh Computer Science graduate
            specializing in Artificial Intelligence and
            Web Development from Cebu City, PH.
          </p>
          <ActionButtons />
        </div>
      </div>
    );
};

export default Profile;