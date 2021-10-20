import "./IconImg.scss";

function IconImg({ src, alt = "icon" }) {
	return <img className="IconImg" src={src} alt={alt} />;
}

export default IconImg;
