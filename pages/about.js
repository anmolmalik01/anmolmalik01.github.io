function About() {
  return (
    <div className="bg-light text-black">
      {/* main heading */}
      <div className="px-6">
        <a href="./">
          <p className="text-dark leading-normal font-abc 
           pl-[6%] pr-[3%] pt-[25%] sm:pt-[18%] lg:pt-[13%]
          text-4xl sm:text-7xl md:text-8xl text-left font-bold max-w-3xl lg:max-w-4xl">
            Little about me...
          </p>
        </a>
      </div>

      <div className="px-6 pt-8 sm:px-[15%] sm:pt-16">
        <p className="sm:text-lg py-8 mb-10 text-base lg:text-lg">
          Hey there! I&apos;m a budding software developer currently rocking my bachelor&apos;s degree. My passion? It&apos;s all about diving deep into the worlds of data science, machine learning, and web development.
          <br />
          <br />
          My coding adventure started back in 2019, thanks to a tempting ad on social media offering free coding certificates for web development. Little did I know, this was just the beginning of an exhilarating journey! As I delved into the realm of design, I discovered that while it may seem more complex than coding at first glance, the real magic lies in constant tinkering and refining.
          <br />
          <br />
          What gets me pumped about development is the thrill of crafting solutions that tackle real-world challenges head-on. Through coding, I&apos;ve not only sharpened my problem-solving skills on-screen but also found myself applying them to all sorts of other areas.
          <br />
          <br />
          I love making websites that are clean, user-friendly vibe that looks awesome on any device. And when it comes to side projects, count me in! They&apos;re like mini revolutions—constantly surprising, endlessly fascinating, and always teaching me more than I ever expected.
        </p>
      </div>

      {/* ================================================================== */}
      <div className="bg-dark text-extra py-[5rem] px-7 sm:p-16">
        <p className="text-3xl sm:text-5xl pb-8 font-bold text-light font-abc">Skills</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">

          <div className="card1 backdrop-blur-lg p-6 rounded-lg shadow-md min-w-full sm:min-w-0">
            <p className="px-2 py-3 font-bold text-xl text-white">Web development</p>
            <div className="px-10 py-3 bg-white opacity-80 rounded-lg">
              <ul className="list-disc">
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap/ Tailwind</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>PostgressSQL</li>
                <li>MongoDB</li>
                <li>ExpressJs</li>
                <li>Flask</li>
                <li>NodeJs</li>
              </ul>
            </div>
          </div>

          <div className="card3 backdrop-blur-lg p-6 rounded-lg shadow-md min-w-full sm:min-w-0">
            <p className="px-2 py-3 font-bold text-xl text-white">Data Science</p>
            <div className="px-10 py-3 bg-white opacity-80 rounded-lg">
              <ul className="list-disc">
                <li>Numpy</li>
                <li>Pandas</li>
                <li>Matplotlib</li>
                <li>Seaborn</li>
                <li>Sklearn</li>
                <li>Tensorflow</li>
                <li>XGBoost</li>
                <li>SQL</li>
                <li>Apache Spark</li>
                <li>Apache Airflow</li>
              </ul>
            </div>
          </div>

          <div className="card2 backdrop-blur-lg p-6 rounded-lg shadow-md min-w-full sm:min-w-0">
            <p className="px-2 py-3 font-bold text-xl text-white">Tools</p>
            <div className="px-10 py-3 bg-white opacity-80 rounded-lg">
              <ul className="list-disc">
                <li>Git/ Github</li>
                <li>Docker</li>
                <li>Jupyter Notebooks</li>
                <li>Linux</li>
                <li>PowerBI/ Tableau</li>
                <li>IBM Cognos</li>
                <li>Hadoop</li>
                <li>AWS</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* ================================================================== */}
      <div className="py-10">
        <p className="text-dark pt-10 ml-6 sm:ml-16 text-3xl sm:text-5xl font-abc font-bold">Some thoughts</p>

        <div className="px-6 pt-8 sm:px-[15%]">
          <p className="sm:text-lg text-base lg:text-lg">
            The realm of Artificial Intelligence has always fascinated me, sparking wonder about how pieces of metal can think and evolve, edging closer to humanity with each advancement. It&apos;s been an intriguing journey from mere curiosity to active creation, and it&apos;s one that continues to unfold. Our universe is an endless wellspring of data, a constant flow that holds the key to both understanding and complexity. While deciphering its nuances may seem daunting, the right minds can extract invaluable insights. Data is universal, a fundamental element that breathes life into beautiful, comprehensible graphs—bridging the gap between complexity and clarity for all to grasp.
            <br />
            <br />
            Data is the constant, universal language that surrounds us from birth until our final days. It&apos;s a concept ingrained in our understanding from the very beginning, evolving alongside us throughout our lives. With the advent of data science, we&apos;ve gained the ability to unlock valuable insights hidden within this vast sea of information. Data science serves as our guide, enabling us to navigate through the complexities of data and extract meaningful knowledge to shape our world.
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
