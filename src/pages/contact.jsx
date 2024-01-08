import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							"Mari Terhubung: Cara untuk Berkomunikasi dengan
							Saya"
						</div>

						<div className="subtitle contact-subtitle">
							"Terima kasih atas ketertarikan Anda untuk
							berkomunikasi dengan saya. Saya menyambut masukan,
							pertanyaan, dan saran Anda. Jika Anda memiliki
							pertanyaan atau komentar khusus, silakan kirimkan
							email langsung ke{" "}
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							. Saya berusaha untuk merespons semua pesan dalam
							waktu 24 jam, meskipun mungkin membutuhkan lebih
							lama pada periode sibuk. Sebagai alternatif, Anda
							dapat menggunakan formulir kontak di situs web saya
							untuk berkomunikasi. Cukup isi bidang yang
							diperlukan, dan saya akan segera merespons.
							Terakhir, jika Anda lebih suka terhubung melalui
							media sosial, Anda bisa menemukan saya di{" "}
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								{INFO.socials.instagram}
							</a>
							. Saya sering memperbarui dan berinteraksi dengan
							pengikut saya di sana, jadi jangan ragu untuk
							menghubungi saya. Sekali lagi, terima kasih atas
							ketertarikan Anda, dan saya menantikan kabar dari
							Anda!"
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
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

export default Contact;
