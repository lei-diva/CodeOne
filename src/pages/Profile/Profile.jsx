import React from 'react';
import './Profile.css';
import { HomeNav } from '../../components/home-nav-bar/home-nav-bar.component';
import {ProjectList} from '../../components/project-list/project-list.component';
import {SearchBox} from '../../components/search-box/search-box.component';
import Playground from '../Playground/Playground';
import {withRouter} from 'react-router-dom';
import {Jumbotron, Container} from 'react-bootstrap';
import Boy from '../../boy.png'



class ProfilePage extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            projects: [],
            searchField: ''
        }
    }

    componentDidMount() {

        if (this.props.userRef){
            const {userRef} = this.props;
           userRef.collection("projects").get()
           .then(querySnapshot => {
            const oldprojects = this.state.projects;
            querySnapshot.forEach( doc => {
                console.log(doc);
                const newproject = {
                    name: doc.id,
                    content: doc.data(),
                }
                oldprojects.push(newproject);

            });
            this.setState({
                projects: oldprojects
            }
            );
        });


        }
    }

    selectProject = (content, projectname) => {
        this.props.history.push({
            pathname: '/playground',
            state: {
                content: content,
                projectname: projectname
            }
          })
        }

    deleteProject = (project_name) => {
        if (this.props.userRef){
        this.props.userRef.collection("projects").doc(project_name).delete()
        .then(()=> {
            let newprojects = this.state.projects;
            newprojects = newprojects.filter((project)=>(project.name != project_name));
            this.setState({projects: newprojects});
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    }
}

    handleSearch = (e) => {
        this.setState({searchField: e.target.value});
    }


    render(){
        let display = ''
        if (this.props.currentUser){
            display = this.props.currentUser.displayName;
        }

        let id = ''
        if (this.props.currentUser){
            id = this.props.currentUser.id;
        }

        console.log(display);
        const { projects, searchField } = this.state;
        const filteredProjects = projects.filter(project =>
            project.name.toLowerCase().includes(searchField.toLowerCase()));
            console.log(projects);
        return(

        <div className="profilepage">
            <HomeNav className="home-nav" homepath='/profile'/>

            <Jumbotron className="display-name">
            <img className="user-character" alt="usericon" src={Boy}></img>
            <div className="profile-title">
            <h2>{display}</h2>
            Update your projects or create a new one!
            </div>
            <button className=" new-project-button" onClick={()=> this.props.history.push('/playground')}><span id="plus">+</span></button>
            </Jumbotron>
            <div className="search-nav">
               <span id="search-nav-title">Projects</span>
            <SearchBox id="search-box-nav" handleChange={this.handleSearch}/>
             </div>
            <Jumbotron fluid className="profile-projects">
                        <Container>

            {
                projects.length == 0?(

                            <span className="no-project-text">You have no projects</span>


            ):
            (
                <div>

                <ProjectList deleteProject={this.deleteProject} selectProject={this.selectProject} projects={filteredProjects}/>
                </div>
            )
            }


                        </Container>
                        </Jumbotron>



        </div>
    );
}

}

export default withRouter(ProfilePage);
