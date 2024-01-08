import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://uad.ac.id/wp-content/uploads/logo-warna.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Asisten of Lab IT</div>
							<div className="work-subtitle">
								universitas Ahmad dahlan
							</div>
							<div className="work-duration">2021 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
