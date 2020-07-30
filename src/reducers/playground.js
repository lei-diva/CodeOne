import { createReducer } from '@reduxjs/toolkit'

const playground = {
    projectname: '',
    panels: {
        Html: {
            display: true,
            content: '',
            filename: "index.html"
        },
        Css: {
            display: true,
            content: '',
            filename: "styles.css"
        },
        Js: {
            display: true,
            content: '',
            filename: "script.js"
        }
    }
}

const playgroundReducer = createReducer(playground, {
    UPDATE_PROJECT_NAME: (state, action) => {
        state.projectname = action.projectname;
    },
    TOGGLE_DISPLAY: (state, action) => {
        state.panels[action.panel].display = !state.panels[action.panel].display;
    },
    UPDATE_FILENAME: (state, action) => {
        state.panels[action.panel].filename = action.filename;
    },
    UPDATE_CONTENT: (state, action) => {
        state.panels[action.panel].content = action.content;
    },
    SELECT_PROJECT: (state, action) => {
        state.projectname = action.projectname;
        state.panels.Html.content = action.content.Html;
        state.panels.Js.content = action.content.Js;
        state.panels.Css.content = action.content.Css;
    }
})

export default playgroundReducer;