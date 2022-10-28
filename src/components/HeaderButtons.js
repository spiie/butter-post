import Icon from "./Icons"

const HeaderButtons = ({ name, iconType, colorWhite, colorDark }) => {
  return (
    <div className={`home p-2 flex flex-row after:content-['${name}'] after:invisible after:opacity-0 after:absolute after:left-14 after:bg-white after:p-2 after:rounded-md after:transition-all after:duration-100 hover:after:visible hover:after:opacity-100`}>
      <Icon type={iconType} colorWhite={colorWhite} colorDark={colorDark} />
    </div>
  )
}
export default HeaderButtons