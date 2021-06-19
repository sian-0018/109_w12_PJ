import Link from 'next/link';
import styles from './nav.module.scss';

export default function Nav() {
	return (
		<div id={styles.body}>
			<div class={styles.colorlib_loader} />
			<nav className={styles.colorlib_nav} role="navigation">
				<div id={styles.top_menu} className="top-menu">
					<div class="container">
						<div id={styles.row}>
							<div id={styles.colorlib_logo} className={styles.nav__listLogo}>
								<a href="/">
									<img src="/favicon.svg" alt="" />
								</a>
								<a href="/">
									Law<span>firm.</span>
								</a>
							</div>
                            <div>							<ul>
								<li className={styles.active}>
									<a href="/">Home</a>
								</li>
								<li className={styles.has_dropdown}>
									<a>Events</a>
									<ul className={styles.dropdown}>
										<li>
											<a href="/events">Search</a>
										</li>
										<li>
											<a href="/events/index1">All</a>
										</li>
										<li>
											<a href="/events/featured">Featured</a>
										</li>
									</ul>
								</li>
								<li className={styles.has_dropdown}>
									<a>Crown</a>
									<ul className={styles.dropdown}>
										<li>
											<a href="/crown">Main</a>
										</li>
										<li>
											<a href="/crown/shop">Shop</a>
										</li>
										<li>
											<a href="/crown/shop/hats">Hats</a>
										</li>
										<li>
											<a href="/crown/shop/jackets">Jackets</a>
										</li>
                                        <li>
											<a href="/crown/shop/sneakers">Sneakers</a>
										</li>
                                        <li>
											<a href="/crown/shop/womens">Womens</a>
										</li>
                                        <li>
											<a href="/crown/shop/mens">Mens</a>
										</li>
									</ul>
								</li>
								<li>
									<a href="/project">Keelung Travel Guide</a>
								</li>
								<li className={styles.btn_cta}>
									<a href="#">
										<span>Sign Up</span>
									</a>
								</li>
							</ul>
						</div>
</div>
					</div>
				</div>
			</nav>
		</div>
	);
}
