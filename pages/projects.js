import React from "react";
import { Transition } from "@headlessui/react";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (

    <div className="bg-light ">

      {/* project heading */}
      <div className="flex justify-center text-extra">
        <a href="./">
          <p className="leading-normal font-abc my-[5rem] text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-left font-bold max-w-3xl lg:max-w-4xl">
            <span className="line-before"></span> Projects <span className="line-after"></span>
          </p>
        </a>
      </div>


      {/* ==================== data science section =================== */}
      <div className="flex flex-col bg-extra">

        <p className="leading-normal mb-[-20px] text-light font-abc pt-20 text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-left font-bold max-w-2xl lg:max-w-3xl ml-10">
          Data Science
        </p>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12 w-full h-full p-[2rem] md:p-[3.5rem] ">
          <ProjectCard
            style={{ backgroundColor: "#fda381" }}
            color="[#fda381]"
            name="Motion Identification"
            description="Engineered a motion identification model capable of recognizing up to 50 distinct motions. Helps in expanding surveillance capabilities with enhanced accuracy and versatility."
            field="Data Science"
            link="https://github.com/anmolmalik01/motion-identification"
          />

          <ProjectCard
            style={{ backgroundColor: "#c966bd" }}
            color="[#c966bd]"
            name="Customer Segmentation"
            description="Developed a customer segmentation model utilizing various strategies to classify customers. Helps in identifing potential customers, enchanced targeted marketing, and optimize churn and retention management strategies."
            field="Data Science"
            link="https://github.com/anmolmalik01/Customer-segmentation"
          />

          <ProjectCard
            style={{ backgroundColor: "#66c993" }}
            color="[#66c993]"
            name="Walmart Sales Forcasting"
            description="Sales forcasting and customer analysis to identify trends and patterns on Walmart customer data. Used time series analysis and ARIMA modeling to develop a robust sales forecasting model."
            field="Data Science"
            link="https://github.com/anmolmalik01/sales-forcasting"
          />

          <ProjectCard
            style={{ backgroundColor: "#87bee7" }}
            color="[#87bee7]"
            name="Data Science Jobs Analysis"
            description="A data science project made with Plotly that visualises different
            data from jobs (data from Kaggle)"
            field="Data Science"
            link=""
          />

          <ProjectCard
            style={{ backgroundColor: "#ad9ff4" }}
            color="[#ad9ff4]"
            name="Carbon Dioxide emission data analysis"
            description="A data science and machine learning project that visualises previous
            emission data and predicts an increase in data."
            field="Data Science"
            link=""
          />

        </div>
      </div>




      {/* ==================== web development =================== */}
      <div className="flex flex-col">

        <p className="leading-normal font-abc pt-20 text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-left font-bold max-w-2xl lg:max-w-3xl ml-10">
          Web development
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 w-full h-full p-[3.5rem] ">

          <ProjectCard
            style={{ backgroundColor: "#66c993" }}
            color="[#66c993]"
            name="weights-custom"
            description="This is a React webapp that uses react states to calculate weight on
            different planets."
            field="Web development"
            link="https://github.com/anmolmalik01/Weights-Custom"
          />

        </div>
      </div>



      {/* ==================== Software =================== */}
      <div className="flex flex-col bg-extra">

        <p className="leading-normal text-white font-abc pt-20 text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-left font-bold max-w-2xl lg:max-w-3xl ml-10">
          Software
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 w-full p-[3.5rem] ">

          <ProjectCard
            style={{ backgroundColor: "#66c993" }}
            color="[#66c993]"
            name="package-installer"
            description="A package that allows you to easily add a package installer to your
            project that keeps all of the modules included in the project and
            allows others to utilise it."
            field="Software"
            link="https://github.com/anmolmalik01/package-installer"
          />

          <ProjectCard
            style={{ backgroundColor: "#ad9ff4" }}
            color="[#ad9ff4]"
            name="face-check"
            description="A Tkinter-based openCV GUI app that can perform face recognition and
            detection."
            field="Software"
            link="https://github.com/anmolmalik01/Face-check"
          />

          <ProjectCard
            style={{ backgroundColor: "#fda381" }}
            color="[#fda381]"
            name="Image captioning Mobile app"
            description="Developed the mobile app, that can generate captions for images and live videos. Constructed a deep neural network leveraging the ResNet architecture, achieving advanced performance and accuracy in image recognition."
            field="Software"

          />

          <ProjectCard
            style={{ backgroundColor: "#c966bd" }}
            color="[#c966bd]"
            name="Sign language predication"
            description="Machine learning neural network that can predict sign language (in
              beta stage)"
            field="Software"
            link="https://github.com/anmolmalik01/sign_language-MNIST"
          />

        </div>
      </div>



      {/* ==================== Design/ Dashboard =================== */}
      <div className="flex flex-col">

        <p className="leading-normal font-abc pt-20 text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-left font-bold max-w-2xl lg:max-w-3xl ml-10">
          Design/Dashboard
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 w-full p-[3.5rem] ">

          <ProjectCard
            style={{ backgroundColor: "#fda381" }}
            color="[#fda381]"
            name="Global Engery Consumpution Dashboard"
            description="A tableau dashboard that shows global energy consumpution, change in engery consumpution over the year and average requirement."
            field="Dashboard"
            link="https://public.tableau.com/views/Globaleneryuse/MOM23W33?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link"
          />

          <ProjectCard
            style={{ backgroundColor: "#c966bd" }}
            color="[#c966bd]"
            name="Tata Challenge Vizulization"
            description="Dashboard for tata virtual internship."
            field="Dashboard"
            link="https://public.tableau.com/views/Tatavisulaization/Dashboard1?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link"
          />

          <ProjectCard
            style={{ backgroundColor: "#ad9ff4" }}
            color="[#ad9ff4]"
            name="UI/ UX design"
            description="Figma Mobile Designs"
            field="Design"
            link="https://www.figma.com/file/yq7fP6LbEqN4CH2ZIDYWRg/Mobile-Design-Community?type=design&is-community-duplicate=1&fuid="
          />

        </div>
      </div>

    </div>
  );
}

export default Projects;
