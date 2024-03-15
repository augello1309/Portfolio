import Template from "../Template";
import "./Routes.css";

const ProjectContain = () => {
  return (
    <>
      <div className="projectgrid">
        <div className="item">
          <div className="all">
            <p className="phonetext">
              Here is a picture of my phonebook. <br />
              Click the picture to open up the github link.
            </p>
            <a href="https://github.com/augello1309/phonebook">
              <img className="phoneimg" src="Phonebook.png"></img>
            </a>
            <p className="textbottom">
              This phonebook allows you to view, add, <br />
              search, delete, clear, or update a number. <br />
              All of this was coded in C.
            </p>
          </div>
        </div>
        <div className="item">
          <div className="all">
            <p className="phonetext">
              Here is a picture of my Expense Tracker. <br />
              Click the picture to open up the github link.
            </p>

            <a href="https://github.com/thraxy/Expense-Tracker">
              <img className="phoneimg" src="Expense Tracker.png"></img>
            </a>
            <p className="textbottom">
              This program lets you input, view, and find expenses and allows
              you to search for an expense by date. It also let's you make an
              account. If you are an admin, the program will allow you to have
              access to the admin page. This also uses the Mongo database. This
              website was coded in JSX, HTML, and CSS and was made using ReactJS
              and NodeJS.
            </p>
          </div>
        </div>
        <div className="item">
          <div className="all">
            <p className="phonetext">
              Here is a picture of my Water America website. Click the picture
              to open up the github link.
            </p>
            <a href="https://github.com/augello1309/Water-America_Website">
              <img className="phoneimg" src="Water America.png"></img>
            </a>
            <p className="textbottom">
              This website is a mini website that is based off of a fake company
              called Water America. This website allows you to make your own
              account, input your address, view past addresses, and allow you to
              change your address if you're moving. This website has an admin
              page for selected users to see all of the move information. This
              website has address validation, email verification, and uses the
              Mongo database. You also get sent a verification email once you
              try to change your address for security reasons. This website was
              made using Flask python.
            </p>
          </div>
        </div>
        <div className="item">
          <div className="all">
            <p className="phonetext">
              Here is a picture of my Web Crawler. Click the picture to open up
              the github link.
            </p>
            <a href="https://github.com/augello1309/Multithreaded-Webcrawler-in-C">
              <img className="phoneimg" src="Web Crawler.png"></img>
            </a>
            <p className="textbottom">
              What this program does is it goes to one link provided, then it
              finds all the links on the page and goes to all those links. This
              process keeps repeating until 100 websites have been found. All
              failed connected websites get printed to the terminal and all
              successfully connected websites get printed to a text file. On top
              this, this program is multithreaded. There are ten threads each
              searching for more links concurrently. This progrem was made
              entirely in C.
            </p>
          </div>
        </div>
        <div className="item">
          <div className="all">
            <p className="phonetext">
              Here is a picture of my linux shell. Click the picture to open up
              the github link.
            </p>
            <a href="https://github.com/augello1309/Shell-With-Linux-Commands">
              <img className="phoneimg" src="Linux Shell.png"></img>
            </a>
            <p className="textbottom">
              This program is a mock linux shell. Some of the commands are pwd,
              cd, ls, mkdir, etc. The shell also involves forking, which allows
              the creation for more processes to be run. This entire project was
              coded in C.
            </p>
          </div>
        </div>
        <div className="item">
          <div className="portblock">
            This Website is also one that I created. <br />
            <a className="portflink"> Click here to go to the github page</a>
          </div>
        </div>
      </div>
    </>
  );
};

function Projects() {
  return (
    <Template
      children={null}
      page="My Projects"
      body={ProjectContain()}
    ></Template>
  );
}

export default Projects;
