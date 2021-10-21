function IconImg({ src, alt = "icon", width = 1, height = 1 }) {
	const style = {
		width: `${width}rem`,
		height: `${height}rem`,
	};

	return <img style={style} src={src} alt={alt} />;
}

export default IconImg;
