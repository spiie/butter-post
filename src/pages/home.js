import butterWhiteIcon from "../assets/icons/ButterLogoWhiteRounded.png"
import butterBlackIcon from "../assets/icons/ButterLogoBlackRounded.png"

import HeaderButtons from "../components/HeaderButtons"

const Home = () => {
  return (
    <>
      <div className="page flex flex-row h-screen w-screen">
        <div className="header flex flex-col justify-between align-middle w-12 bg-zinc-100 dark:bg-zinc-600">
          <img src={butterWhiteIcon} alt="Butter Post White Icon" className="p-2 hidden dark:block" />
          <img src={butterBlackIcon} alt="Butter Post Black Icon" className="p-2 block dark:hidden" />
          <div className="buttons flex flex-col gap-4">
            <HeaderButtons afterName="Home" iconType="maison" />
            <HeaderButtons afterName="Search" iconType="loupe" />
            <HeaderButtons afterName="Messages" iconType="enveloppe" />
            <HeaderButtons afterName="Profil" iconType="personRonded" />
          </div>
          <HeaderButtons afterName="Parameters" iconType="rouage" colorWhite="" colorDark="" />
        </div>
        <div className="page bg-emerald-500">
        </div>
      </div>
    </>
  )
}

export default Home