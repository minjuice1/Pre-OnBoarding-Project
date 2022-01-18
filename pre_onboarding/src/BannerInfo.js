const BannerInfo = ({ currImg, images }) => {
	return (
		<>
			<div className="descBox">
				<div>{images.title}</div>
				<div>{images.subTitle}</div>
				<hr></hr>
				<a>
					<span>바로가기</span>
					<span>
						<svg viewBox="0 0 18 18">
							<path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
						</svg>
					</span>
				</a>
			</div>
		</>
	);
};

export default BannerInfo;
