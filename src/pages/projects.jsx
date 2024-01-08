import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							"Hal-hal yang telah saya buat dalam upaya memberikan
							pengaruh pada semesta."
						</div>

						<div className="subtitle projects-subtitle">
							"Saya telah bekerja pada berbagai proyek selama 2
							tahun, dan saya bangga dengan kemajuan yang telah
							saya capai. Banyak dari proyek-proyek ini bersifat
							open-source dan tersedia untuk dieksplorasi dan
							berkontribusi bagi orang lain. Jika Anda tertarik
							dengan salah satu proyek yang telah saya kerjakan,
							silakan cek kode tersebut dan beri saran untuk
							perbaikan atau peningkatan yang mungkin Anda
							pikirkan. Berkolaborasi dengan orang lain adalah
							cara yang baik untuk belajar dan berkembang, dan
							saya selalu terbuka terhadap ide-ide baru dan umpan
							balik."
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
