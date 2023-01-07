import React from "react";

import "./hero.css";
import {
	client_databiz,
	client_audiophile,
	client_meet,
	client_maker,
	image_hero_desktop,
	image_hero_mobile,
} from "../../images";

const Hero = () => {
	return (
		<div className="hero">
			<div className="hero-right">
				<picture className="hero-right-pic">
					<source srcSet={image_hero_desktop} media="(min-width: 800px)" />
					<img src={image_hero_mobile} alt="Person using laptop" />
				</picture>
			</div>

			<div className="hero-left">
				<div className="hero-left-text">
					<h1 className="hero-left-text__title">
						Make <br /> remote work
					</h1>
					<p className="hero-left-text__desc">
						Get your team in sync, no matter your location. <br /> Streamline
						processes, create team rituals, and <br /> watch productivity soar.
					</p>
					<div className="hero-left-text__btn">Learn more</div>
				</div>

				<div className="hero-left-clients">
					<img src={client_databiz} alt="databiz logo" />
					<img src={client_audiophile} alt="audiophile logo" />
					<img src={client_meet} alt="meet logo" />
					<img src={client_maker} alt="maker logo" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
