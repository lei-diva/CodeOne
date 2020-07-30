import React, {useState, useEffect} from 'react';
import './Profile.css';
import { HomeNav } from '../../components/home-nav-bar/home-nav-bar.component';
import {ProjectList} from '../../components/project-list/project-list.component';
import {SearchBox} from '../../components/search-box/search-box.component';
import Playground from '../Playground/Playground';
import {withRouter, Link} from 'react-router-dom';
import {Jumbotron, Container} from 'react-bootstrap';
import Boy from '../../images/boy.png'
import {Footer} from '../../components/footer/footer.component';
import {useSelector} from 'react-redux';


const ProfilePage = (props) => {
    const userRef = useSelector(state=>state.userRef);
    const currentUser = useSelector(state=>state.currentUser);
    const [projects, setProjects] = useState([]);
    let [searchField, setSearchField] = useState('');




    useEffect(()=> {

        if (userRef && userRef != 'init'){
            userRef.collection("projects").get()
            .then(querySnapshot => {
             const oldprojects = projects;
             querySnapshot.forEach( doc => {
                 const newproject = {
                     name: doc.id,
                     content: doc.data(),
                 }
                 oldprojects.push(newproject);

             });
             console.log("HERE 1");
             console.log(oldprojects);
             console.log(searchField);
             console.log("HERE");

             setProjects(oldprojects);

         });


         }


    }, [userRef]);
        /* get request to database for projects */


    const selectProject = (content, projectname) => { /* Pass props from selected project to playground */
        props.history.push({
            pathname: '/playground',
            state: {
                content: content,
                projectname: projectname
            }
          })
        }

    const deleteProject = (project_name) => { /* Delete project */
        if (userRef){
        userRef.collection("projects").doc(project_name).delete()
        .then(()=> {
            let newprojects = projects;
            newprojects = newprojects.filter((project)=>(project.name != project_name));
            setProjects(newprojects);
            console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    }
}

    const handleSearch = (e) => { /* Search component */
        setSearchField(e.target.value);
    }



        console.log("useref: " + userRef);
        console.log("currentUser: "+ currentUser);
        let display = ''
        let id = ''

        if (currentUser){
            display = currentUser.displayName;
            id = currentUser.id;
        }


        console.log(display);
        console.log(projects.length);
        let filteredProjects = projects.filter(project =>
            project.name.toLowerCase().includes(searchField.toLowerCase()));


        console.log("LENGTH");
        console.log(searchField);
        console.log(filteredProjects.length);
        return(

        <div className="profilepage">

            <HomeNav className="home-nav"/>

            <Jumbotron className="display-name">
            <img className="user-character" alt="usericon" src={Boy}></img>
            <div className="profile-title">
            { console.log(projects.length)}

            {projects.length}
            <h2>{display}</h2>

            Update your projects or create a new one!{projects.length}
            </div>
            <button className=" new-project-button" onClick={()=> props.history.push('/playground')}><span id="plus">+</span></button>
            </Jumbotron>
            <div className="search-nav">
               <span id="search-nav-title">Projects</span>
            <SearchBox id="search-box-nav" handleChange={handleSearch}/>
             </div>
            <div className="profile-projects">



            {
                projects.length == 0?(

                            <span className="no-project-text">{projects.length}</span>


            ):
            (
                <div>

                <ProjectList deleteProject={deleteProject} selectProject={selectProject} projects={filteredProjects}/>
                </div>
            )
            }



                        </div>

            <Footer position="home-footer"/>

        </div>
    );


}


export default withRouter(ProfilePage);
