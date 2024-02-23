function About() {
  return (
    <div className="bg-dark text-black">
      {/* main heading */}
      <div className="px-6">
        <a href="./">
          <p className="text-white leading-normal font-abc 
           pl-[6%] pr-[3%] pt-[25%] sm:pt-[18%] lg:pt-[13%]
          text-4xl sm:text-6xl md:text-8xl text-left font-bold max-w-3xl lg:max-w-4xl">
            Little about me...
          </p>
        </a>
      </div>

      <div className="px-6 pt-8 sm:px-32 sm:pt-16">
        <p className="sm:text-lg py-8 mb-10 text-base lg:text-lg">
          I am a software developer and currently a bachelor&apos;s student who
          have interests in the fields of data science, machine learning, and
          web development. In 2019, I saw an advertisement on social media to
          learn web development and get a free coding certificate from their my
          journey to code started. Over the time I get to know that design is
          more complicated than coding it, but the key to great design is
          iterating and improving. The thing that excites me most as a
          Development is being able to design and create things that solve real
          problems. Programming has taught me problem-solving skills, not just
          on screens, but in other fields too.
          <br />
          <br />I like websites with a clean UI, responsive. I have worked on
          different side projects in different domains. Side projects have
          always exiting me, as they are revolting, interesting, and always take
          a lot of more than expected but gives more than thought.
        </p>
      </div>

      {/* ================================================================== */}
      <div className="bg-light text-extra py-[5rem] px-7 sm:p-10">
        <p className="text-2xl lg:text-3xl pb-4">Skills</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">

          <div className="card1 backdrop-blur-lg p-6 rounded-lg shadow-md min-w-full sm:min-w-0">
            <p className="px-2 py-2 font-bold text-xl text-white">Web development</p>
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
                <li>NodeJs</li>
              </ul>
            </div>
          </div>

          <div className="card2 backdrop-blur-lg p-6 rounded-lg shadow-md min-w-full sm:min-w-0">
            <p className="px-2 py-2 font-bold text-xl text-white">Web development</p>
            <div className="px-10 py-3 bg-white opacity-80 rounded-lg">
              <ul className="list-disc">
                <li></li>
                <li>Git/ Github</li>
                <li>Prototyping</li>
                <li>Wireframing</li>
              </ul>
            </div>
          </div>

          <div className="card3 backdrop-blur-lg p-6 rounded-lg shadow-md min-w-full sm:min-w-0">
            <p className="px-2 py-2 font-bold text-xl text-white">Web development</p>
            <div className="px-10 py-3 bg-white opacity-80 rounded-lg">
              <ul className="list-disc">
                <li>Numpy</li>
                <li>Pandas</li>
                <li>Matplotlib</li>
                <li>Seaborn</li>
                <li>Plotly</li>
                <li>Sklearn</li>
                <li>Tensorflow</li>
              </ul>
            </div>
          </div>

          <div className="card4 backdrop-blur-lg p-6 rounded-lg shadow-md min-w-full sm:min-w-0">
            <p className="px-2 py-2 font-bold text-xl text-white">Web development</p>
            <div className="px-10 py-3 bg-white opacity-80 rounded-lg">
              <ul className="list-disc">
                <li>Git/ Github</li>
                <li>Linux</li>
                <li>PowerBI/ Tableau</li>
                <li>IBM </li>
                <li>Plotly</li>
                <li>Sklearn</li>
                <li>Tensorflow</li>
              </ul>
            </div>
          </div>


        </div>
      </div>

      {/* ================================================================== */}
      <div className="px-3 py-6 sm:pl-24 sm:pr-32 sm:pt-16">
        <p className="text-light text-2xl lg:text-3xl pt-10">Some thoughts</p>

        <p className="sm:text-lg py-[2rem] text-base lg:text-lg">
          Artifical Intetlligence have always make me wonder how pieces of metal
          thinks and is getting closer to humanity. A journey from wondering to
          creating have been and continuously will be. Universe is filled with
          data, data is constant, depends on the mind useful or useless
          difficult to understand, useful for right minds, but it is universal
          and graphs need data, so data is needed to make beautiful graphs.
          tahta can be understandeable by anyone
          <br />
          <br />
          Data is continuous univerasal right for the right mind beine taught to
          us since we were born and will be there when we die, and data Science
          helps us retrieve information from the data.
        </p>
      </div>
    </div>
  );
}
export default About;
