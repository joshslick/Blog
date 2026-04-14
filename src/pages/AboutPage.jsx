import styles from '../styles/AboutPage.module.css';

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.container}>
        <div className={styles.pageHeader}>
          <h1>Welcome to Abby Unfiltered</h1>
          <p>Real life, real motherhood, and everything in between.</p>
        </div>

        <section className={styles.section}>
          <h2>This Space Has Been On My Heart For A While</h2>
          <p>
            I&apos;m Abby, a young mom navigating the beautiful, messy, exhausting, and rewarding reality of
            raising a toddler while trying to build a career, all while figuring out who I am along the way.
          </p>
          <p>
            This blog is a home for the honest parts of everyday motherhood. The good days, the hard days,
            and the in-between moments all belong here.
          </p>
        </section>

        <section className={styles.section}>
          <div className={styles.highlight}>
            <h3>Here, you&apos;ll find a little bit of everything that makes up my everyday life:</h3>
            <ul className={styles.topicList}>
              <li>The chaos and magic of toddler life</li>
              <li>Realistic self-care for moms who don&apos;t have hours to spare</li>
              <li>Honest conversations about balancing work and motherhood</li>
              <li>Simple, doable toddler meal ideas</li>
              <li>Raw, real insights on coparenting, the highs, the challenges, and everything in between</li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Unfiltered Means Showing Up As We Are</h2>
          <p>
            This isn&apos;t about perfection. It&apos;s about showing up as we are, unfiltered. Some days that looks
            like productivity and homemade meals, and other days it looks like surviving on caffeine and toddler
            snacks. Both are valid here.
          </p>
          <p>
            If you&apos;re a young mom trying to juggle it all, just know you&apos;re not alone. I&apos;m right here with
            you, figuring it out one day at a time.
          </p>
        </section>

        <section className={styles.section}>
          <div className={styles.highlight}>
            <h3>Thanks for being here.</h3>
            <p>
              <span className={styles.signoff}>~ Abby</span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
