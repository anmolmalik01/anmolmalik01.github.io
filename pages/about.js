function About() {
  return (
    <div className="bg-gradient-to-br from-[#2e2e2e] via-black to-black text-white px-6">
      {/* main heading */}

      <p className="leading-normal font-abc pt-[34%] sm:pt-[18%] lg:pt-[13%] pl-[6%] pr-[3%] text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-left font-bold max-w-3xl lg:max-w-4xl">
        Little about me...
      </p>

      <div className="px-3 pt-8 sm:pl-24 sm:pr-32 sm:pt-16">
        <p className="sm:text-lg py-8 text-base lg:text-lg">
          I am a software developer and currently a bachelor&apos;s student who
          have interests in the fields of data science, machine learning, and
          web development. In 2019, I saw a advertisment on social media to
          learn web development and get a free coding certificate from their my
          journey to code started. Over the time I get to know that design is
          more complicated than coding it but the key to great design is
          iterating and improving. The thing that excites me most as a
          development is being able to design and create things that solve real
          problems. Programming has taught me problem-solving skills not just on
          screens but in other fields too.
          <br />
          <br />I like websites with a clean UI, responsive. I have worked on
          different side project in differnet domains. Side projects have always
          exiting me, as they are revolting,intersting and always takes a lot
          more than expected but gives more than thought.
        </p>

        {/* ================================================================== */}
        <p className="text-2xl lg:text-3xl pb-4">Skills</p>

        <p className="px-5 py-3">Web development</p>
        <p className="px-20">
          HTML5
          <br />
          CSS3
          <br />
          Bootstrap
          <br />
          Tailwind
          <br />
          JavaScript
          <br />
          React
          <br />
          NExt
        </p>

        <p className="px-5 pt-7 pb-3">Industry knowledge</p>
        <p className="px-20">
          UI UX
          <br />
          Git/ Github
          <br />
          Prototyping
          <br />
          Wireframing
        </p>

        <p className="px-5 pt-7 pb-3">Machine Learning && Data Science</p>
        <p className="px-20">
          Numpy
          <br />
          Pandas
          <br />
          Matplotlib
          <br />
          Seaborn
          <br />
          Plotly
          <br />
          Sklearn
          <br />
          Tensorflow
        </p>

        {/* ================================================================== */}
        <p className="text-2xl lg:text-3xl pt-10">Some thoughts</p>

        <p className="py-8 pl-6 sm:text-lg text-base lg:text-lg">
          Artifical Intetlligence have always make me wonder how pieces of metal
          thinks and getting close to the humanity. A journey from wondering to
          creating have been and continuously will be. Universe is filled with
          data, data is constant, depends on the mind useful or useless
          difficult to understand, useful for right minds, but it is universal
          and graphs needs data so, I data is needed to make beautiful graphs
          tahta can be understandeable by anyone
          <br />
          <br />
          Data is continuuos univerasal right for the right mind beine taught to
          us since we ere born and will be their when we will die and data
          science helps us to retreive information from the data
        </p>
      </div>
    </div>
  );
}
export default About;
