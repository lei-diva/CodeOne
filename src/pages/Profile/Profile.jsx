import React from "react";
import "./Profile.css";
import { HomeNav } from "../../components/home-nav-bar/home-nav-bar.component";
import { ProjectList } from "../../components/project-list/project-list.component";
import { SearchBox } from "../../components/search-box/search-box.component";
import Boy from "../../images/boy.png";
import { connect } from "react-redux";
import { css } from "@emotion/core";
import PropagateLoader from "react-spinners/PropagateLoader";
import { Footer } from "../../components/footer/footer.component";

const override = css`
  position: relative;
  margin: auto;
  top: 45vh;
  left: 45vw;
`;

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: null,
      searchField: "",
      userRef: "init",
      currentUser: "init"
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      userRef: nextProps.userRef,
      currentUser: nextProps.currentUser
    });
  }

  componentWillMount() {
    try {
      this.setState({
        userRef: this.props.location.state.userRef,
        currentUser: this.props.location.state.currentUser
      });
    } catch (error) {
      console.log("New project");
    }
  }

  dbCall = () => {
    if (this.props.userRef && this.props.userRef != "init") {
      this.props.userRef
        .collection("projects")
        .get()
        .then(querySnapshot => {
          const oldprojects = this.state.projects ? this.state.projects : [];

          querySnapshot.forEach(doc => {
            const newproject = {
              name: doc.id,
              content: doc.data()
            };
            oldprojects.push(newproject);
          });
          this.setState(
            {
              projects: oldprojects
            },
            console.log(this.props.projects)
          );
        });
    }
  };

  deleteProject = project_name => {
    /* Delete project */
    if (this.props.userRef) {
      this.props.userRef
        .collection("projects")
        .doc(project_name)
        .delete()
        .then(() => {
          let newprojects = this.state.projects;
          newprojects = newprojects.filter(
            project => project.name != project_name
          );
          this.setState({ projects: newprojects });
          console.log("Document successfully deleted!");
        })
        .catch(function(error) {
          console.error("Error removing document: ", error);
        });
    }
  };

  handleSearch = e => {
    /* Search component */
    this.setState({ searchField: e.target.value });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.userRef != this.props.userRef) {
      this.dbCall();
    }
  }

  render() {
    let projectsload;
    let filteredProjects;
    let display = "";
    let id = "";

    if (this.state.currentUser && this.state.projects) {
      display = this.props.currentUser.displayName;
      id = this.props.currentUser.id;
      filteredProjects = this.state.projects.filter(project =>
        project.name
          .toLowerCase()
          .includes(this.state.searchField.toLowerCase())
      );
    }

    if (!this.state.projects || !this.state.userRef == "init") {
      projectsload = (
        <div className="loading-page">
          <PropagateLoader
            css={override}
            className="loader"
            size={20}
            color={"#38B7E0"}
            loading={true}
          />
        </div>
      );
    } else if (this.state.projects.length == 0) {
      projectsload = (
        <span className="no-project-text">You have no projects</span>
      );
    } else {
      projectsload = (
        <div>
          <ProjectList
            deleteProject={this.deleteProject}
            projects={filteredProjects}
          />
        </div>
      );
    }

    return (
      <div className="profilepage">
        <HomeNav className="home-nav" />

        <div className="display-name">
          <img className="user-character" alt="usericon" src={Boy}></img>
          <div className="profile-title">
            <div className="name-text">
              <h2 className="name">{display}</h2>

              <span className="update-text">
                Update your projects or create a new one
              </span>
            </div>
          </div>
        </div>
        <button
          className="new-project-button"
          onClick={() => this.props.history.push("/playground")}
        >
          Create a New Project
        </button>
        <hr className="profile-hr"></hr>
        <div className="search-nav">
          <span id="search-nav-title">Projects</span>
          <SearchBox id="search-box-nav" handleChange={this.handleSearch} />
        </div>
        <div className="profile-projects">{projectsload}</div>

        <Footer position="home-footer" />
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    userRef: state.userRef,
    currentUser: state.currentUser
  };
};

export default connect(mapStateToProps)(ProfilePage);
