import ABOUT from "@/config/about";

const HeroTexts = () => {
  const nameParts = ABOUT.name.split(" ");
  const firstName = nameParts[0];
  const middleName = nameParts.length > 2 ? nameParts[1] : "";
  const lastName = nameParts.length > 2 ? nameParts[2] : nameParts[1];

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-2xl max-sm:text-xl">My Name is</h3>
      <h1 className="text-6xl text-primary max-sm:text-6xl ">
        {firstName} {middleName} {lastName}
      </h1>
      <h6 className="text-base sm:text-2xl text-gray-700">
        I am a {ABOUT.role}
      </h6>
    </div>
  );
};
export default HeroTexts;
