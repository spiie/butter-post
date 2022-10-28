import butterWhiteIcon from "../assets/icons/ButterLogoWhiteRounded.png"

import HeaderButtons from "../components/HeaderButtons"

const Home = () => {
  return (
    <>
      <div className="page flex flex-row h-screen w-screen">
        <div className="header flex flex-col justify-between align-middle w-12 bg-red-500">
          <img src={butterWhiteIcon} alt="" className="BPIcon p-2" />
          <div className="buttons flex flex-col gap-4">
            <HeaderButtons name="Home" iconType="maison" colorWhite="" colorDark="" />
            <HeaderButtons name="Search" iconType="loupe" colorWhite="" colorDark="" />
            <HeaderButtons name="Messages" iconType="enveloppe" colorWhite="" colorDark="" />
            <HeaderButtons name="Profil" iconType="personRonded" colorWhite="" colorDark="" />
          </div>
          <HeaderButtons name="Parameters" iconType="rouage" colorWhite="" colorDark="" />
        </div>
        <div className="page bg-emerald-500">
        </div>
      </div>
    </>
  )
}

export default Home