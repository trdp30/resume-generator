import React from "react";

function Resume() {
  return (
    <div className="flex flex-1 flex-col text-[8px] space-y-2 overflow-hidden">
      <div className="flex flex-1 justify-between">
        <div className="flex flex-1 flex-col">
          <div className="font-extrabold text-2xl">Trideep Kumar Das</div>
          <div className="text-sm">
            <span className="text-[10px]">Email: </span>
            <a
              className="italic text-blue-600"
              href="mailto:trdp30@gmail.com"
              // className="margin-ten-right text-color-red disableOnPrint"
              target="_blank"
              rel="noreferrer">
              trdp30@gmail.com
            </a>
          </div>
        </div>
        <div className="flex flex-col w-80">
          <div>
            <b>Address: </b>Mohmaiki Gaon, Bokakhat, PO: Bokakhat, Dist: Golaghat, Bokakhat, 785612,
            India
          </div>
          <div>
            <b>Phone: </b>
            <a href="tel:09706055724" className="text-blue-600" target="_blank" rel="noreferrer">
              +91-9706055724
            </a>
          </div>
          <div>
            <b>Github: </b>
            <a className="text-blue-700" href="https://github.com/trdp30">
              https://github.com/trdp30
            </a>
          </div>
          <div>
            <b>Linkedin: </b>
            <a className="text-blue-700" href="https://www.linkedin.com/in/trideep-das-817962133">
              https://www.linkedin.com/in/trideep-das-817962133
            </a>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="float-right w-[320px] space-y-2">
          <div className="font-bold text-sm">Skills</div>
          <div className="flex flex-wrap">
            <span className="px-2 py-1 bg-gray-300 rounded-md m-1 font-bold">JavaScript</span>
            <span className="px-2 py-1 bg-gray-300 rounded-md m-1 font-bold">CSS</span>
            <span className="px-2 py-1 bg-gray-300 rounded-md m-1 font-bold">HTML</span>
            <span className="px-2 py-1 bg-gray-300 rounded-md m-1 font-bold">Typescript</span>
            <span className="px-2 py-1 bg-gray-300 rounded-md m-1 font-bold">ReactJs</span>
            <span className="px-2 py-1 bg-gray-300 rounded-md m-1 font-bold">EmberJs</span>
            <span className="px-2 py-1 bg-gray-300 rounded-md m-1 font-bold">BackboneJs</span>
            <span className="px-2 py-1 bg-gray-300 rounded-md m-1 font-bold">Semantic UI</span>
            <span className="px-2 py-1 bg-gray-300 rounded-md m-1 font-bold">Material UI</span>
            <span className="px-2 py-1 bg-gray-300 rounded-md m-1 font-bold">TailwindCss</span>
            <span className="px-2 py-1 bg-gray-300 rounded-md m-1 font-bold">LESS</span>
            <span className="px-2 py-1 bg-gray-300 rounded-md m-1 font-bold">GraphQL</span>
            <span className="px-2 py-1 bg-gray-300 rounded-md m-1 font-bold">Apollo client</span>
            <span className="px-2 py-1 bg-gray-300 rounded-md m-1 font-bold">Firebase</span>
            <span className="px-2 py-1 bg-gray-300 rounded-md m-1 font-bold">Redux</span>
            <span className="px-2 py-1 bg-gray-300 rounded-md m-1 font-bold">Redux-saga</span>
            <span className="px-2 py-1 bg-gray-300 rounded-md m-1 font-bold">RTK query</span>
            <span className="px-2 py-1 bg-gray-300 rounded-md m-1 font-bold">Jest</span>
            <span className="px-2 py-1 bg-gray-300 rounded-md m-1 font-bold">REST API</span>
            <span className="px-2 py-1 bg-gray-300 rounded-md m-1 font-bold">Webpack</span>
            <span className="px-2 py-1 bg-gray-300 rounded-md m-1 font-bold">Grunt</span>
          </div>
          <div className="font-bold text-sm">Education</div>
          <div>
            <div>Master of Computer Applications - MCA</div>
            <div>Sikkim Manipal Institute of Technology (SMIT)</div>
            <div>2015 – 2018</div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="font-bold text-sm">Profile</div>
          <div>
            <b>Experienced</b> and <b>accomplished</b> software engineer specializing in{" "}
            <b>frontend development</b>, with <b>expertise</b> <br /> in a wide range of
            technologies including{" "}
            <b>
              JavaScript, React.js, Redux.js, Tailwind CSS, Apollo GraphQL, Webpack, Backbone.js,
              Ember.js, jQuery,{" "}
            </b>
            and more. Possessing over <b>5 years</b> of industry experience, I possess a{" "}
            <b>comprehensive</b> understanding of the{" "}
            <b>entire software development lifecycle, from design to deployment</b>. Adept at
            leading <b>end-to-end</b> application development, successfully <b>guiding</b> projects
            from inception to production. Self-motivated professional with strong{" "}
            <b>problem-solving</b> abilities, thriving in <b>collaborative</b> team settings.
          </div>
        </div>

        <div className="space-y-2">
          <div className="font-bold text-sm">Work experience</div>
          <div>
            <div className="font-bold">
              Senior Software Engineering - FrontEnd @ <span>Talview</span>
              <span>(06/2018 – Present)</span>
            </div>
            <div className="italic">Bengaluru, India</div>
          </div>
          <div>
            <ul>
              <li>
                - <b>Developed</b> and <b>implemented</b> innovative front-end solutions utilizing{" "}
                <b>HTML, CSS,</b> and <b>JavaScript</b> <br />
                to enhance <b>user experience</b> and improve overall application <b>performance</b>
                .
              </li>
              <li>
                - <b>Collaborated</b> with product managers and UX designers to translate business
                requirements into <b>scalable</b> <br />
                and <b>efficient</b> code, resulting in a seamless and intuitive user interface.
              </li>
              <li>
                - <b>Performed</b> meticulous daily <b>code reviews</b>, adeptly identifying and
                resolving bugs and <br /> performance bottlenecks, which led to a consistent{" "}
                <b>20% enhancement</b> in application loading <br />
                speed and a marked augmentation in overall <b>system stability</b>.
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-2">
          <div className="font-bold text-sm">Projects</div>
          <div>
            <ul style={{ listStyleType: "disc" }} className="divide-y">
              <li className="pb-2">
                <div>
                  <b>Project: </b>Recruit
                </div>
                <div>
                  <b>Framework: </b>EmberJS
                </div>
                <div>
                  <b>Description: </b>
                  <b>Led</b> the development and <b>upkeep</b> of Talview Recruit—a proficient admin
                  platform facilitating interview scheduling and evaluation. Notably <b>engaged</b>{" "}
                  in <b>Maintenance</b> and <b>Enhancement</b> roles.
                </div>
                <div>
                  <b>Key Technologies: </b>
                  <b>emberjs, ember-data, semantic-ui, sentry</b>
                </div>
              </li>
              <li className="py-2">
                <div>
                  <b>Project: </b>Talview Orchestration Platform (TOP)
                </div>
                <div>
                  <b>Framework: </b>ReactJs
                </div>
                <div>
                  <b>Description: </b>
                  <b>Pioneered</b> the <b>conception</b> and <b>dynamic enhancement</b> of Talview
                  Orchestration Platform (TOP), leveraging cutting-edge technologies.{" "}
                  <b>Executed</b> duties spanning <b>Creation, Maintenance, and Enhancement</b>.
                </div>
                <div>
                  <b>Key Technologies: </b>
                  <b>
                    react, redux, webpack, tailwindcss,react-table, graphQL, redux-saga, storybook,
                    apollo-client
                  </b>
                </div>
              </li>

              <li className="py-2">
                <div>
                  <b>Project: </b>Candidate
                </div>
                <div>
                  <b>Framework: </b>EmberJS
                </div>
                <div>
                  <b>Description: </b>
                  <b>Enriched</b> Talview Candidate—an adaptive assessment hub—through adept{" "}
                  <b>Maintenance</b> and <b>Enhancement</b> efforts, <b>bolstering</b> its
                  capability for candidates to partake in scheduled evaluations.
                </div>
                <div>
                  <b>Key Technologies: </b>
                  <b>emberjs, ember-data, semantic-ui, sentry</b>
                </div>
              </li>

              <li className="py-2">
                <div>
                  <b>Project: </b>Proview client
                </div>
                <div>
                  <b>Framework: </b>BackboneJs
                </div>
                <div>
                  <b>Description: </b>Actively <b>contributed</b> to Proview client—an innovative
                  event-capture platform. Empowered comprehensive candidate evaluation by recording
                  diverse actions, including 'multiple face detection', 'copy/paste', and 'record
                  screen activity'.
                </div>
                <div>
                  <b>Key Technologies: </b>
                  <b>backbone, grunt, browserify, jquery, sentry, socket.io, getstream.io</b>
                </div>
              </li>

              <li className="py-2">
                <div>
                  <b>Project: </b>Proview Live Proctor
                </div>
                <div>
                  <b>Framework: </b>ReactJs
                </div>
                <div>
                  <b>Description: </b>
                  <b>Spearheaded</b> the conception, progression, and <b>maturation</b> of Proview
                  Live Proctor—a dynamic real-time proctoring system. Elevated candidate monitoring
                  through live video and screen sharing, augmented by real-time chat interaction.
                </div>
                <div>
                  <b>Key Technologies: </b>
                  <b>
                    react, redux, webpack, semantic-ui, craco, react-table, getstream.io, socket.io,
                    graphQL, sentry
                  </b>
                </div>
              </li>

              <li className="py-2">
                <div>
                  <b>Project: </b>Passage Question
                </div>
                <div>
                  <b>Framework: </b>ReactJs
                </div>
                <div>
                  <b>Description: </b>
                  <b>Orchestrated</b> the creation and ongoing advancement of Passage Question—an
                  adaptive assessment hub. <b>Led</b> efforts spanning <b>Creation, Maintenance</b>,
                  and <b>Enhancement</b>.
                </div>
                <div>
                  <b>Key Technologies: </b>
                  <b>react, redux, webpack, semantic-ui, craco, sentry</b>
                </div>
              </li>
              <li className="pt-2">
                <div>
                  <b>Project: </b>Custom Form
                </div>
                <div>
                  <b>Framework: </b>Hugo
                </div>
                <div>
                  <b>Description: </b>Skillfully tackled <b>troubleshooting</b> and{" "}
                  <b>enrichment</b> of Custom Form—an integral assessment initiation and evaluation
                  tool.
                </div>
                <div>
                  <b>Key Technologies: </b>
                  <b>hugo, jQuery, semantic-ui, sentry</b>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex space-x-2">
        <div className="flex flex-1">
          <div className="space-y-2">
            <p>
              <div className="font-bold text-sm">Achievements</div>
            </p>
            <ul>
              <li>
                - Spearheaded the development of a new feature that resulted in a 30% increase in
                user engagement.
              </li>
              <li>
                - Successfully optimized application performance, reducing load times by 40% and
                improving overall user satisfaction.
              </li>
              <li>
                - Secured project recognition as a benchmark for code quality standards, setting a
                gold standard for the organization's software development practices.
              </li>
              <li>
                - Mentored junior/senior developers, resulting in a 40% - 60% improvement in their
                coding skills and productivity.
              </li>
              <li>
                - Elevated test coverage from 56% to an impressive 85% and maintained an average
                contribution of 40% test coverage across multiple projects, significantly bolstering
                software reliability and robustness.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-1">
          <div className="space-y-2">
            <p>
              <div className="font-bold text-sm">Awards:</div>
            </p>
            <ul>
              <li>
                <strong>
                  -{" "}
                  <a
                    className="text-blue-700"
                    target="_blank"
                    href="https://www.linkedin.com/in/trideep-das-817962133/overlay/1635545776153/single-media-viewer/?profileId=ACoAACC2FBMBOF-kYOqZUzcG7ejHP4cDfHV0tqw"
                    rel="noreferrer">
                    Production Engineering Champion
                  </a>
                </strong>
                : Recognized as the Production Engineering Champion for Quarter 3 - 2023
              </li>
              <li>
                <strong>
                  -{" "}
                  <a
                    className="text-blue-700"
                    target="_blank"
                    href="https://www.linkedin.com/in/trideep-das-817962133/overlay/1635487249432/single-media-viewer/?profileId=ACoAACC2FBMBOF-kYOqZUzcG7ejHP4cDfHV0tqw"
                    rel="noreferrer">
                    Annual Champion
                  </a>
                </strong>
                : In recognition of exemplary performance & valuable contribution to organization.
              </li>
              <li>
                <strong>
                  -{" "}
                  <a
                    className="text-blue-700"
                    target="_blank"
                    href="https://www.linkedin.com/in/trideep-das-817962133/overlay/1635455402697/single-media-viewer/?profileId=ACoAACC2FBMBOF-kYOqZUzcG7ejHP4cDfHV0tqw"
                    rel="noreferrer">
                    Engineering Champion
                  </a>
                </strong>
                : Recognized for delivering multiple features that have greatly enhance user
                experience, application performance and stability.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
